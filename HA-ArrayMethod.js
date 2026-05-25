//  Use push() to add elements into an array
// 2 Use pop() to remove the last element
// 3 Use shift() to remove the first element
// 4 Use unshift() to add an element at the beginning
// 5 Use includes() to check whether an element exists
// 6 Use indexOf() to find the position of an element
// 7 Use join() to convert array into string
// 8 Use reverse() to reverse the array
// 9 Use sort() to sort the array

let value = ["sachin", "ketthari", "murugan", 34, "inte", "allgood"];
value.push("ayyappa","velan");
console.log(value);

value.pop();
console.log(value)

let shiftsval = ["murugavel","sachin", "ketthari", "murugan", 34, "inte", "allgood"];
shiftsval.shift();
console.log(shiftsval);

shiftsval.unshift('dhoni10');
console.log(shiftsval);

console.log(shiftsval.includes("sachin")); 
console.log(shiftsval.includes("sachin10"));


console.log(shiftsval.indexOf(34)); 

console.log(shiftsval.join(' '));
console.log(shiftsval.join('vel'));

let rev = 'ketthari';
let reverse = ["murugavel","sachin", "ketthari", "murugan", 34, "inte", "allgood"];

// Reverse string
let revString = rev.split("").reverse().join("");
reverse.reverse();
console.log(revString);
console.log(reverse);

let sorting = reverse.sort();
console.log(sorting);






























