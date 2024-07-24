console.log('well hello there');



function handleSubmit(event){
    event.preventDefault();

// const table = document.createElement('table');
// const tblBody = document.createElement('tbody');
// for (let i=0; i<2; i++){
//     const row = document.createElement('tr');
//     for (let j=0; i< 2; i++) {
//         const cell = document.createElement('td');
//         const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
// cell.appendChild(cellText);
// row.appendChild(cell);    }
// }
// tblBody.appendChild(row);
// table.appendChild(tbl);
// table.setAttribute('border', '2');
// };


// let newDiv = {
//     FirstName: document.getElementById('fName').value,
//    lastName: document.getElementById('lName').value,
//    employeeId: document.getElementById('eID').value,
//    title: document.getElementById('eTitle').value,
//   salary: document.getElementById('salary').value,
//     // console.log('in submitForm', FirstName, lastName, employeeId, title, salary);
// }
//let newTableEntry =  document.createElement('div');

let firstName = document.querySelector('fName');
let lastName = document.querySelector('lName');
let employeeId = document.querySelector('eID');
let title = document.querySelector('eTitle');
let salary = document.querySelector('salary');
console.log('in handleSubmit', firstName.value, lastName.value, employeeId.value, title.value, salary.value);
};



// function addNewElement(){
//     const newDiv = document.createElement('div');
//     newDiv.classList.add('newDiv')
//     newDiv.textContent = "newStuffHere";
//     document.querySelector('.container').appendChild(newDiv);
// }
// } 
// event.target.innerHTML = lastName;
// event.target.innerHTML = employeeId;
// event.target.innerHTML = title;
// event.target.innerHTML = salary;


