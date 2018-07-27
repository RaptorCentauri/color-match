import createMatrix from '../../src/gameLogic/createMatrix.js'

describe('createMatrix', () => {
    let rows = 5;
    let cols = 5;

    let testMatrix = createMatrix(rows, cols);
    
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

    it(`all indexes should be null` , () => {
        expect(
            testMatrix.some((row) => row.some((element) => element != null))
        ).toEqual(false);
    });
});