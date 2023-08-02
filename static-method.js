"use strict";

// init
class MathUtil {
  static sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

// output
console.info(MathUtil.sum(10, 10, 10)); // 30
