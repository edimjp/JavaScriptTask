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
4. Event loop order

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
/*
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
5. Regex for colours

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

/*
6. Copy an object

A shallow copy shares inner objects. This causes bugs:

js
const a = { name: "Ada", tags: ["x", "y"], info: { age: 30 } };
const shallow = { ...a };
shallow.info.age = 99;
console.log(a.info.age); // prints 99

Write clone(value). It copies nested objects and arrays. Numbers, strings and booleans are returned as they are.

js
const b = clone(a);
b.info.age = 31;
console.log(a.info.age);  // must print 30
b.tags.push("z");
console.log(a.tags.length); // must print 2

How do I go about this task
*/

function clone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => clone(item));
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, clone(item)]),
  );
}

const myProfile = clone({ name: "Edim", sex: "Male", color: "lightSkin" });
console.log(myProfile);

/*
output:
{ name: 'Edim', sex: 'Male', color: 'lightSkin' }
*/

/*
7. Repeat then stop

setInterval runs a function again and again. It never stops by itself.

js
const id = setInterval(() => console.log("tick"), 1000);
// stop it with clearInterval(id)

Print tick 1, tick 2 and tick 3, one per second. Then stop.

*/

let count = 0;

const id = setInterval(() => {
  count++;
  console.log(`tick ${count}`);

  if (count === 3) {
    clearInterval(id);
  }
}, 1000);

/*
OutPut:
tick 1
tick 2
tick 3
*/

/*
8. Type conversion

Write your guess for each line. Then run it with console.log and score yourself. One mark per correct guess.

Line	Your guess	Actual
"3" + 4		
"10" - 5		
true + 1		
typeof "5"		
5 == "5"		
5 === "5"		
0.1 + 0.2		
typeof null		
*/

/*
My guesses:
"3" + 4	= "34"
"10" - 5 = 5		
true + 1	= 2
typeof "5"	= "string"	
5 == "5"	= true	
5 === "5"	 = false	
0.1 + 0.2		= 0.3000000001
typeof null = "object"
 */

console.log("3" + 4);
console.log("10" - 5);
console.log(true + 1);
console.log(typeof "5");
console.log(5 == "5");
console.log(5 === "5");
console.log(0.1 + 0.2);
console.log(typeof null);

/*
Actual Output:
34
5
2
string
true
false
0.30000000000000004
object
*/

/*
9. Compare decimals

Computers store decimals with tiny errors.

js
console.log(0.1 + 0.2);         // prints 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // prints false

Write almostEqual(a, b). It returns true when the difference between the two numbers is smaller than Number.EPSILON. Use Math.abs.

js
almostEqual(0.1 + 0.2, 0.3); // true
almostEqual(1, 1.1);         // false

Then print (0.1 + 0.2).toFixed(2). Say what it prints. Say what type the result is.
*/

function almostEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(almostEqual(0.1 + 0.2, 0.3));
console.log(almostEqual(1, 1.1));

/*
Output:
true
false
*/

/*

The Tenth Task is FizzBuzz Task and it is in a seperate file

*/
