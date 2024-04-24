let {testScoresArray, upGradeScore,squareNumber,shareBooks,davidMonthlyExpenses,scheduleAfternoonClasses} = require("./ReadMe.js")

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

test("list of books ", () =>{

    const member1= {
        name: "Emily",
        book : ""
    }
    
    const member2 = {
        name: "Jack",
        book : ""
        
    }
    const member3 = {
        name: "Sophia",
        book: ""
    };
    
    const member4= {
        name: "Daniel",
        book : ""
    };

    const readers  = [member1, member2, member3, member4]; 
    shareBooks(readers);
    expect(readers[1].book).toBe("Jack's book") 
})



test("calculate the total amount of groceries spent ", () =>{

    let expenses ={ "groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80 }
    let result = 380
    let answer = davidMonthlyExpenses(expenses)
    expect(answer).toEqual(result) 
})


test(" test for classes offered in the afternoon ", () =>{
    let classTime = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    let result = ["1:00 PM", "3:00 PM", "5:00 PM"]
    let answer = scheduleAfternoonClasses(classTime);
    expect(answer).toEqual(result) 
})