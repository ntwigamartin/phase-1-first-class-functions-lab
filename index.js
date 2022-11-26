// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
    let newArray = driversArray.slice(0,2)
    return newArray
}
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const returnLastTwoDrivers = function(driversArray) {
    let Array2 = driversArray.slice(2)
    return Array2
}
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function newFunc(fare) {
        return fare * num
    }
}

const fareDoubler = function (fare) {
    return fare * 2
}

const fareTripler = function (fare) {
    return fare * 3
}

function selectDifferentDrivers(driversArray, func) {
    if(func === returnFirstTwoDrivers) {
        return driversArray.slice(0,2)
    }
    else if(func === returnLastTwoDrivers){
        return driversArray.slice(2)
    }
}