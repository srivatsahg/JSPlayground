// -----------------------------
// Primitive types
// -----------------------------

let scoreOne = 10;
let scoreTwo = scoreOne;
console.log(`Before change scoreOne : ${scoreOne}, scoreTwo ${scoreTwo}`);
scoreOne = 100;
console.log(`After change scoreOne : ${scoreOne}, scoreTwo ${scoreTwo}`);

// -----------------------------
// Reference types 
// -----------------------------

let userOne = {name:'vat',age:30};
let userTwo = userOne;
console.log(userOne, userTwo);

userOne.age = 40;

console.log(userOne, userTwo);