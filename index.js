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

// Problem-2 : We have to use remainder to find even or odd numbers.
function evenOdd(elements) {
    if(typeof elements != 'string'){
        return "Provide valid string"
    }
    if(elements.length % 2 == 0)
    return "even";
    else 
    return "odd";
}

// Problem-3 : We have to take if and else to determine smaller number than seven.
function isLGSeven(number){
    if(typeof number != 'number'){
        return "Provide valid number"
    }
    if (number - 7 < 7)
    return number - 7;
    else 
    return number * 2;
}

// Problem-4 : We have check every elements in a array to identify the negative numbers and send only output of total negative numbers.
function findingBadData(numbers) {
    if(typeof numbers != 'object'){
        return "Provide valid array"
    }
    let badData = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            badData++;
        }
    }
    return badData;
}

// Problem-5 : We have to multiply gems power to diamond and return it.
function gemsToDiamond(friendOne, friendTwo, friendThree){
    const gems = (21*friendOne) + (32*friendTwo) + (43*friendThree);
    if (gems > 1000)
    return (gems - 2000);
    else
    return gems;
}