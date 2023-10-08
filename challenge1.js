function calculateGrade() {

    // A variable that stores the user's input //
    const marks = parseFloat(prompt("Enter student marks:"));

    // An if condition that returns invalid input if marks is < 0 and > 100 //

    if (typeof marks !== 'number' || marks < 0 || marks > 100) {
        return "Invalid input. Please enter a valid number between 0 and 100.";
    }

    // We make a variable called grade that stores our grade //

    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    // if marks is in the given range, it should return students grade. //
    
    return `Student's grade is ${grade}.`;
}

const result = calculateGrade();
console.log(result);
