$(onReady);

// Jquery start function
function onReady(){
  $('#submit-button').on('click', clickSubmit);
  $('#employee-table').on('click','.delete-button', deleteButton);
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
      <td>$${employee.salary}</td>
      <td><button class="delete-button">Delete</button></td>
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
  budgetChecker(totalSalary);
}

// Checks to make sure sum is below $20k and highlights total if above $20k
function budgetChecker(totals){
  if(totals > 20000){
    $('#monthly-total').addClass('red');
  } else {
    $('#monthly-total').removeClass('red');
  }
}
// Combines functionality into the submit button
function clickSubmit(event){
  event.preventDefault();
  let newEmployee = getInfo();
  salaryCollector(newEmployee);
  pushToTable(newEmployee);
  totalSalaryCalc();
}

// Deletes row that data belongs to
function deleteButton(){
  //  removeFromArray(this);
  $(this).parent().parent().remove();
}



// Add styling or extra functionality that fits with the theme of this assignment.

// Once the employee is deleted, update the total spend on salaries account for 
// this employee's removal. This will require that the logic knows which element 
// was removed. You will need to use .text() as a getter or look into jQuery's 
// .data() function. This is tricky!