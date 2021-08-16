var email =document.getElementById('email');

email.addEventListener('focus',()=>{
    email.style.borderColor = "black";
});
email.addEventListener('blur',()=>{
    email.style.borderColor = "green";
});