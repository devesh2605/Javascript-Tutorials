/**
 * Main Terms: “unary”, “binary”, “operand”
 * 1. An 'operand' – is what operators are applied to.
 * 2. An operator is 'unary' if it has a single operand.
 * 3. An operator is 'binary' if it has two operands.
 */

let x = 1;
x = -x;
console.log('x:: ', x); // -1, unary negation was applied

let x1 = 2;
let y1 = 1;
console.log('result:: ', (x1 - y1)); //binary minus subtracts values

/** String concatenation, binary + */
let s = "my" + "string";
console.log('s:: ', s);

/**
* if one of the operands is a string, the other one is converted to a string too.
Other arithmetic operators work only with numbers and always convert their operands to numbers.
* */
console.log('1' + 2);
console.log('2' + 1);
console.log(2 + 2 + '1');

/** Numeric conversion, unary + */
console.log(+'1');
console.log(+true);
console.log(+"");

let apples = "2";
let oranges = "3";
console.log(apples + oranges);

console.log(+apples + +oranges);

/**
 * Operatore precedence
 * 1. Unary plus/negations - 16
 * 2. Multiplication / division - 14
 * 3. Addition / subtraction - 13
 * 4. Assignment - 3
 */

/**Exponentiation */
console.log('Exponentiation: ', 2 ** 3);
console.log('Exponentiation: ', 8 ** (1 / 3));

/**
 * Increment/decrement 
 * 1. Increment/decrement can only be applied to variables.
 */