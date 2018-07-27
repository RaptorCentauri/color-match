import deleteValue from '../../src/gameLogic/deleteValue.js'

describe('deleteValue', () => {


    let testMatrix = [[0,1,3],[4,5,6],[7,8,9]];


    it(`should throw a TypeError if passed a parameter that is not an object`, () => {
        expect(
        () => {testMatrix.deleteValue('string')}
        ).toThrowError(TypeError, 'getNeighbors expects an object!');
    });

    it(`should throw a TypeError if obj.row is not a number`, () => {
        expect(
        () => {testMatrix.deleteValue({row: '', col: 0})}
        ).toThrowError(TypeError, 'getNeighbors expects an obj.row to be a number!');
    });

    it(`should throw a TypeError if obj.col is not a number`, () => {
        expect(
        () => {testMatrix.deleteValue({row: 1, col: ''})}
        ).toThrowError(TypeError, 'getNeighbors expects an obj.col to be a number!');
    });

    it(`should throw a ReferenceError if obj.row is missing`, () => {
        expect(
        () => {testMatrix.deleteValue({col: 0})}
        ).toThrowError(ReferenceError, 'getNeighbors expects a row property!');
    });

    it(`should throw a ReferenceError if obj.col is missing`, () => {
        expect(
        () => {testMatrix.deleteValue({row: 0})}
        ).toThrowError(ReferenceError, 'getNeighbors expects a col property!');
    });

    it(`should throw a RangeError if obj.row is greater than the number or rows in the matrix`, () => {
        expect(
        () => {testMatrix.deleteValue({row: 10, col: 0})}
        ).toThrowError(RangeError, `Attmpted to call getNeighbors with a row value of 10! Array only has 3 rows!`);
    });

    it(`should throw a RangeError if obj.col is greater than the number or cols in the matrix`, () => {
        expect(
        () => {testMatrix.deleteValue({row: 0, col: 10})}
        ).toThrowError(RangeError, `Attmpted to call getNeighbors with a col value of 10! Array only has 3 col!`);
    });

    it(`should return undefined for the value of the deleted index`, () => {
        testMatrix.deleteValue({row: 1, col: 1});
        expect(
            testMatrix[1][1]
        ).toBeNull;
    });

    it(`should not change the width of the matrix`, () => {
        testMatrix.deleteValue({row: 1, col: 1});
        expect(
            testMatrix.length
        ).toEqual(3);
    });

    it(`should not change the height of the matrix`, () => {
        testMatrix.deleteValue({row: 1, col: 1});
        expect(
            testMatrix[1].length
        ).toEqual(3);
    });

});

