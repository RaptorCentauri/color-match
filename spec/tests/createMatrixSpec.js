import createMatrix from '../../src/gameLogic/createMatrix.js'

describe('createMatrix', () => {
    let rows = 5;
    let cols = 5;
    let range = 4;

    let testMatrix = createMatrix(rows, cols, range);
    
    it('should return an array', () => {
        expect(
            Array.isArray(testMatrix)
        ).toEqual(true);
    });

    it(`should have ${rows} rows`, () => {
        expect(
            testMatrix.length
        ).toEqual(rows);
    });

    it(`should have ${cols} columns`, () => {
        expect(
            testMatrix.some((row) => row.length == cols)
        ).toEqual(true);
    });

    it(`should have no index with a value greater than ${range}` , () => {
        expect(
            testMatrix.some((row) => row.some((element) => element <= range))
        ).toEqual(true);
    });

    it(`should have no index with a value less than 0`, () => {
        expect(
            testMatrix.some((row) => row.some((element) => element >= 0))
        ).toEqual(true);
    });

});