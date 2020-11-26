"use strict";
exports.__esModule = true;
var checkForGameOver = function (board, i) {
    if (i === void 0) { i = 1; }
    do {
        if (board.hasEquivalentNeighbors(i)) {
            return false;
        }
        i++;
    } while (i <= board.size);
    return true;
};
exports["default"] = checkForGameOver;
