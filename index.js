// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function() {
    const result1 = drivers.slice(0,2);
    return result1;

}

const returnLastTwoDrivers = function() {
    const result2 = drivers.slice(2,4);
    return result2;

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let fare = 4; 
function createFareMultiplier(fare) {
    return function(){ 
        return fare*fare}

}

const variable = 2; 

function fareDoubler(variable) {
    return variable*2;
}

function fareTripler(variable) {
    return variable*3;
}

function selectDifferentDrivers(drivers, function1) {
    return function1(drivers);
}
