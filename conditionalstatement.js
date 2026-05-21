// IF conditional Statment
// a) launchbrowser need to take input as browserName (string) and do not return any
//  - use if-else (chrome or otherwise)
//  - Print the value

function launchbrowser(browsername){
    if(browsername === "chrome"){
        console.log("Launching Chrome browser...")
    }
    else{
         console.log("The entered browsername is not Google chrome:"  + browsername)
    }
}

launchbrowser("chrome")
launchbrowser("Test")

// Switch case conditional statement
// b) runTests need to take input as testType (string) and do not return any
//  - use switch case (smoke, sanity, regression, default (smoke))
//  - Print the values
// Call that function from the javascript

function runTests(Testname)
{
    switch(Testname){
        case "Smoke":
            console.log("Run the Smoke Testing");
            break;
         case "Sanity":
            console.log("Run the Sanity Testing");
            break;
       case "Smoke":
            console.log("Run the Regression Testing");
            break; 
       default:
            console.log("Run the Smoke Testing");
            break;
        
    }
}

runTests("Smoke");
runTests("Sanity");
runTests();