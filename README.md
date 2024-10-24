# incubyte_tdd_assignment

# String Calculator TDD Kata

This project is an implementation of the String Calculator Kata using **Node.js** and **Jest** for Test-Driven Development (TDD). The project will demonstrate TDD principles.

## Problem Statement

Create a simple String calculator with a method signature like this:

int add(string numbers)

Input: a string of comma-separated numbers
Output: an integer, sum of the numbers

## Requirements:
1.Handle an empty string and return 0.
2.Handle one number and return the number itself.
3.Handle two numbers and return their sum.
4.Allow the add method to handle any number of numbers.
5.Allow the add method to handle new lines between numbers (in addition to commas). For example, "1\n2,3" should return 6.
6.Support custom delimiters. A different delimiter can be specified in the format: "//[delimiter]\n[numbers]". For example, "//;\n1;2" where the delimiter is ; should return 3.
7.Negative numbers are not allowed. If a negative number is passed, throw an exception with the message "Negative numbers not allowed: <negative_numbers>". If there are multiple negative numbers, list all of them in the exception message.

## Tools Used:
1.Node.js
2.Jest (for testing)

## setup
1. Clone Repository
2. Install Dependencies (npm install)
3. Run tests (npm test)

### Step 1: Handle Empty String

 Handle an empty string input. When the input is an empty string (`""`), the `add` method should return `0`.

```js
calculator.add("") // returns 0
 
 ```
 ### Step 2: Handle Single Number

 handle a single number input. When the input is a single number, the `add` method should return that number.

```js
calculator.add("1") // returns 1
```

### Step 3: Handle Two Numbers

Handle two numbers separated by a comma. When the input contains two numbers, the `add` method should return their sum.

```js
calculator.add("1,2") // returns 3
```
### Step 4: Handle Multiple Numbers

Handle any number of numbers separated by commas. The `add` method should return the sum of all numbers.

```js
calculator.add("1,2,3,4") // returns 10
```
### Step 5: Handle New Lines Between Numbers

Allow new lines (`\n`) as delimiters in addition to commas. The `add` method should return the sum of all numbers.

```js
calculator.add("1\n2,3") // returns 6
```
### Step 6: Support Custom Delimiters

Should support custom delimiters. If the input starts with `//[delimiter]\n`, the specified delimiter should be used to separate numbers.

```js
calculator.add("//;\n1;2") // returns 3
```

### Step 7: Handle Negative Numbers

Handle negative numbers. The `add` method should throw an exception if negative numbers are passed, listing all the negative numbers in the error message.

```js
calculator.add("1,-2,3,-4") // throws error: "Negative numbers not allowed: -2,-4"
