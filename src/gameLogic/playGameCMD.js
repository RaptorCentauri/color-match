import createMatrix from './createMatrix'
import fillMatrix from './fillMatrix'
import getValue from './getValue'
import getNeighbors from './getNeighbors'
import deleteValue from './deleteValue'




var inquirer = require('inquirer');

/**
 * playChain() pseudocode
 * 
 * 
 * 
 * 
 * 
 */
// let toBeDestroyed = new Set();

let playChain = (arr, pos) => {
    let toBeDestroyed = new Set();

    toBeDestroyed.add(pos);

    let loopSet = new Set()
    loopSet.clear()

    let targetValue = arr.getValue(pos);

    //getNeighbors
    let targetNeighbors = arr.getNeighbors(pos);
    
    //if any neighbor has targetValue, put it in the toBeDestroyed set
    for (const [newPos, value] of targetNeighbors) {
        if (value === targetValue) {
            toBeDestroyed.add(newPos);
            loopSet.add(newPos);
        }
    }

    console.log('loopSize', loopSet.size);
    

    if(loopSet.size > 0) {    
        loopSet.forEach((item)=>{
            if (!toBeDestroyed.has(item)) {
                console.log('exists', item);
                return playChain(arr, item);
            }
            else{
                console.log('NOT', item);
            }
        })
    }
    else{
        console.log('leaving func!');
        return toBeDestroyed;
    }

}


let pseudoClick = (arr) => {
    inquirer.prompt([{type: 'input', name: 'row'},{type: 'input', name: 'col'}]).then(answers => {
        let targetPos ={}


        targetPos.row = parseInt(answers.row);
        targetPos.col = parseInt(answers.col);

        // let targetValue = newBoard.getValue(targetPos);
        // squarestoKill.add(targetPos)

        // //getNeighbors
        // let targetNeighbors = newBoard.getNeighbors(targetPos);
        
        // playChain(targetNeighbors, squarestoKill, targetValue, newBoard);
        let chain = playChain(arr, targetPos);

        console.log('chain', chain.size);
        
    });
}




let myBoard = [
[ 1, 1, 0, 1, 1 ],
[ 1, 1, 0, 1, 1 ],
[ 0, 0, 0, 0, 0 ],
[ 1, 1, 0, 1, 1 ],
[ 1, 1, 0, 1, 1 ],
]

let showBoard = (arr) => {
    arr.forEach(row => {
        console.log(row);
    });
    console.log('====================================');
}


// let newBoard = createMatrix(5,5);

// console.log('create an empty board');
// console.log('******************************');

// showBoard(newBoard);

// console.log('fill the board');
console.log('******************************');

// newBoard.fillMatrix(5)
showBoard(myBoard);

pseudoClick(myBoard);








 



// console.log(pos);



