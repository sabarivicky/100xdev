/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/


class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this._validateNumber(num);
    this.result += num;
    return this;
  }

  subtract(num){
    this._validateNumber(num);
    this.result -= num;
    return this;
  }

  multiply(num){
    this._validateNumber(num);
    this.result *= num;
    return this;
  }
  
  divide(num){
    this._validateNumber(num);
    if (num === 0) {
      throw new Error("Division by zero");
    }
    this.result /= num;
    return this;
  }

  clear() {
    this.result = 0;
    return this;
  }

  getResult() {
    return this.result;
  }

  calculate(expression){
    if (typeof expression !== "string"){
      throw new Error("Invalid type");
    }
    const cleaned = expression.replace(/\s+/g,"");
    const valid_reg = /^[0-9+\-*/().]+$/;
    if(!valid_reg.test(cleaned)){
      throw new Error("Invalid expression character")
    }
    try{
      const value = Function(`"use strict"; return (${cleaned})`)();

      if(
        typeof value !== "number" ||
        isNaN(value) ||
        !Number.isFinite(value)){
        throw new Error("Invalid expression");
      }

      this.result = value;
      return value;
    } catch {
      throw new Error("Invalid expression");
    }
  }

  _validateNumber(num) {
    if (typeof num !== "number" || isNaN(num)){
      throw new Error("Invalid number");
    }
  }
}

module.exports = Calculator;
