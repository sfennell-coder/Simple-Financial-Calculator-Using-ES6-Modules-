// U86364709

// Investment Return Module

export function calcInvestmentReturn(p,r,n,t){ // p=principal; r=rate; n=number of payments; t=time
    return (p(1+(r/100)/n)**(n*t));
}