"use strict";
exports.__esModule = true;
var resetBoard = function (board, value) {
    var reset = {
        board: board
    };
    var genRandNum = function () { return Math.floor((Math.random() * (value - 1)) + 1); };
    board.resetMatrix();
    board.fillEmptyValues(genRandNum);
    return reset;
};
exports["default"] = resetBoard;
