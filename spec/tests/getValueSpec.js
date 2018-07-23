import getValue from '../../src/gameLogic/getValue.js'

describe('getValue', () => {


    let testMatrix = [[0,1,3],[4,5,6],[7,8,9]];


    it(`should throw a TypeError if passed a parameter that is not an object`, () => {
        expect(
        () => {testMatrix.getValue('string')}
        ).toThrowError(TypeError, 'getNeighbors expects an object!');
    });

    it(`should throw a TypeError if obj.row is not a number`, () => {
        expect(
        () => {testMatrix.getValue({row: '', col: 0})}
        ).toThrowError(TypeError, 'getNeighbors expects an obj.row to be a number!');
    });

    it(`should throw a TypeError if obj.col is not a number`, () => {
        expect(
        () => {testMatrix.getValue({row: 1, col: ''})}
        ).toThrowError(TypeError, 'getNeighbors expects an obj.col to be a number!');
    });

    it(`should throw a ReferenceError if obj.row is missing`, () => {
        expect(
        () => {testMatrix.getValue({col: 0})}
        ).toThrowError(ReferenceError, 'getNeighbors expects a row property!');
    });

    it(`should throw a ReferenceError if obj.col is missing`, () => {
        expect(
        () => {testMatrix.getValue({row: 0})}
        ).toThrowError(ReferenceError, 'getNeighbors expects a col property!');
    });

    it(`should throw a RangeError if obj.row is greater than the number or rows in the matrix`, () => {
        expect(
        () => {testMatrix.getValue({row: 10, col: 0})}
        ).toThrowError(RangeError, `Attmpted to call getNeighbors with a row value of 10! Array only has 3 rows!`);
    });

    it(`should throw a RangeError if obj.col is greater than the number or cols in the matrix`, () => {
        expect(
        () => {testMatrix.getValue({row: 0, col: 10})}
        ).toThrowError(RangeError, `Attmpted to call getNeighbors with a col value of 10! Array only has 3 col!`);
    });

    it(`should return a number`, () => {
        expect(
            typeof(testMatrix.getValue({row: 1, col: 1}))
        ).toBe('number');
    });

    it(`should equal 5`, () => {
        expect(
            testMatrix.getValue({row: 1, col: 1})
        ).toEqual(5);
    });

});

