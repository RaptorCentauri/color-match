import Matrix from './Matrix'

let myMatrix = new Matrix(25);


let rando = () => Math.floor(Math.random()*5)

myMatrix.fillEmptyValues(rando);

// console.log(Object.getOwnPropertyNames(myMatrix));


myMatrix.displayPretty()


console.log(myMatrix.northEdge);
console.log(myMatrix.southEdge);
console.log(myMatrix.eastEdge);
console.log(myMatrix.westEdge);

