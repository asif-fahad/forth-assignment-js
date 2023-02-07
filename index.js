// Problem-1 : We have to make brackets to multiply and to do addition. then division and lastly subtraction
function mindGame (positiveNumber) {
    if(typeof positiveNumber != 'number'){
        return "Provide valid number"
    }
    if(positiveNumber > 0){
        let positiveNumbers = ((positiveNumber*3)+10)/2-5
    return positiveNumbers;
    }
}

// Problem-2 : We have take remainder to find even or odd numbers.
function evenOdd(elements) {
    if(typeof elements != 'string'){
        return "Provide valid string"
    }
    if(elements.length % 2 == 0)
    return "even";
    else 
    return "odd";
}