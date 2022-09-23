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