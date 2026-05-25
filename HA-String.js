
//Example 1
let stringname = "Testleaf is giving the training for Playwright course" ;
let str1 = stringname.split(" "); 
console.log("The Splitted String is:", str1);

let lastword = str1[str1.length-1];
console.log("The last word is :", lastword);
console.log("The length of last word is:", lastword.length);

//Example 2
let str2 = "   ketthari murugan   ";

// Step 1: Trim string
let trimmed = str2.trim();

// Step 2: Split into words
let words2 = trimmed.split(" ");
console.log("The splitted Value is:", words2)
// Step 3: Identify last word
let lastWord2 = words2[words2.length - 1];

// Step 4 & 5: Length of last word
console.log("Last word:", lastWord2);
console.log("Length:", lastWord2.length);

//Example 3

let str3 = "lisTen earth"
let str4= "silent Heart"
// Step 1: Remove spaces & convert to lowercase
let cleanup1 = str3.replace("/[a-z]/g","").toLowerCase();
let cleanup2 = str4.replace("/[a-z]/g","").toLowerCase();

// Step 2: Sort characters
let sortedA = cleanup1.split("").sort().join("");
let sortedB = cleanup2.split("").sort().join("");

// Step 3: Compare sorted strings
let isAnagram = (sortedA === sortedB);

// Step 4: Return result
console.log("Are they anagrams?", isAnagram);
