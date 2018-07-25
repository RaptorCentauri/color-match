import createMatrix from './createMatrix'
import fillMatrix from './fillMatrix'
import getValue from './getValue'
import getNeighbors from './getNeighbors'
import deleteValue from './deleteValue'

var inquirer = require('inquirer');


let toBeDestroyed = new Set();

let alreadyChecked = new Set();

let playChain = (arr, pos) => {
    //has it been evaluated
    if (alreadyChecked.has(pos)){
        console.log('tbd-size: ', toBeDestroyed.size);
        // return 'function is over'
    }
    else{
        console.log('look for pie!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        
                        //set of all items to be destroyed;
                        toBeDestroyed.add(pos);
                        let loopSet = new Set()
                        // loopSet.clear()

                        let targetValue = arr.getValue(pos);

                        //getNeighbors
                        let targetNeighbors = arr.getNeighbors(pos);

                        //store the fact that we got neighbors
                        alreadyChecked.add(pos)

                        
                        //if any neighbor has targetValue, put it in the toBeDestroyed set and a local loopSet
                        for (const [newPos, value] of targetNeighbors) {
                            if (value === targetValue) {
                                toBeDestroyed.add(newPos);
                                loopSet.add(newPos);
                            }
                        }

                        //go over the local loopSet
                        if(loopSet.size > 0) {
                            console.log('running a loop!');
                            loopSet.forEach((item)=>{
                                console.log('loop log');
                                if(!alreadyChecked.has(item)){
                                    console.log(`playChain(${item.row}, ${item.col}) `);
                                    // console.log(item);
                                    
                                    playChain(arr, item);
                                }
                            })
                        }
             
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

        // console.log('chain', chain);
        
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



