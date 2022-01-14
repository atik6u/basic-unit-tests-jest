function computeAge(birthday, currentDate){
    var year =  currentDate.getFullYear()- birthday.getFullYear();

    if (birthday.getMonth() > currentDate.getMonth()) {
        year -= 1;
    }
    else if (birthday.getMonth() == currentDate.getMonth()) {
        if (birthday.getDate() > currentDate.getDate()) {
            year -= 1;
        }
    }
    return year;
}

module.exports = computeAge
