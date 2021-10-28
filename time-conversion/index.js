console.log("Time Conversion Solution");

// convert standard time to military time 
//  12 am -> 00
// 1am -12pm do nothing 
// 1pm - 11pm take hour and add 12 

function timeConversion(s){
    let amPm = s.charAt(8);
    let militaryHour = "";

    if(amPm === "A"){
        if(s.substring(0,2) === "12"){
            militaryHour = "00";
        }else{
            militaryHour = s.substring(0,2);
        }
    }else{
        if(s.substring(0,2) === "12"){
            militaryHour = s.substring(0,2);
        }else{
            militaryHour = parseInt(s.substring(0,2), 10) + 12;
        }
    }
    return militaryHour + s.substring(2,8);
}
console.log(timeConversion("07:45:30PM"));
console.log(timeConversion("03:45:30PM"));