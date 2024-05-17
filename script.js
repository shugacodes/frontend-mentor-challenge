
let emailInput = document.getElementById("email");
let button = document.getElementById("cta-button")
let ctaForm = document.getElementById("cta-form")
let emailAlert = document.getElementById("enter-email-address")

let form = document.getElementById("form")
let emailNewsletter = document.getElementById("email-newsletter2")
let button2 = document.getElementById("newsletter-button")
let emailAlert2 = document.getElementById("enter-email-address2")

function validateEmail(){
    let emailAddress = emailInput.value;
    if (emailAddress.length === 0){
        emailAlert.innerText = `Enter Email Please`
        emailInput.style.border = "none"
        emailInput.style.outline = "1px solid red"
    }else if(!emailAddress.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailAlert.innerText = "Please enter a valid email "
        emailInput.style.outline = "1px solid red"
    }else{
        emailAlert.innerText = " ";
        emailInput.style.outline = "1px solid green"
    }
}

emailInput.addEventListener("keyup", function(){
    validateEmail()
})


function validateEmail2(){
    let emailAddress2 = emailNewsletter.value;
    if (emailAddress2.length === 0){
        emailAlert2.innerText = `Enter Email Please`
        emailNewsletter.style.border = "none"
        emailNewsletter.style.outline = "1px solid red"
    }else if(!emailAddress2.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailAlert2.innerText = "Please enter a valid email "
        emailNewsletter.style.outline = "1px solid red"
    }else{
        emailAlert2.innerText = " ";
        emailNewsletter.style.outline = "1px solid green"
    }
}

emailNewsletter.addEventListener("keyup", function(){
    validateEmail2()
})













