// leitura e captação dos formulários no console
var email = document.getElementById('email');
var password = document.getElementById('password');
var nome = document.getElementById('nome');
var sobrenome = document.getElementById('sobrenome');
var fone = document.getElementById('fone');

const sss = document.querySelector("#send");
sss.addEventListener("click",function(f){
    f.preventDefault();
    const nome = document.querySelector("#nome");
    const value = nome.value;
    console.log(value);
})
const aaa = document.querySelector("#send");
aaa.addEventListener("click",function(g){
    g.preventDefault();
    const sobrenome = document.querySelector("#sobrenome");
    const value = sobrenome.value;
    console.log(value);
})
const btn = document.querySelector("#send");
btn.addEventListener("click",function(e){
    e.preventDefault();
    const email = document.querySelector("#email");
    const value = email.value;
    console.log(value);
})

const nnn = document.querySelector("#send");
nnn.addEventListener("click",function(l){
    l.preventDefault();
    const fone = document.querySelector("#fone");
    const value =fone.value;
    console.log(value);
})
const rtt = document.querySelector("#send");
rtt.addEventListener("click",function(d){
    d.preventDefault();
    const password = document.querySelector("#password");
    const value = password.value;
    console.log(value);
})

// destacar os caixas do formulário
nome.addEventListener('focus',()=>{
nome.style.borderColor = "#000000"});
nome.addEventListener('blur',()=>{
nome.style.borderColor = "#ff0000"});

sobrenome.addEventListener('focus',()=>{
sobrenome.style.borderColor = "#000000"});
sobrenome.addEventListener('blur',()=>{
sobrenome.style.borderColor = "#ff0000"});

fone.addEventListener('focus',()=>{
fone.style.borderColor = "#000000"});
fone.addEventListener('blur',()=>{
fone.style.borderColor = "#ff0000"});

email.addEventListener('focus',()=>{
email.style.borderColor = "#000000"});
email.addEventListener('blur',()=>{
email.style.borderColor = "#ff0000"});

password.addEventListener('focus',()=>{
password.style.borderColor = "#000000"});
password.addEventListener('blur',()=>{
password.style.borderColor = "#ff0000"});