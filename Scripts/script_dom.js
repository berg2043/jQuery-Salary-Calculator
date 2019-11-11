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

// Pushed data to table
function pushToTable(employee){
  let tableRow = $(
    <tr>
      <td>${employee.fName}</td>
      <td>${employee.lName}</td>
      <td class="id-number">${employee.idNumber}</td>
      <td>${employee.titles}</td>
      <td class="salary">$${employee.salary}</td>
      <td><button class="delete-button btn btn-light">Delete</button></td>
    </tr>
  )
  $('#employee-table').append(tableRow);
}

// Updates salary
function totalSalaryCalc(){
  let totalSalary = 0
  $('.salary').each(function(){
    totalSalary += (Number($(this).text().replace('$','')));
  })
  let monthlySalary = Number((totalSalary/12).toFixed(2)).toLocaleString();
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
  } else if (idTest()){
    $('#error-message').text('Please use a unique ID number.');
  } else {
    let newEmployee = getInfo();
    pushToTable(newEmployee);
    totalSalaryCalc();
    $('#error-message').text('');
  }
}

// Deletes row that data belongs to
function deleteButton(){
  $(this).parent().parent().remove();
  totalSalaryCalc();
}

// ID test function
function idTest(){
  let dummy = false;
  console.log(dummy);
  $('.id-number').each(function(){
    if($(this).text() === $('#id-input').val()){
      dummy = true;
    }
  })
  console.log(dummy);
  return dummy;
}
