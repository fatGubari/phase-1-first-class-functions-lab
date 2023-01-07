// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers) {
    const newArray = [drivers[0], drivers[1]]
    return newArray
}

const returnLastTwoDrivers = function(drivers){
    const newArray2= [drivers[2], drivers[3]]
    return newArray2
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
selectingDrivers[0]
selectingDrivers[1]


const fareMultiplier = createFareMultiplier(2)
function createFareMultiplier(value){
    return function multiplier(value){
        return value* value
    }
}

fareDoubler(fareMultiplier)
 function fareDoubler (createFareMultiplier) {
    return createFareMultiplier + createFareMultiplier
}

fareTripler(fareMultiplier)
function fareTripler(fareMultiplier){
    return fareMultiplier + fareMultiplier + fareMultiplier
}

function selectDifferentDrivers(arrayOfDrivers,passedFunction){
    return passedFunction(arrayOfDrivers)
}
