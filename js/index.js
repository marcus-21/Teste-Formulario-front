var email = document.getElementById('email');
var password = document.getElementById('password');

const btn = document.querySelector("#send");

btn.addEventListener("click",function(e){
    e.preventDefault();
    const email = document.querySelector("#email");
    const value =email.value;
    console.log(value);
})
const rtt = document.querySelector("#send");
rtt.addEventListener("click",function(d){
    d.preventDefault();
    const password = document.querySelector("#password");
    const value = password.value;
    console.log(value);

})

email.addEventListener('focus',()=>{
email.style.borderColor = "#000000"});
email.addEventListener('blur',()=>{
email.style.borderColor = "#ff0000"});

password.addEventListener('focus',()=>{
password.style.borderColor = "#000000"});
password.addEventListener('blur',()=>{
password.style.borderColor = "#ff0000"});