export type AnalyzedHomeBuyerInfoType = {
    ID: number;
    GrossMonthlyIncome: number;
    CreditCardPayment: number;
    CarPayment: number;
    StudentLoanPayments: number;
    AppraisedValue: number;
    DownPayment: number;
    LoanAmount: number;
    MonthlyMortgagePayment: number;
    CreditScore: number;
    LTV: number;
    MonthlyDebt: number;
    DTI: number;
    FEDTI: number;
    Approved: string;
};

export type PostFormData = {
    CarPayment: number;
    StudentLoanPayments: number;
    CreditCardPayments: number;
    CreditScore: number;
    GrossMonthlyIncome: number;
    AppraisedValue: number;
    DownPayment: number;
};
