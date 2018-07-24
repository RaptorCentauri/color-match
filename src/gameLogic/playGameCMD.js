import createMatrix from './createMatrix'
import fillMatrix from './fillMatrix'
import getValue from './getValue'
import getNeighbors from './getNeighbors'
import deleteValue from './deleteValue'




var inquirer = require('inquirer');



let playChain = (arr, pos) => {
    let toBeDestroyed = new Set();
    toBeDestroyed.add(pos);

    let targetValue = arr.getValue(pos);

    //getNeighbors
    let targetNeighbors = newBoard.getNeighbors(pos);
    
    for (const [newPos, value] of targetNeighbors) {
        if (value === targetValue) {
            console.log('v: ', value , '| tv: ', targetValue);
            toBeDestroyed.add(newPos);
        }
    }

    toBeDestroyed.forEach(item => {
        // console.log('setItem', item);
        playChain(arr, item)

    })


    // console.log('set', toBeDestroyed);

}


let pseudoClick = () => {
    inquirer.prompt([{type: 'input', name: 'row'},{type: 'input', name: 'col'}]).then(answers => {
        let targetPos ={}


        targetPos.row = parseInt(answers.row);
        targetPos.col = parseInt(answers.col);

        // let targetValue = newBoard.getValue(targetPos);
        // squarestoKill.add(targetPos)

        // //getNeighbors
        // let targetNeighbors = newBoard.getNeighbors(targetPos);
        
        // playChain(targetNeighbors, squarestoKill, targetValue, newBoard);
        playChain(newBoard, targetPos);
    });
}






let showBoard = (arr) => {
    arr.forEach(row => {
        console.log(row);
    });
    console.log('====================================');
}


let newBoard = createMatrix(5,5);

// console.log('create an empty board');
// console.log('******************************');

// showBoard(newBoard);

// console.log('fill the board');
console.log('******************************');

newBoard.fillMatrix(5)
showBoard(newBoard);

pseudoClick();








 



// console.log(pos);



