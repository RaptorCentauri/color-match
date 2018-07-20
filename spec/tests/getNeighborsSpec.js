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

    let str = 'str';

    let moo = testMatrix.getNeighbors(str)
     console.log(moo.size);
     


    it(`should return a map with a size of 4 or less`, () => {
        expect(
            testMatrix.getNeighbors(pos).size <= 4
        ).toEqual(true);
    });

    it(`should throw an error if given type of other than an object`, () => {
        expect(
            testMatrix.getNeighbors(str)
        ).toThrowError('getNeighbors expects an object!');
    });

});


