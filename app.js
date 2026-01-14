// ==============================
// Section A: Counting & Printing
// ==============================

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("-----");


for (var i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("-----");

for (var i = 5; i <= 15; i++) {
    console.log(i);
}

console.log("-----");

for (var i = 0; i <= 20; i++) {
    console.log(i);
}

console.log("=======================");

// =============================
// Section B: Even & Odd Numbers
// =============================

for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("-----");

for (var i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("-----");

for (var i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

console.log("=======================");

// ==================================
// Section C: Calculations Using Loop
// ==================================

var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 10:", sum);

console.log("-----");

var sumEven = 0;
for (var i = 1; i<= 10; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log("Sum of even numbers from 1 to 10:", sumEven);

console.log("-----");

var squareSum = 0;
for (var i = 1; i <= 10; i++) {
    squareSum += i * i;
}
console.log("Sum of squares from 1 to 10:", squareSum);

console.log("=======================");

// ================================
// Section D: Multiplication Tables
// ================================

for (var i = 1; i <= 10; i++) {
    console.log("2 x " + i + " = " + (2 * i));
}

console.log("-----");

for (var i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

console.log("-----");

var z = prompt("Enter a number to show its multiplication table:");
for (var i = 1; i <= 10; i++) {
    console.log(z + " x " + i + " = " + (z * i));
}

console.log("=======================");

// =============================
// Section E: Thinking Questions
// =============================

var count = 0;
for (var i = 1; i <= 50 ; i++) {
    if ( i % 2 === 0) {
        count += 1
    }
}
console.log(count);

console.log("-----");

var count = 0
for (var i = 1; i <= 100 ; i++) {
    if ( i % 3 === 0) {
        count += 1
    }
}
console.log(count);

console.log("=======================");