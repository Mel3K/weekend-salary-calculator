console.log('well hello there');



function submitForm(event){
    event.preventDefault();
// let newDiv = {
//     FirstName: document.getElementById('fName').value,
//    lastName: document.getElementById('lName').value,
//    employeeId: document.getElementById('eID').value,
//    title: document.getElementById('eTitle').value,
//   salary: document.getElementById('salary').value,
//     // console.log('in submitForm', FirstName, lastName, employeeId, title, salary);
// }
//let newTableEntry =  document.createElement('div');

let firstName = document.getElementById('fName').value;
let lastName = document.getElementById('lName').value;
let employeeId = document.getElementById('eID').value;
let title = document.getElementById('eTitle').value;
let salary = document.getElementById('salary').value;
console.log('in submitForm', firstName, lastName, employeeId, title, salary);



function addNewElement(){
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv')
    newDiv.textContent = "newStuffHere";
    document.querySelector('.container').appendChild(newDiv);
}
} 
// event.target.innerHTML = lastName;
// event.target.innerHTML = employeeId;
// event.target.innerHTML = title;
// event.target.innerHTML = salary;


