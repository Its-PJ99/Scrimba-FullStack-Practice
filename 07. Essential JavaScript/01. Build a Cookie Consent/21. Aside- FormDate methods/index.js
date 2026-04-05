const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function(e){
    e.preventDefault()
    const loginFormData = new FormData(loginForm)
    
    const name = loginFormData.get('astronautName')
    console.log(name) 
    
/* 
Challenge: 
1. Log out the email and password from loginFormData.
*/


})
