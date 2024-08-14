const sortArray = require('./sortArray'); // adjust the path as needed

describe('sortArray function', () => {
    
    test('should correctly sort an array of positive numbers', () => {
        const input = [5, 3, 8, 1, 2];
        const expectedOutput = [1, 2, 3, 5, 8];
        expect(sortArray(input)).toEqual(expectedOutput);
    });

    test('should correctly sort an array of negative numbers', () => {
        const input = [-3, -1, -7, -4];
        const expectedOutput = [-7, -4, -3, -1];
        expect(sortArray(input)).toEqual(expectedOutput);
    });

    test('should correctly sort an array of mixed positive and negative numbers', () => {
        const input = [3, -1, 2, -7, 5];
        const expectedOutput = [-7, -1, 2, 3, 5];
        expect(sortArray(input)).toEqual(expectedOutput);
    });

    test('should correctly handle an array with duplicates', () => {
        const input = [3, 5, 1, 3, 5, 2];
        const expectedOutput = [1, 2, 3, 3, 5, 5];
        expect(sortArray(input)).toEqual(expectedOutput);
    });

    test('should return an empty array when input is an empty array', () => {
        const input = [];
        const expectedOutput = [];
        expect(sortArray(input)).toEqual(expectedOutput);
    });

    test('should return the same array if it has only one element', () => {
        const input = [42];
        const expectedOutput = [42];
        expect(sortArray(input)).toEqual(expectedOutput);
    });

    test('should correctly sort an array with large numbers', () => {
        const input = [1000000, 500, 300000, 10];
        const expectedOutput = [10, 500, 300000, 1000000];
        expect(sortArray(input)).toEqual(expectedOutput);
    });

    test('should correctly sort an array with floating point numbers', () => {
        const input = [1.2, 3.5, 0.5, 2.1];
        const expectedOutput = [0.5, 1.2, 2.1, 3.5];
        expect(sortArray(input)).toEqual(expectedOutput);
    });

});
