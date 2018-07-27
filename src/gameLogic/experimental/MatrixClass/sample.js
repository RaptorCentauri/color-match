import Matrix from './Matrix'

let myMatrix = new Matrix(25);


let rando = () => Math.floor(Math.random()*5)

myMatrix.fillEmptyValues(rando);

// console.log(Object.getOwnPropertyNames(myMatrix));


myMatrix.displayPretty()

let moo = myMatrix.getAsItterator()
// console.log('moo', moo);

moo.map(i => console.log('new', i ))