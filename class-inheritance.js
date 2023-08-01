"use strict";

class Employee {
  sayHello(name) {
    console.info(`Hello ${name}, my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
  //   sayHello(name) {
  //     console.info(`Hello ${name}, my name is manager ${this.name}`);
  //   }
}

const employee1 = new Employee();
employee1.name = "Alian";
employee1.sayHello("Ilyas");

const manager1 = new Manager();
manager1.name = "Alin";
manager1.sayHello("Ilyas");
