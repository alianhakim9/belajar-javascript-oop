function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

/**
 * disini salahnya
 * ini malah meng-asign ulang/direplace prototypenya
 * bukan melakukan prototype inheritance
 */
// Manager.prototype = Employee.prototype; // Salah
Manager.prototype = Object.create(Employee.prototype); // Benar

Manager.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Manager ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Employee ${this.name}`);
};

const employee = new Employee("Ilyas");
employee.sayHello("Hanifah");

const manager = new Manager("Alian");
manager.sayHello("Hanifah");
