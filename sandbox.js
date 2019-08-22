console.log('Entering the log file');


let firstName = 'Srivatsa';
let lastName = 'G.Haridas';
let fullName = firstName + ' ' + lastName;

/*
console.log(fullName[1],fullName.length,fullName.toUpperCase());
console.log(fullName.indexOf('G'));

//slice
let midname = fullName.indexOf('G');
console.log(fullName.slice(0,midname));

//substring
//gets the string from index to the count 
console.log(fullName.substr(11,7));

let radius = 10;
let pi = 3.14;

//math operations
//console.log(10/2);
//let result = radius % 3;
let result = pi * radius**2;

//BIDMAS
//Bracket, Indices(power), Division, Multi, Addition, Subtraction

console.log(result);

*/

/*

---------------------------------------------
String template literal
---------------------------------------------
let html = `
<h1>Main Title</h1>
<p>${fullName}</p>
`;

console.log(html);
let finalStatement = `The author is ${fullName}`;
console.log(finalStatement);

-----------------------------------------------------
 
 */

/*

---------------------------------------------
Array method and properties
---------------------------------------------


let movies = ['Shawshank','Rambo','Schindler'];
console.log(`Array length property : ${movies.length}`);
console.log(`Array join method : ${movies.join('--')}`);
console.log(`Array IndexOf method : ${movies.indexOf('Rambo')}`);
//Join arrays using concat
let concated = movies.concat(['ozarks','breaking bad']);
console.log(concated);

*/


/*

---------------------------------------------
Boolean Comparisons
---------------------------------------------

let movies = ['Shawshank','Rambo','Schindler'];
console.log(true,false,"true",'false');
console.log(fullName.includes('G')); //logs true
console.log(fullName.includes('X')); //logs false
console.log(movies.includes('Rambo')); //logs true, case sensitive comparisons

//equal and not-equal operators
let age = 25;
console.log(`The age is 25 ? ${age == 25}`);
console.log(`The age is not 30 ? ${age != 30}`);
console.log(`The age is over 30 ? ${age > 30}`);

let name = 'joe';
console.log(name == 'joe');

*/

/*
---------------------------------------------
Loose and String Comparisons
---------------------------------------------

let age = 25;
console.log(age == '25');   // loose comparison
console.log(age != '25');   // loose comparison - returns false

//Strict Compare
console.log(age === '25'); //strict comparison returns false
console.log(age !== '25'); //strict comparison returns true
*/

/*
---------------------------------------------
Type Conversion
---------------------------------------------


let numString = '100';
console.log(numString + 1); //prints 1001
let score = Number(numString);

console.log(`The type of score is ${typeof score} and the value is ${score}`);
console.log(`The type of numString is ${typeof numString} and the value is ${String(numString)}`);

*/

/*
---------------------------------------------
Control Flow - For Loops
---------------------------------------------

for(let i = 0;i < 5;i++){
    console.log(`Hello ${i}`);
}


const names = ['shaun','mario','luigi'];
for(let i = 0; i < names.length; i++){
    // console.log(`Hello ${names[i]}`);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

*/

/*
---------------------------------------------
Control Flow - While Loops
---------------------------------------------

let i = 0;
while(i < 5){
    console.log(`Hello ${i} from while`);
    i++;
}

const names = ['shaun','mario','luigi'];
let i = 0;
while(i < names.length){
    console.log(`Hello ${names[i]} from while`);
    i++;
}

*/

/*
---------------------------------------------
Control Flow - do While Loops
---------------------------------------------
to execute at least once regardless


let i = 5;

do {
    console.log(`Hello ${i} from do-while`);
    i++;
}
while(i < 5)
*/


/*
Function declaration
*/
// function greet(){
//     console.log('Hello, there');
// }


/*
Function expression
*/
// const speak = function(){
//     console.log('Inside function speak');
// };

// const greetName = function(name){
//     console.log(`Hello ${name} from function with parameters`);
// };

// greet();
// greetName('Nikky');

// ---------------------------------------------
// Function with return values
// ---------------------------------------------
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

// console.log(calcArea(5));

// // Arrow function
// const calcVolume = (radius) => {
//     return (4/3) * 3.14 * radius**3;
// };
// let radius = 5;
// console.log(`The volume of sphere of radius ${radius} is : ${calcVolume(5)}`);

// ---------------------------------------------
// Function and Callbacks
// ---------------------------------------------
//let movies = ['Accountant','Sliver','Blow'];

//---------------------------------------------------------

// movies.forEach(function(movie){
//     console.log(`Movies playing in PVR - ${movie}`);
// });

// movies.forEach((movie,index) => {
//     console.log(`Movies playing in PVR - ${movie} - ${index+1}`);
// });

//---------------------------------------------------------

//Callback Function
// const logperson = (movie,index) => {
//     console.log(`Movies playing in PVR - ${movie} - ${index+1} - logged in Callback`);
// }

// movies.forEach(logperson);

//---------------------------------------------------------
//  Callbacks in Action
//---------------------------------------------------------

const ul = document.querySelector('.movies');

let movies = ['Accountant','Sliver','Blow'];

let html = ``;

movies.forEach((movie) => {
    //create html element
    html += `<li style="color : purple">${movie}</li>`;
});

ul.innerHTML = html;

