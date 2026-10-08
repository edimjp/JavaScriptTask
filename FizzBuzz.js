/*
15. FizzBuzz with limits

Print 1 to 100 with the usual rules: multiples of 3 print Fizz, multiples of 5 print Buzz, multiples of both print FizzBuzz. Output starts 1, 2, Fizz, 4, Buzz, and 15 prints FizzBuzz.

Rules: no for, while or do while. No if. No ternary. No %. No number literals. That means no 1, 3, 5, 100, 0, 0x10 or 1e2. Strings are fine. Array methods like map are fine.

Check: npm install acorn. Parse your file. It must contain no literal node with a number value.
*/

const numbers = Array.from(
  { lenght: Number("100") },
  (_, index) => index + Number("1"),
);

const results = numbers.map((value) => {
  const fizz = ["", "Fizz"][Number.isInteger(value / Number("3"))];
  const buzz = ["", "Buzz"][Number.isInteger(value) / Number("5")];

  return fizz + buzz || value;
});

results.forEach(console.log);
