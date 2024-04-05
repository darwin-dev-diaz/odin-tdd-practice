import { capitalize } from "./capitalize";
import { reverseString } from "./reverseString";
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

test("Reverse string function exists", () => {
  expect(reverseString).toBeDefined();
});

test("abc to cba", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("bca to acb", () => {
  expect(reverseString("bca")).toBe("acb");
});

test("Empty string works fine", () => {
  expect(reverseString("")).toBe("");
});
test("Works with any string", () => {
  expect(reverseString("4321")).toBe("1234");
});
