// U86364709

// MAIN js Module
 
import { calcInterestRate } from "./interest_rate.js";
import { calcLoanPayment } from "./loan_payment.js";
import { calcInvestmentReturn } from "./investment_return.js";

document.getElementById("calcInterest").addEventListener('click', function(){
    const principal = parseFloat(document.getElementById("pIR1").value)
    const rate = parseFloat(document.getElementById("rIR1").value)
    const time = parseFloat(document.getElementById("tIR1").value)
    const interestRate = calcInterestRate(principal, rate, time);
    document.getElementById('interestRate_result').innerText=`${interestRate.toFixed(2)}%`;
});

document.getElementById("calcLoan").addEventListener('click', function(){
    const p = parseFloat(document.getElementById("pLP2").value)
    const r = parseFloat(document.getElementById("rLP2").value)
    const n = parseFloat(document.getElementById("nLP2").value)
    const loanPayment = calcLoanPayment(p,r,n);
    document.getElementById('loanPayment_result').innerText=`$${loanPayment.toFixed(2)}`;
});

document.getElementById("calcInvestment").addEventListener('click', function(){
    const p = parseFloat(document.getElementById("pIR3").value)
    const r = parseFloat(document.getElementById("rIR3").value)
    const n = parseFloat(document.getElementById("nIR3").value)
    const t = parseFloat(document.getElementById("tIR3").value)
    const investmentReturn = calcInvestmentReturn(p,r,n,t);
    document.getElementById('investmentReturn_result').innerText=`$${investmentReturn.toFixed(2)}`;
});