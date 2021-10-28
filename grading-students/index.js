console.log("Grading Students");

// every student recieves a grade in the inclusive range of 0 to 100
// any grade less than 40 is a failing grade 
// if the difference between the grade and the next multiple of 5 is less than 3 round grade up to the next multiple of 5
// if the value of the grade is less than 38 no rounding is occurs and the result will be a failing grade.

function gradingStudents(grades){
    return grades.map((grade) => {
        return (grade >= 38 && grade % 5 >=3) ? grade + 5 - (grade % 5) : grade;
    })
}

console.log(gradingStudents([53,73,67,38,33]));

//  53 -> 53 + (5 - (53 % 5))