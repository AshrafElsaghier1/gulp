let form=document.getElementById("form"),userNameInput=document.getElementById("name"),emailInput=document.getElementById("email"),phoneInput=document.getElementById("phone"),message=document.getElementById("message"),btnSubmit=document.getElementById("submit-btn"),allInputs=document.querySelectorAll(".form-group .input");function validationForm(){var e,t;allInputs.forEach((e=>{let t=e.value.trim();return 0==t.length||""==t?(e.classList.add("error"),!1):(e.classList.remove("error"),!0)})),(e=message).value.trim().length>=20?e.classList.remove("error"):e.classList.add("error"),(t=userNameInput).value.match(/^[a-zA-Z\s]*$/g)?t.classList.remove("error"):t.classList.add("error"),function(e){e.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?e.classList.remove("error"):e.classList.add("error")}(emailInput),function(e){e.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/im)?e.classList.remove("error"):e.classList.add("error")}(phoneInput)}form.addEventListener("submit",(function(e){e.preventDefault(),validationForm()}));