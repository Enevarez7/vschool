var employees = []

function Employee (name, job, salary, status = "full-time"){
this.name = name
this.job = job
this.salary = salary
this.status = status
this.printEmployeeForm = name + " works as " + job + " estimated salary USD/hr :" + salary + " employment status: " + status
}
var newEmployee1 = new Employee ("Amanda Lorian", "bounty hunter", "$1000", "contract")
newEmployee1.status = "contract"
console.log(newEmployee1)
var newEmployee2 = new Employee ("Rick Sanchez", "smartest guy in the World", "$4000000", "full-time")
console.log(newEmployee2)
var newEmployee3 = new Employee ("Jeff", "web developer", "$60", "part-time")
newEmployee3.status = "part-time"
console.log(newEmployee3)
console.log(employees)