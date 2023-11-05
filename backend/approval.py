import pandas as pd
import automated_reason
from pydantic import BaseModel
import numpy_financial as npf


AnalyzedHomeBuyerInfoDF = pd.read_csv('AnalyzedHomeBuyerInfo.csv')
AcceptedHomeBuyerInfoDF = AnalyzedHomeBuyerInfoDF[AnalyzedHomeBuyerInfoDF['Approved'] != 'N']

#Make 3 bins for the AppraisedValue column in the AcceptedHomeBuyerInfoDF dataframe
bins = pd.cut(AcceptedHomeBuyerInfoDF['AppraisedValue'], 3)
#Split the DF into 3 bins
group_names = ['Low', 'Medium', 'High']
#Add a new column to the DF with the bins
AcceptedHomeBuyerInfoDF['AppraisedValueBins'] = pd.cut(AcceptedHomeBuyerInfoDF['AppraisedValue'], 3, labels=group_names)
#Print the DF 
AcceptedHomeBuyerInfoDF.head()
LowAppraisedValue = AcceptedHomeBuyerInfoDF[AcceptedHomeBuyerInfoDF['AppraisedValueBins'] == 'Low']
MediumAppraisedValue = AcceptedHomeBuyerInfoDF[AcceptedHomeBuyerInfoDF['AppraisedValueBins'] == 'Medium']
HighAppraisedValue = AcceptedHomeBuyerInfoDF[AcceptedHomeBuyerInfoDF['AppraisedValueBins'] == 'High']

print(LowAppraisedValue["AppraisedValue"].min(), LowAppraisedValue["AppraisedValue"].max())
print(MediumAppraisedValue["AppraisedValue"].min(), MediumAppraisedValue["AppraisedValue"].max())
print(HighAppraisedValue["AppraisedValue"].min(), HighAppraisedValue["AppraisedValue"].max())

print(LowAppraisedValue["CreditCardPayment"].median(), LowAppraisedValue["CarPayment"].median(), LowAppraisedValue["StudentLoanPayments"].median())
print(MediumAppraisedValue["CreditCardPayment"].median(), MediumAppraisedValue["CarPayment"].median(), MediumAppraisedValue["StudentLoanPayments"].median())
print(HighAppraisedValue["CreditCardPayment"].median(), HighAppraisedValue["CarPayment"].median(), HighAppraisedValue["StudentLoanPayments"].median())

class Data(BaseModel):
    CarPayment: int
    StudentLoanPayments: int
    CreditCardPayments: int
    CreditScore: int
    GrossMonthlyIncome: int
    AppraisedValue: int
    DownPayment: int

def checkIfApproved(data: Data):
    #First see if they are approved
    result = dict()
    result["Approved"] = "N"
    LTV = 1
    if data.AppraisedValue > 0:
        LTV = (data.AppraisedValue - data.DownPayment) / data.AppraisedValue
    result["LTV"] = LTV
    MonthlyMortageDebt = 0
    DTI = 0
    FEDTI = 0
    for i in range(0,3):
        #Assume 8% interest rate
        fixedYears = [30, 20, 15][i]
        MonthlyMortageDebt = npf.pmt(0.08/12, fixedYears*12, - (data.AppraisedValue - data.DownPayment))
        result["MonthlyMortageDebt"] = MonthlyMortageDebt
        #Check if their LTV is in the grey zone
        if result["LTV"] > .8 and result["LTV"] < .95:
            MonthlyMortageDebt += data.AppraisedValue * 0.1 / 12
        
        DTI = (MonthlyMortageDebt + data.CarPayment + data.StudentLoanPayments + data.CreditCardPayments) / data.GrossMonthlyIncome
        FEDTI = MonthlyMortageDebt / data.GrossMonthlyIncome
        
        #Check if they are approved
        if (
            data.CreditScore >= 640 and
            result["LTV"] <= .95 and
            DTI <= .43 and
            FEDTI <= .28
        ):
            result["DTI"] = DTI
            result["FEDTI"] = FEDTI
            result["Approved"] = "Y"
            result["FixedYears"] = fixedYears
        else:
            break
    
    result["DTI"] = result.get("DTI", DTI)
    result["FEDTI"] = result.get("FEDTI", FEDTI)
    return result        
        

def userInputToCheck(data: Data):
    #First see if they are approved
    extraInfo = checkIfApproved(data)
    if extraInfo["Approved"] == "Y":
        return {"status": "approved", "message": str(extraInfo["FixedYears"])}
    
    #At this point they are not approved
    
    #Check for their AppraisedValue bin
    binToUse = None
    if data.AppraisedValue < 320000:
        binToUse = LowAppraisedValue
    elif data.AppraisedValue >= 320000 and data.AppraisedValue < 410000:
        binToUse = MediumAppraisedValue
    else:
        binToUse = HighAppraisedValue
    
    # data = [credit_score, down_payment, house_price, cc_debt, car_debt, student_debt, fedti]
    dataForNLP = dict()
    if data.CreditScore >= 640:
        dataForNLP["credit_score"] = "good"
    else:
        dataForNLP["credit_score"] = "bad"
    
    if extraInfo["LTV"] < 0.8:
        dataForNLP["down_payment"] = "met"
    else:
        dataForNLP["down_payment"] = "below"
    
    if data.AppraisedValue < 320000:
        dataForNLP["house_price"] = "below"
    elif data.AppraisedValue >= 320000 and data.AppraisedValue < 410000:
        dataForNLP["house_price"] = "same"
    else:
        dataForNLP["house_price"] = "above"
    
    if data.CreditCardPayments < binToUse["CreditCardPayment"].median():
        dataForNLP["cc_debt"] = "below"
    else:
        dataForNLP["cc_debt"] = "higher"
    
    if data.CarPayment < binToUse["CarPayment"].median():
        dataForNLP["car_debt"] = "below"
    else:
        dataForNLP["car_debt"] = "higher"
    
    if data.StudentLoanPayments < binToUse["StudentLoanPayments"].median():
        dataForNLP["student_debt"] = "below"
    else:
        dataForNLP["student_debt"] = "higher"
    

    if extraInfo["FEDTI"] < 0.28:
        dataForNLP["fedti"] = "met"
    else:
        dataForNLP["fedti"] = "above"
    
    print(dataForNLP)
    return {"status": "denied", "message": automated_reason.process_data(dataForNLP)}
    
        
    
    
    