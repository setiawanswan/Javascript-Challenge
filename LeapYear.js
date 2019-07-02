function leapyear (year) {
    if (year % 4 == 0 && year % 10 !== 0 && year % 400 !== 0){
        console.log( year + " is ... " + "Right this is leap year")
    }
    else{
        (console.log(year + " is ... " + " Oupss not leap year "))
    }
}

leapyear(2016);