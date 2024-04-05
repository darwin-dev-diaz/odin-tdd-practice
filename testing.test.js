import { capitalize } from "./capitalize";
import { reverseString } from "./reverseString";
import { calc } from "./calculator";
import { caesarCipher } from "./cipher";
import { analyzeArray } from "./analyzeArray";

test("analyzeArray exists", () => {
  expect(analyzeArray).toBeDefined();
});

test("returns an obj with average, min, max and length", () => {
  expect(analyzeArray(["test"]).average).toBeDefined();
  expect(analyzeArray(["test"]).min).toBeDefined();
  expect(analyzeArray(["test"]).max).toBeDefined();
  expect(analyzeArray(["test"]).length).toBeDefined();
});

test("returns correct values of [1,2,3,4]", () => {
  expect(analyzeArray([2, 1, 3, 4]).average).toBe(2.5);
  expect(analyzeArray([1, 2, 3, 4]).min).toBe(1);
  expect(analyzeArray([1, 2, 3, 4]).max).toBe(4);
  expect(analyzeArray([1, 2, 3, 4]).length).toBe(4);
});
test("returns correct values of [2,3,4,5]", () => {
  expect(analyzeArray([2,3,4,5]).average).toBe(3.5);
  expect(analyzeArray([2,3,4,5]).min).toBe(2);
  expect(analyzeArray([2,3,4,5]).max).toBe(5);
  expect(analyzeArray([2,3,4,5]).length).toBe(4);
});

test("works with an empty arr", ()=>{
  expect(analyzeArray([]).average).toBe(null);
  expect(analyzeArray([]).min).toBe(null);
  expect(analyzeArray([]).max).toBe(null);
  expect(analyzeArray([]).length).toBe(0);
})

// test("caesarCipher exists", () => {
//   expect(caesarCipher).toBeDefined();
// });

// test("shift factor of one works (1)", () => {
//   expect(caesarCipher("abc", 1)).toBe("bcd");
// });

// test("shift factor of one works (2)", () => {
//   expect(caesarCipher("xyz", 1)).toBe("yza");
// });

// test("shift factor of three works", () => {
//   expect(caesarCipher("abc", 3)).toBe("def");
// });

// test("shift factor of 25 works", () => {
//   expect(caesarCipher("abc", 25)).toBe("zab");
// });
// test("shift factor of 26 works", () => {
//   expect(caesarCipher("abc", 26)).toBe("abc");
// });
// test("shift factor of 28 works", () => {
//   expect(caesarCipher("abc", 28)).toBe("cde");
// });

// test("work with upper case characters with a shift of one", () => {
//   expect(caesarCipher("Abc", 1)).toBe("Bcd");
// });

// test("work with upper case characters with a shift of 77", () => {
//   expect(caesarCipher("Abc", 77)).toBe("Zab");
// });

// test("ignores special characters", ()=>{
//   expect(caesarCipher("a&*)bc ABC", 1)).toBe("b&*)cd BCD");
// })

// test("calc exists", () => {
//   expect(calc).toBeDefined();
// });
// test("addition works", () => {
//   expect(calc.add(1, 2)).toBe(3);
// });
// test("subtraction works", () => {
//   expect(calc.sub(1, 2)).toBe(-1);
// });
// test("multiplication works", () => {
//   expect(calc.mult(10, 2)).toBe(20);
// });
// test("division works", () => {
//   expect(calc.div(1, 2)).toBe(0.5);
// });
// test("division by zero works", () => {
//   expect(calc.div(4, 0)).toBe(Infinity);
// });

// test("Capitalize exists", () => {
//   expect(capitalize).toBeDefined();
// });
// test("Returns 'Abc' ", () => {
//   expect(capitalize('abc')).toBe("Abc");
// });
// test("Returns 'Bcd'", () => {
//   expect(capitalize('bcd')).toBe("Bcd");
// });
// test("Works when first char is non-letter (1)", () => {
//   expect(capitalize(' bcd')).toBe(" Bcd");
// });
// test("Works when first char is non-letter (2)", () => {
//   expect(capitalize('43214340 bcd')).toBe("43214340 Bcd");
// });

// test("Works when first char is already uppercase (2)", () => {
//   expect(capitalize('Bad')).toBe("Bad");
// });

// test("Reverse string function exists", () => {
//   expect(reverseString).toBeDefined();
// });

// test("abc to cba", () => {
//   expect(reverseString("abc")).toBe("cba");
// });

// test("bca to acb", () => {
//   expect(reverseString("bca")).toBe("acb");
// });

// test("Empty string works fine", () => {
//   expect(reverseString("")).toBe("");
// });
// test("Works with any string", () => {
//   expect(reverseString("4321")).toBe("1234");
// });
