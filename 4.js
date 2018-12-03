
function leapyear (year) {
    if (year % 4 == 0 && year % 100 !== 0 && year % 400 !== 0){
        console.log("Tahun " + year + " benar ini tahun kabisat!"); 
    } else {
        console.log("Tahun " + year + " Oupss bukan kabisat hehehe!");
    }
}

leapyear(2018);