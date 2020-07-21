const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const middleName = document.getElementById('middleName')
const lastName = document.getElementById('lastName')
const nationality = document.getElementById('nationality')
const gender = document.getElementById('gender')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const adress = document.getElementById('adress')
const kind = document.getElementById('category')


// show error
function showError(input, message){
    const formControl= input.parentElement
    formControl.className= 'form-control error'
    const small= formControl.querySelector('small')
    small.innerText= message
}

// show success

function showSuccess(input){
    const formControl= input.parentElement
    formControl.className= 'form-control success'
}

// required inputs

function requiredInputs(inputArr){
inputArr.forEach((input)=>{
   if(input.value.trim()===""){
       showError(input, `${getName(input)} is required`)
   } else{
     showSuccess(input)
   }
})
}

function getName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}




function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }

function checkPhone(input) {
    const re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Phone number is not valid');
    }
  }


form.addEventListener('submit', (e)=>{
    console.log(phone.value)
    e.preventDefault()
    requiredInputs([firstName,lastName,nationality,phone,email,adress, gender, kind ])
    checkEmail(email)
    checkPhone(phone)
})
