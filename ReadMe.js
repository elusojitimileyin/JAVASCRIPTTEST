// // Assessment 1

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

module.exports = {testScoresArray, upGradeScore, squareNumber}

// Assessment 4

