// given a payrate calculate a workday (8hrs)
 function dayRate(rate) {
    return rate *8
}

// calculate number of workdays given a budget

 function daysInBudget(budget, rate){
    return budget/ dayRate(rate);
}


//calculate the discount rate for large projects
// the freelancer offers a discount for every full month. The rest are billed at a dayrate

 function priceWithMonthlyDiscount(rate, numDays, discount){
    // discount is 42%(0.42)
    //step 1 divide total days by 22
    // step 2 multiply the regular dayRate by 22 to calculate how much that month is going to cost 
    // step 3  Multiply .42 * monthlyRate 
    // step 4 subtract the monthlyRate - the number from step 3
    // step 5 multiply the discounted monthly rate by the number of months that are going to be worked 
    // step 6 multiply the remaining days at the regular dayRate and add it to step 5
    const totalMonths = Math.floor(numDays / 22);
    const monthlyRate = dayRate(rate) * 22; 
    const remainingDays = numDays % 22 //% symbol returns the remainder which in this case is 10
    const discount1 = monthlyRate * discount;
    

    return Math.ceil(totalMonths * (monthlyRate - discount1) + remainingDays * dayRate(rate));


}
console.log(priceWithMonthlyDiscount(89,230, 0.42));
//(dayRate(89,230,0.42));
// returns 712 when the answer should be 97972