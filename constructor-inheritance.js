function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

function Manager(firstName, lastName) {
  // (objectnya apa, parameternya berapa dan apa)
  this.lastName = lastName;
  Employee.call(this, firstName);
}

const ali = new Manager("Alian", "Hakim");
console.info(`${ali.firstName} ${ali.lastName}`);
ali.sayHello("Ilyas");
