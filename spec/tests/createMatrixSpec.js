import createMatrix from '../../src/gameLogic/createMatrix.js'

describe('createMatrix', () => {
    let rows = 5;
    let cols = 5;
    let range = 4;

    let testMatrix = createMatrix(rows, cols, range);

    let isBelowThreshold = (val, range = range) => val <= range;
    
    let checkForValues = (arr) => {
        for (let i of arr) {
            if (!i.some(isBelowThreshold)) return false;
        }
        return true
    }

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
            testMatrix[0].length
        ).toEqual(cols);
    });

    it(`should have no index with a value greater than ${range}`, () => {
        expect(
                checkForValues(testMatrix)
        ).toEqual(true);
    });

});