const numberOfSquares = 25;
const numberOfValues = 7;
const randomValues = () => Math.floor((Math.random() * (numberOfValues - 1)) + 1);
// const globals = {
//     numberOfSquares: 25,
//     numberOfValues: 7,

// }

// export default globals
export {numberOfValues, numberOfSquares, randomValues}