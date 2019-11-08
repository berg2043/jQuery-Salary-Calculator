$(onReady);

function onReady(){
  console.log('JQ');
}

// Gets the form info
function getInfo(){
  let fName = $('#first-name-input').val();
  let lName =$('#last-name-input').val();
  let idNumber = $('#id-input').val();
  let title = $('#title-input').val();
  let salary = $('#salary-input').val();
  let employee = {fName, lName, idNumber, title, salary};
  return employee;
}

function salaryCollector(employee){
  employeeList.push({
    employee.name,
    employee.salary
  })
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