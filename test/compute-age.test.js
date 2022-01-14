const computeAge = require("../src/compute-age")

test('tests same date (2008/8/22)', () => {
    expect(computeAge(new Date(2008, 8, 22), new Date(2008, 8, 22))).toBe(0);
})


test('tests 1 month before 11th birthday', () => {
    expect(computeAge(new Date(2008, 8, 22), new Date(2019, 7, 22))).toBe(10);
})

test('tests 1 day before 11th birthday', () => {
    expect(computeAge(new Date(2008, 8, 22), new Date(2019, 8, 21))).toBe(10);
})

test('tests on 11th birthday', () => {
    expect(computeAge(new Date(2008, 8, 22), new Date(2019, 8, 22))).toBe(11);
})

test('tests 1 day after 11th birthday', () => {
    expect(computeAge(new Date(2008, 8, 22), new Date(2019, 8, 23))).toBe(11);
})

test('tests 20 days after 11th birthday', () => {
    expect(computeAge(new Date(2008, 8, 22), new Date(2019, 9, 1))).toBe(11);
})

test('tests same date (2008/8/22)', () => {
    expect(computeAge(new Date(2008, 8, 22), new Date(2001, 8, 22))).toBe(-7);
})