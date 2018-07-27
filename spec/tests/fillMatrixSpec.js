import fillMatrix from '../../src/gameLogic/fillMatrix.js'

describe('fillMatrix', () => {


    // let testMatrix = [[0,1,3],[4,5,6],[7,8,9]];
    let testMatrix = [['x',null,'x'],['x',null,null],[null,'x','x']];

    let lookForNull = (arr) => {
        arr.forEach(row => {
            row.forEach(col =>{
                if(col === null) return true;
            })
        })
        return false;
    }



    it(`should throw a TypeError if passed a parameter that is not an number`, () => {
        expect(
        () => {testMatrix.fillMatrix('string')}
        ).toThrowError(TypeError, 'fillMatrix expects a number!');
    });


  
    it(`should throw a RangeError if range is less than zero`, () => {
        expect(
        () => {testMatrix.fillMatrix(-10)}
        ).toThrowError(RangeError, `Range must be 0 or above!`);
    });


    it(`should fill all null spaces in a matrix`, () => {
        testMatrix.fillMatrix(5)
        expect(
            lookForNull(testMatrix)
        ).toBeFalsy();
    });

});



































let testMatrix = [['x',null,'x'],['x',null,null],[null,'x','x']];

// console.log(testMatrix);

testMatrix.forEach(row => console.log(row));
console.log('============================================');


testMatrix.fillMatrix(4);

testMatrix.forEach(row => console.log(row));






