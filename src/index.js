const form = document.querySelector('form');


form.addEventListener('submit', function(e){
    formValidation()
    
    if(formValidation()){
        //form.submit()
        e.preventDefault();
        submitForm()
    }else{
        e.preventDefault();
    } 
})

//Form validation//
let formValidation = () =>{
    let result = false;
    let inputs = document.querySelectorAll('input');
    let notRequired = document.querySelector('input[name="second-address"]');

    //Check every input and warn the user if it's empty
    inputs.forEach(input=>{
        if(input.value.trim() == "" && input !== notRequired){
            input.style.borderBottom = '1.7px solid red'
        }else if(input.value.trim() !== "" ){
            input.style.border = 'none'
        }
    })
    
    //Return valid inputs
    const validInputs = Array.from(inputs).filter( input => input.value.trim() !== "" && input !== notRequired);
    if(validInputs.length == inputs.length-1){
      result = true
    }
     
    return result         
}

//Captcha response//
function captchaCallback () {
    let submitBtn = document.querySelector('.submit-btn');

    submitBtn.classList.remove('disabled')
    submitBtn.removeAttribute('disabled')
} 

//Submit form with AJAX
let submitForm = () => {
    const request = new XMLHttpRequest();

    //This is an random API just for functionality purpose
    request.open("POST", "https://jsonplaceholder.typicode.com/posts" )
    
    request.send(new FormData(form))
    
    displayMessage()
}

//Display success message
let displayMessage = () =>{
    let title = document.querySelector('h2')

    form.remove()
    title.innerHTML = "Excellent!<br/> See you in February 2022";
    title.style.fontSize = '4rem'
}