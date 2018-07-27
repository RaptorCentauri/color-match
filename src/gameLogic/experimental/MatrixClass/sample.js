import Matrix from './Matrix'

let myMatrix = new Matrix(25);


let rando = () => Math.floor(Math.random()*5)

myMatrix.fillEmptyValues(rando);

console.log(Object.getOwnPropertyNames(myMatrix).length);

console.log(myMatrix.map);

myMatrix.displayPretty()