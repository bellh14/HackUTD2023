from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import approval

import json
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (not safe for production)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)


class Data(BaseModel):
    CarPayment: int
    StudentLoanPayments: int
    CreditCardPayments: int
    CreditScore: int
    GrossMonthlyIncome: int
    AppraisedValue: int
    DownPayment: int
    
    
@app.post("/process_data/")
async def process_data(userInputdata: Data):
    print(userInputdata)
    
    return approval.userInputToCheck(userInputdata)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)