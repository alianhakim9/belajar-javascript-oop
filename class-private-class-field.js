"use strict";

class Counter {
  #counter = 0;

  increment() {
    this.#counter++;
  }

  decrement() {
    this.#counter--;
  }

  get getCounter() {
    return this.#counter;
  }
}

const counter = new Counter();

counter.increment();
counter.increment();
counter.increment();

console.info(counter.getCounter);
console.info(counter);
