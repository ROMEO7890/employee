import inquirer from "inquirer";
let EmployeeData = [];
const answer = await inquirer.prompt([
    {
        type: 'number',
        message: 'Enter Employee ID!',
        name: 'empId'
    },
    {
        type: 'input',
        message: 'Enter Employee Name!',
        name: 'empName'
    },
    {
        type: 'number',
        message: 'Enter Employee Salary!',
        name: 'empSalary',
    },
]);
EmployeeData.push(answer);
console.log("Entered Employee Data:");
for (const employee of EmployeeData) {
    console.log("Employee ID is " + employee.empId + ", Employee Name is " + employee.empName + ", Employee Salary is " + employee.empSalary);
}
