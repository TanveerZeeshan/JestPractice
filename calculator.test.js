const calculator = require("./calculator");

describe("testcase", () => {
  //testCases for multiply
  test("Multiply test case", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  //test cases for divide
  test("divide test case", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
  //test case for not to be
  test("2-2 not return 1", () => {
    expect(calculator.diff(2, 2)).not.toBe(1);
  });
  // test case for truthness
  test("should return null falsy ", () => {
    expect(calculator.isNull()).toBeNull();
  });

  test('should return null', () => {
    const n = null;
  expect(n).toBeNull();
 expect(n).toBeDefined();
 expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
   expect(n).toBeFalsy();
  });
  //check value 

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  //test cases for number
  test('40 + 60 ', () => {
    const num1 = 60;
    const num2 = 40 

    //expect(num1 + num2).toBeLessThan(110);
   // expect(num1 + num2).toBeLessThanOrEqual(100);

    //expect(num1 + num2).toBeGreaterThan(90)
    //expect(num1 + num2).toBeGreaterThanOrEqual(100);

  // toBe and toEqual are equivalent for numbers
  //expect(num1 + num2).toBe(100);
  expect(num1 + num2).toEqual(100);


})
// test cases for floating numbers
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
   // in floating numbers use toBeClose instead of toBeEqual
    expect(value).toBeCloseTo(0.3); // This works.
  });

  // test cases for string 
  test('there is no M in ice cream', () => { 
//expect('ice cream').not.toMatch(/M/)
expect('ice cream').toMatch(/i/)

})

//test cases for array
test('contain JEST in array ', () => {
const courses =  ['HTML','CSS',"JAVASCRIPT",'JEST']
expect(courses).toContain('JEST')
})
});

