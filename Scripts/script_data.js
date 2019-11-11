$(onReady);

// Jquery start function
function onReady(){
  $('#submit-button').on('click', clickSubmit);
  $('#employee-table').on('click','.delete-button', deleteButton);
}

// Gets the form info and clears the forms
function getInfo(){
  let fName = $('#first-name-input').val();
  let lName =$('#last-name-input').val();
  let idNumber = $('#id-input').val();
  let titles = $('#title-input').val();
  let salary = $('#salary-input').val();
  $('.employee-input').val('');
  let employee = {fName, lName, idNumber, titles, salary};
  return employee;
}

// Adds salary info the list
function salaryCollector(employee){
  $('#employee-table').data(
    employee.idNumber,
    employee.salary
  )
}

// Pushed data to table
function pushToTable(employee){
  $('#employee-table').append(`
    <tr>
      <td>${employee.fName}</td>
      <td>${employee.lName}</td>
      <td class="id-number">${employee.idNumber}</td>
      <td>${employee.titles}</td>
      <td>$${employee.salary}</td>
      <td><button class="delete-button btn btn-light">Delete</button></td>
    </tr>
  `);
}

// Updates salary
function totalSalaryCalc(){
  let totalSalary = 0
  for(let employee in $('#employee-table').data()){
    totalSalary += Number($('#employee-table').data(employee));
  }
  monthlySalary = (totalSalary/12).toFixed(2);
  $('#total').text(monthlySalary);
  budgetChecker(monthlySalary);
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
  if(
    $('#first-name-input').val() === '' ||
    $('#last-name-input').val() === '' ||
    $('#id-input').val() === '' ||
    $('#title-input').val() === '' ||
    $('#salary-input').val() === ''
  ){
    $('#error-message').text('Please fill out all forms.');
  } else if ($('#employee-table').data().hasOwnProperty($('#id-input').val())){
    $('#error-message').text('Please use a unique ID number.');
  } else {
    let newEmployee = getInfo();
    salaryCollector(newEmployee);
    pushToTable(newEmployee);
    totalSalaryCalc();
    $('#error-message').text('');
  }
}

// Deletes row that data belongs to
function deleteButton(){
  removeFromArray(this);
  $(this).parent().parent().remove();
  totalSalaryCalc();
}

// Removes employee from the total salary pool
function removeFromArray(target){
  let targetEmployee = $(target).parent().parent().children('.id-number').text();
  $('#employee-table').removeData(targetEmployee);
}