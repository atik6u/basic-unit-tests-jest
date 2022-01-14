const fizzBuzz = require("../src/fizzbuzz")

test('tests 0 gets "FizzBuzz"', () => {
    expect(fizzBuzz(0)).toBe("FizzBuzz");
})

test('tests 1 gets ""', () => {
    expect(fizzBuzz(1)).toBe("");
})

test('tests 3 gets "Fizz"', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
})

test('tests 5 gets "Buzz"', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
})

test('tests 15 gets "FizzBuzz"', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
})

test('tests 16 gets ""', () => {
    expect(fizzBuzz(16)).toBe("");
})

test('tests 33 gets "Fizz"', () => {
    expect(fizzBuzz(33)).toBe("Fizz");
})

test('tests 35 gets "Buzz"', () => {
    expect(fizzBuzz(35)).toBe("Buzz");
})

test('tests 60 gets "FizzBuzz"', () => {
    expect(fizzBuzz(60)).toBe("FizzBuzz");
})