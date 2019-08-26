console.log('DOM sample');
//1.    document.querySelector
//----------------------------------------
// const para = document.querySelector('p'); //returns the ref of the first p tag

// console.log(para);
// console.log(paraClass);

//----------------------------------------
//2.    document.querySelectorAll
//----------------------------------------
// const paras = document.querySelectorAll('p');
// console.log(paras);
// paras.forEach(para => {
//     console.log(para.innerText);
// });


//----------------------------------------
//3.    document.getElementsByClassName
//      returns HTMLCollection, we cannot use forEach with HtmlCollection
//----------------------------------------
// const elements = document.getElementsByClassName('error'); 
// console.log(elements);
// console.log(elements[0].innerHTML);

//----------------------------------------
//4.    document.getElementById
//      Gets the reference of the single element
//----------------------------------------
// const element = document.getElementById('page-title-text'); //returns HTMLCollection, we cannot use forEach with HtmlCollection
// console.log(element.innerHTML);

//----------------------------------------
//4.    document.getElementsByTagName
//      Gets the elements by tag name, HtmlCollection
//----------------------------------------
// const tags = document.getElementsByTagName('p');
// console.log(tags);

//----------------------------------------
//5.    changing innerText
//      
//----------------------------------------

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' JS';
// });

//----------------------------------------
// 6.   Changing innerHTML
//----------------------------------------
// const content = document.querySelector('.content');
// // content.innerHTML = `<H2> HELLO UPDATED </H2>`;
// const people = ['mario','luigi','ivy'];
// content.innerHTML += '<ol>'
// people.forEach(person => {
//     content.innerHTML += `<li> ${person} </li>`;
// });
// content.innerHTML += '</ol>'


//----------------------------------------
// 6.   updating attributes
//----------------------------------------
// const link = document.querySelector('a');

// //get attr
// console.log(link.getAttribute('href'));
// //set attribute
// link.setAttribute('href','https://www.linkedin.com/in/srivatsahg');
// link.innerText = "My Professional Profile";

//----------------------------------------
// 7.   updating attributes and changing the styles runtime
//----------------------------------------

// const message = document.querySelector('p');

function onClick(){
    const message = document.querySelector('p');
    message.setAttribute('class','success');
    message.innerText = 'Success !';
    message.style.fontSize = '60px';
    message.style.fontFamily = 'Consolas';
    console.log(message.style);
}

function onStyleClick(){
    const paras = document.querySelectorAll('p');
    paras.forEach(para => {

        // if(para.innerText.includes('Error')){
        //     para.classList.add('error');
        // }
        if(para.textContent.toLowerCase().includes('error')){     //use textContent - displays inner text content regardless of the hidden styles
            para.classList.add('error');
        }
        else if(para.innerText.includes('Success')){
            para.classList.add('success');
        }
        else{
            para.classList.remove('error');
            para.classList.remove('success');
        }
    });


    //message.setAttribute('class','success');

    message.innerText = 'Success !';
    message.style.fontSize = '60px';
    message.style.fontFamily = 'Consolas';
    console.log(message.style);
}
//----------------------------------------
// 8.   Add remove classes
//----------------------------------------
//  const content = document.querySelector('p');
//  console.log(content.classList); //returns all the classes for that element i.e. in this case returns 'error'
//  content.classList.add('error');
//  content.classList.remove('error');
//  content.classList.add('success');

//----------------------------------------
// 8.   toggle classes
//----------------------------------------
function onToggle(){
    const title = document.querySelector('.title');
    title.classList.toggle('test');
}

//----------------------------------------
// 9.   Node children, parent, siblings sample
//----------------------------------------
// const article = document.querySelector('article');
// console.log(article.children); //prints children elements of the article element
// Array.from(article.children).forEach(child => {
//     console.log(`Child element : ` + child.innerText);
//     console.log(`Previous sibling for ${child} elements are : ${child.previousElementSibling}`);
//     console.log(`Next sibling for ${child} elements is : ${child.nextElementSibling}`);
// });


//----------------------------------------
// 10.   Event Basics
//----------------------------------------


