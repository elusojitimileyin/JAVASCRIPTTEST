// // Assessment 1

const { forOfStatement } = require("@babel/types");

function testScoresArray(numbers){

    return numbers.filter(num=>num >= 70);
}


// Assessment 2
function upGradeScore(array) {
    return array.map(num => num + 5);
}

module.exports = {testScoresArray, upGradeScore}

// Assessment 3
function squareNumber(numbers) {
    return numbers.map(num => num * num);
}



// Assessment 4



function shareBooks(listOfMembers){
 
    for (const key of listOfMembers) {
        key.book += key.name + "'s book"
                }
        }

//  Assessment 5


function davidMonthlyExpenses(expenses){
let result = 0;

    for (const category in expenses){
    result += expenses[category]
    }
    return result;
}

function filterAfternoonTime(time) {
    if (time === "12:00 PM" || time === "1:00 PM" || time === "2:00 PM" || time === "3:00 PM" || time === "4:00 PM" || time === "5:00 PM"){
        return time

    }}
    function scheduleAfternoonClasses(classTimings) {
        return classTimings.filter(time => filterAfternoonTime(time))
    }


    function mapHealthyAndUnHealthy(array) {
        let heathlyFood = array.filter(food=> food.isHealthy === true)
        for (const name of heathlyFood){
            console.log(heathlyFood.name)
            
        }
        return heathlyFood

    }

module.exports = {testScoresArray, upGradeScore, squareNumber,shareBooks,davidMonthlyExpenses,scheduleAfternoonClasses,mapHealthyAndUnHealthy} 

