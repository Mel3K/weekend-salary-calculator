console.log('well hello there');
function onSubmit(event){
    event.preventDefault()
    console.log('onsubmit', event);
    }
let firstNameEntry = document.getElementById(`firstName`).value;
console.log('first name is ', firstNameEntry);
