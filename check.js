import { readFileSync } from "node:fs";
import * as acorn from "acorn";

const code = readFileSync("FizzBuzz.js", "utf8");
const ast = acorn.parse(code, { ecmaVersion: "latest" });

function check(node) {
  if (node.type === "Literal" && typeof node.value === "number") {
    throw new Error("Number literal found");
  }

  for (const value of Object.values(node)) {
    if (Array.isArray(value)) {
      value.forEach((item) => item && item.type && check(item));
    } else if (value && value.type) {
      check(value);
    }
  }
}

check(ast);
console.log("No number literals found");
