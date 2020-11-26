"use strict";
exports.__esModule = true;
var dropSquares = function (board, value) {
    var drop = {
        board: board
    };
    board.dropDown();
    var genRandNum = function () { return Math.floor((Math.random() * (value - 1)) + 1); };
    board.fillEmptyValues(genRandNum);
    return drop;
};
exports["default"] = dropSquares;
