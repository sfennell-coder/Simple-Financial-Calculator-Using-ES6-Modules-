// U86364709

// Loan payment Module

export function calcLoanPayment(p, r, n){ // p=principal; r=rate; n=number of payments
    return ((p*((r/100)*(1+(r/100))**n))/((1+(r/100))**n-1));
}