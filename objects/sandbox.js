
//object literals
const blogs = [
    {title: 'Kafka',likes:30,author:'murakami'},
    {title: 'CLR via C#',likes:100,author:'Richter'}
];

// console.log(blogs);

let user = {
    name: 'Srivatsa',
    age: 30,
    email: 'vatsag@co.uk',
    location: 'edinburgh',
    blogs: [ 
        {title: 'Kafka',likes:30,author:'murakami'},
        {title: 'CLR via C#',likes:100,author:'Richter'}
    ],
    login: function(){
        console.log('User logged in ');
    },
    print: function(){
        this.blogs.forEach((blog) => {console.log('Blog: ' + blog.title + 'Author: ' + blog.author)});
    },
    logout: function(){
        console.log('User logged out');
    }
};


const ul = document.querySelector('.person');
let html = ``;
html += `<li>username : ${user.name}</li>`;
html += `<li>location : ${user.location}</li>`;
html += `<li>blogs : ${user.blogs}</li>`;
ul.innerHTML = html;

// console.log(user);
// console.log(user.name);
// console.log(user['location']);
// console.log(typeof(user));

user.login();
user.print();
user.logout();