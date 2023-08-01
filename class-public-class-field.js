"use strict";

class Customer {
  firstName;
  lastName;
  balance = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello(name) {
    console.info(
      `Hello ${name}, my name is ${this.firstName} ${this.lastName}`
    );
  }
}

const ali = new Customer("Alian", "Hakim");
ali.sayHello("Ilyas");
