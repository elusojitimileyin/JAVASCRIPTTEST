let {testScoresArray, upGradeScore,squareNumber} = require("./ReadMe.js")

test("filter to check testscores  ", () =>{
    let score = [85, 92, 78, 88, 95, 50, 20, 40, 34, 70];
    let answer = testScoresArray(score);
    expect(answer).toEqual([85, 92, 78, 88, 95, 70 ]) 
})

test("map to upgrade score  ", () =>{
    let score = [85, 92, 78, 88, 95];
    let answer = upGradeScore(score);
    expect(answer).toEqual([ 90, 97, 83, 93,100 ]) 
})

test("map to square numbers  ", () =>{
    let input = [2,4,6,8,10];
    let answer = squareNumber(input);
    expect(answer).toEqual([ 4, 16, 36, 64, 100 ]) 
})