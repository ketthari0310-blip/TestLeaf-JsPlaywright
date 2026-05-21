//Assignment Requirements:
// 1. Create a function that takes a student's score as a parameter.
// 2. Declare and initialize the variable.
// 3. Use `switch` statement inside the function.
// 4. Return the corresponding grade.
// 5. Call the function and print the result.


function getGrade(score){
    let grade;
    switch(true){
         case (score >= 90):
            grade = "A";
            console.log(" The student Grade is: " + grade);
            break;
         case (score >= 80):
            grade = "B";
            console.log(" The student Grade is: " + grade);
            break;
         case (score >= 70):
            grade = "c";
            console.log(" The student Grade is: " + grade);
            break;
         case (score >= 60):
            grade = "D";
            console.log(" The student Grade is: " + grade);
            break;
         case (score >= 50):
            grade = "E";
            console.log(" The student Grade is: " + grade);
            break;
            default:
            grade = "F"
            console.log(" The student Grade is: " + grade)
    }
}
getGrade(70);
getGrade(40);
getGrade(96);
