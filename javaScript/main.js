var registerForm=document.querySelector('.registerForm')

var exchange=document.querySelector('[name="exchange"]')

var result=document.querySelector('.result')

var amount=document.querySelector('[name="amount"]')

registerForm.onsubmit=sub

function sub(e){
    e.preventDefault()
    result.textContent=amount.value*exchange.value


    /*OR
    if( exchange.value==3.66){
        result.textContent=amount.value*3.66
    }
    else if(exchange.value==5.17 ){
        result.textContent=amount.value*5.17
    }
    else{
        result.textContent=amount.value
    }
    */
}
