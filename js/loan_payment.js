// U86364709

// Loan payment Module

export function calcLoanPayment(p, r, n){ // p=principal; r=rate; n=number of payments
    return (p*(r*(1+r)**n)/((1+r)**n-1));
}