//----------------------------------
// 1. Simple event listener sample
//----------------------------------
// const button = document.querySelector('button');
// button.addEventListener('click',() => {
//     alert('Button clicked via callback');
// });

//----------------------------------
// 2. Simple click eventhandler, Crossing off ToDo elements
//----------------------------------
// const items = document.querySelectorAll('li');
// items.forEach((item) => {
//     item.addEventListener('click',(e) => {
//         // console.log(e.target);
//         e.target.style.textDecoration = 'line-through';
//     });
// });


//----------------------------------
// 3. Add or remove elements
//----------------------------------

// const ul = document.querySelector('ul');


// items.forEach((item) => {
//     item.addEventListener('click',(e) => {
//         // console.log(e.target);
//         e.target.style.textDecoration = 'line-through';
//     });
// });

// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// button.addEventListener('click',() => {

// });


const box = document.querySelector('.box');
box.addEventListener('mousemove',e => {
    // console.log(e.offsetX);
    box.textContent = `X pos: ${e.offsetX}  Y Pos: ${e.offsetY}`; //logs the mouse position in the box
});