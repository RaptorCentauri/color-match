import createMatrix from './createMatrix'
import fillMatrix from './fillMatrix'
import getValue from './getValue'
import getNeighbors from './getNeighbors'
import deleteValue from './deleteValue'

var inquirer = require('inquirer');


let toBeDestroyed = new Set();

let alreadyChecked = new Set()

let playChain = (arr, pos) => {
    let targetValue = arr.getValue(pos);
    console.log('running playChain');

    if (alreadyChecked.has(targetValue.id)){
        console.log('giraffe');
    }
    else{
        console.log('ELSE tbd-values: ', toBeDestroyed.values());

        
        let loopSet = []
        alreadyChecked.add(targetValue.id)
        toBeDestroyed.add(targetValue.id);

        //getNeighbors
        let targetNeighbors = arr.getNeighbors(pos);

        for (const [key, value] of targetNeighbors) {
            if(value.val === targetValue.val){
                loopSet.push({id: value.id, pos: key})
            }
        }

        loopSet.forEach((item)=>{
            if(!alreadyChecked.has(item.id)){
                playChain(arr, item.pos);
            }
        })
    }
}





let pseudoClick = (arr) => {
    inquirer.prompt([{type: 'input', name: 'row'},{type: 'input', name: 'col'}]).then(answers => {
        let targetPos ={}
        targetPos.row = parseInt(answers.row);
        targetPos.col = parseInt(answers.col);
        let chain = playChain(arr, targetPos);
    });
}



let myBoard = [
[ {id:0, val:1}, {id:1, val:1}, {id:2, val:0}, {id:3, val:1}, {id:4, val:1} ],
[ {id:5, val:1}, {id:6, val:1}, {id:7, val:0}, {id:8, val:1}, {id:9, val:1} ],
[ {id:10, val:0}, {id:11, val:0}, {id:12, val:0}, {id:13, val:0}, {id:14, val:0} ],
[ {id:15, val:1}, {id:16, val:1}, {id:17, val:0}, {id:18, val:1}, {id:19, val:1} ],
[ {id:20, val:1}, {id: 21, val:1}, {id:22, val:0}, {id:23, val:1}, {id:24, val:1} ],
]

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
// console.log('******************************');

// newBoard.fillMatrix(5)
showBoard(myBoard);

pseudoClick(myBoard);







// console.log(`Start of Function: Row: ${pos.row}, Col: ${pos.col}`);
// console.log('================================');
// console.log('alreadyValuesLength', alreadyChecked.length);
// console.log('tbd', toBeDestroyed.size);
// console.log('================================');
 



// console.log(pos);



