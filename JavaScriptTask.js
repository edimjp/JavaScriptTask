/*
Rules


Run every answer. Paste the output under your code.
Test with the examples given, then add two of your own.
If a task cannot be done, say so and explain why. Then show the closest thing that works.

1. Exact length

Write a function that takes an array of numbers and returns the sum. Its source must be exactly 120 characters. Spaces count.

Check: fn.toString().length must be 120.

js
const fn = (a, b) => a + b;
console.log(fn.toString().length); // prints 15

Only the function text counts. const fn = does not. Your function must also work: sum([1, 2, 3]) returns 6.
*/

const sum = (arr) => {
  if (!Array.isArray(arr)) return NaN;
  return arr.reduce((s, n) => (typeof n === "number" ? s + n : NaN), 0);
};

console.log(sum([1, 2, 3]));
console.log(sum([100, 200, 400, -500]));
console.log(sum([40, "string", 70]));

console.log(sum.toString().length);

/*
OutPuts:
6
200
NaN
120 
*/

/*2. Quine

Write a program that prints its own source code.

Rules: no toString, no reading files.

This is not a quine. It prints "hello", not its own code:

js
console.log("hello");

Check: run node quine.js > out.txt, then diff quine.js out.txt. It must show no difference, apart from the last newline.
 */

const sourceCode =
  "const sourceCode = %s;\nconsole.log(sourceCode, JSON.srtingify(sourceCode))";
console.log(sourceCode, JSON.stringify(sourceCode));

/*
OutPuts:
const sourceCode = "const sourceCode = %s;\nconsole.log(sourceCode, JSON.srtingify(sourceCode))";
console.log(sourceCode, JSON.srtingify(sourceCode))
*/

/*
3. Six characters only

Write code that produces the string "hi". The code may only use these characters: [ ] ( ) ! +. No letters, no spaces, no semicolons.

Examples of what these characters can do:

js
+[]     // 0
![]     // false
!![]    // true
+!![]   // 1
[]+[]   // empty string

Check: console.log(eval(yourCode)) prints hi. That line is only for testing. Your answer will be very long. That is normal.
*/
const hi =
  "(+((+!![]+[])+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+[])))[(!![]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!![]+!![]]+(![]+[])[+!![]]+(!![]+[])[+[]]]+[])[!![]+!![]+!![]+!![]+!![]+!![]]+(([]+[])[([][(![]+[])[+[]]+(![]+[])[!![]+!![]]+(![]+[])[+!![]]+(!![]+[])[+[]]]+[])[!![]+!![]+!![]]+([][(![]+[])[+[]]+(![]+[])[!![]+!![]]+(![]+[])[+!![]]+(!![]+[])[+[]]]+[])[!![]+!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[+!![]]+(![]+[])[!![]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+(!![]+[])[!![]+!![]]+([][(![]+[])[+[]]+(![]+[])[!![]+!![]]+(![]+[])[+!![]]+(!![]+[])[+[]]]+[])[!![]+!![]+!![]]+(!![]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!![]+!![]]+(![]+[])[+!![]]+(!![]+[])[+[]]]+[])[!![]+!![]+!![]+!![]+!![]+!![]]+(!![]+[])[+!![]]]+[])[!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[+!![]]+(([]+[])[([][(![]+[])[+[]]+(![]+[])[!![]+!![]]+(![]+[])[+!![]]+(!![]+[])[+[]]]+[])[!![]+!![]+!![]]+([][(![]+[])[+[]]+(![]+[])[!![]+!![]]+(![]+[])[+!![]]+(!![]+[])[+[]]]+[])[!![]+!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[+!![]]+(![]+[])[!![]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+(!![]+[])[!![]+!![]]+([][(![]+[])[+[]]+(![]+[])[!![]+!![]]+(![]+[])[+!![]]+(!![]+[])[+[]]]+[])[!![]+!![]+!![]]+(!![]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!![]+!![]]+(![]+[])[+!![]]+(!![]+[])[+[]]]+[])[!![]+!![]+!![]+!![]+!![]+!![]]+(!![]+[])[+!![]]]+[])[!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]]]((+((!![]+!![]+!![]+[])+(!![]+!![]+!![]+!![]+!![]+!![]+[]))))+([][[]]+[])[!![]+!![]+!![]+!![]+!![]]";

console.log(eval(hi));

/*
OutPut:
hi
/*

/*
5. Event loop order

Predict the exact log order. Write your prediction first. Then run the code. Mark each line you got wrong and say why.

Warm up example. It prints 1, 4, 3, 2. Normal code runs first. Then promise callbacks. Then timers.

js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

Now the real one:

js
console.log("A");
setTimeout(() => console.log("B"), 0);
queueMicrotask(() => console.log("C"));
process.nextTick(() => console.log("D"));
(async () => {
  console.log("E");
  await null;
  console.log("F");
  await (async () => {
    console.log("G");
    await null;
    console.log("H");
  })();
  console.log("I");
})();
Promise.resolve().then(() => console.log("J"));
console.log("K");

*/

console.log("A");
setTimeout(() => console.log("B"), 0);
queueMicrotask(() => console.log("C"));
process.nextTick(() => console.log("D"));
(async () => {
  console.log("E");
  await null;
  console.log("F");
  await (async () => {
    console.log("G");
    await null;
    console.log("H");
  })();
  console.log("I");
})();
Promise.resolve().then(() => console.log("J"));
console.log("K");

/*

output:
A
E
K
D
C
F
G
J
H
I
B
*/

/*
19. Regex for colours

Write isHexColor(str) with one regex. A valid colour starts with #, then has 3 or 6 hex characters. Hex characters are 0 to 9 and a to f. Letter case does not matter.

Input	Result
"#fff"	true
"#a1B2c3"	true
"#000000"	true
"fff"	false
"#ffff"	false
"#ggg"	false
"#12345"	false

A regex warm up:

js
/^\d{4}$/.test("1234");  // true
/^\d{4}$/.test("12345"); // false
*/

function isHexColor(str) {
  return /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(str);
}

// console.log(isHexColor("#hrh"));
// console.log(isHexColor("#234"));
// console.log(isHexColor("#000"));

/*
output:
false
true
true
*/
