const mergeSortedArrays = require("../src/merge-sort-arrays")

test('merges [0, 2] and [1, 3] to [0, 1, 2, 3]', () => {
    expect(mergeSortedArrays([0, 2], [1, 3])).toStrictEqual([0, 1, 2, 3]);
})

test('merges [1, 3, 5] and [2, 4] to [1, 2, 3, 4, 5]', () => {
    expect(mergeSortedArrays([1, 3, 5], [2, 4])).toStrictEqual([1, 2, 3, 4, 5]);
})

test('merges [] and [1, 3] to [1, 3]', () => {
    expect(mergeSortedArrays([], [1, 3])).toStrictEqual([1, 3]);
})

test('merges [0, 2] and [] to [0, 2]', () => {
    expect(mergeSortedArrays([0, 2], [])).toStrictEqual([0, 2]);
})

test('merges [5] and [] to [5]', () => {
    expect(mergeSortedArrays([5], [])).toStrictEqual([5]);
})

test('merges [] and [3] to [3]', () => {
    expect(mergeSortedArrays([], [3])).toStrictEqual([3]);
})

test('merges [] and [] to []', () => {
    expect(mergeSortedArrays([], [])).toStrictEqual([]);
})

// TODO: Should throw an exception (unsorted array)
// test('merges unsorted [5, 1, 3] and [4, 2] to [1, 2, 3, 4, 5]', () => {
//     expect(mergeSortedArrays([5, 1, 3], [4, 2])).toStrictEqual([4, 2, 5, 1, 3]);
// })
