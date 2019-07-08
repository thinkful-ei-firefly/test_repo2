function jediName(firstName, lastName){
    return lastName.slice(0,3) + firstName.slice(0,2);
}
console.log(jediName('Keith', 'Ben'));

function beyond(num){
    if (num === Infinity)
        return "And Beyond";
    if (num === 0)
        return "Staying home";
    if (num < 0)
        return "To Negative Infinity";
    if (num > 0)
        return "To Infinity";
}
console.log(beyond(Infinity));

function decode(code){
    switch (code.charAt(0)){
        case 'a':
            return code.charAt(1);
            break;
        case 'b':
            return code.charAt(2);
            break;
        case 'c':
            return code.charAt(3);
            break;
        case 'd':
            return code.charAt(4);
            break;
        default:
            return ' ';
    }
}
function breakCode(code){
    let splitCode = code.split(" ");
    let brokenCode = '';
    for (let i = 0; i < splitCode.length; i++){
        brokenCode += decode(splitCode[i]);
    }
    return brokenCode;
}
console.log(breakCode('craft block argon meter bells brown croon droop'));

function daysInMonth(month, leapYear){

    switch (month){
        case 'February':
            if (leapYear)
                return 29;
            return 28;
            break;
        case 'September':
        case 'April':
        case 'June':
        case 'November':
            return 30;
            break;
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return 31;
            break;
        default:
            throw new Error("Must provide a Valid Month.");
    }
}
try{
    console.log(daysInMonth('June', false));
}
catch (e){
    console.log(e.message);
}
