"use strict";

class Employee {
  constructor(name) {
    this.name = name;
  }
  sayHello(name) {
    console.info(`Hello ${name}, my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, country) {
    super(name);
    this.country = country;
  }
  sayHello(name) {
    console.info(
      `Hello ${name}, my name is manager ${this.name}, country ${this.country}`
    );
  }
}

const employee1 = new Employee("Alian");
employee1.sayHello("Ilyas");

const manager1 = new Manager("Alin", "Indonesia");
manager1.sayHello("Ilyas");
