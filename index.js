// given a payrate calculate a workday (8hrs)
function dayRate(rate) {
    return rate *8
}
console.log(dayRate(100));

// calculate number of workdays given a budget

function daysInBudget(budget, rate){
    return budget/ dayRate(rate);
}

console.log(daysInBudget(1600,100));

//calculate the discount rate for large projects
// the freelancer offers a discount for every full month. The rest are billed at a dayrate

function priceWithMonthlyDiscount(rate, numDays, discount){
    // discount is 42%(0.42)
    return 
}
console.log(dayRate(89))