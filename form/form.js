
const form = document.querySelector('.form-canvas');
const pattern = /^[a-z]{6,}$/;      //pattern to allow atleast 6 lowercase alphabetical characters 
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault(); //prevents the default behavior of refreshing the page
    
    //Regex 
    // console.log(form.username.value);
    // alert(pattern.test(form.username.value));

    //validation
    const username = form.username.value;

    if(usernamePattern.test(username)){
        //IF the pattern matches
        feedback.textContent = 'Username is valid!';
    }else{
        feedback.textContent = 'Invalid format';
    }
});


//livefeedback

form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        console.log('Passed');
        form.username.setAttribute('class','success');
    }else{
        console.log('Failed');
        form.username.setAttribute('class','error');
    }
})
