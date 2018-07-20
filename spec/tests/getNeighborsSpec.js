import createMatrix from '../../src/gameLogic/createMatrix.js'
import getNeighbors from '../../src/gameLogic/getNeighbors.js'

describe('getNeighbors', () => {
    let rows = 5;
    let cols = 5;
    let range = 4;

    let testMatrix = createMatrix(rows, cols, range);

    let pos = {
        row: 2,
        col: 1
    }

    let moo = testMatrix.getNeighbors(pos)
     console.log(moo);
     


    it(`should have no index with a value less than 0`, () => {
        expect(
            testMatrix.some((row) => row.some((element) => element >= 0))
        ).toEqual(true);
    });

});