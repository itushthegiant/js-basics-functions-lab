// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    const hqStreet = 42;
    if (location > hqStreet) {
        return location - hqStreet
    } else {
        return hqStreet - location
    }
}


function distanceFromHqInFeet(location) {
    const hqStreet = 42;
    if (location > hqStreet) {
        return (location - hqStreet) * 264
    } else {
        return (hqStreet - location) * 264
    }
}

function distanceTravelledInFeet(start, end) {
    let difference = end - start;
    if (difference < 0) {
        difference *= -1;
    } 
    return difference * 264
}

function calculatesFarePrice(start, destination) {
    let difference = (destination - start) * 264;
    if (difference < 0) {
        difference *= -1;
    } 
    if (difference <= 400) {
        return 0 
    } else if (difference > 400 && difference <= 2000) {
        return (difference - 400) * 0.02
    } else if (difference > 2000 && difference <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}