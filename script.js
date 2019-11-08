$(onReady);

// Jquery start function
function onReady(){
  $('#submit-button').on('click', clickSubmit);
}

// Declaring the list
let employeeList=[];

// Gets the form info and clears the forms
function getInfo(){
  let fName = $('#first-name-input').val();
  let lName =$('#last-name-input').val();
  let idNumber = $('#id-input').val();
  let titles = $('#title-input').val();
  let salary = $('#salary-input').val();
  // $('#first-name-input').val('');
  // $('#last-name-input').val('');
  // $('#id-input').val('');
  // $('#title-input').val('');
  // $('#salary-input').val('');
  let employee = {fName, lName, idNumber, titles, salary};
  return employee;
}

// Adds salary info the list
function salaryCollector(employee){
  employeeList.push({
    idNumber: employee.idNumber,
    salary: employee.salary
  })
}

// Pushed data to table
function pushToTable(employee){
  $('#employee-table').append(`
    <tr>
      <td>${employee.fName}</td>
      <td>${employee.lName}</td>
      <td>${employee.idNumber}</td>
      <td>${employee.titles}</td>
      <td>${employee.salary}</td>
      <button class="delete-button">Delete</button>
    </tr>
  `);
}

// Updates salary
function totalSalaryCalc(){
  let totalSalary = 0
  for(let employee of employeeList){
    totalSalary += Number(employee.salary);
  }
  $('#total').text(totalSalary);
}

// Combines functionality into the submit button
function clickSubmit(){
  let newEmployee = getInfo();
  salaryCollector(newEmployee);
  pushToTable(newEmployee);
  totalSalaryCalc();
}
// A 'Submit' button should collect the form information, store the information to 
// calculate monthly costs, append information to the DOM and clear the input 
// fields. Using the stored information, calculate monthly costs and append this 
// to the to DOM. If the total monthly cost exceeds $20,000, add a red background 
// color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. For Base mode, it 
// does not need to remove that Employee's salary from the reported total.

// Add styling or extra functionality that fits with the theme of this assignment.

// Once the employee is deleted, update the total spend on salaries account for 
// this employee's removal. This will require that the logic knows which element 
// was removed. You will need to use .text() as a getter or look into jQuery's 
// .data() function. This is tricky!