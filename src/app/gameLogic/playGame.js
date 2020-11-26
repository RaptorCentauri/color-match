"use strict";
exports.__esModule = true;
var playGame = function (board, i) {
    var round = {
        board: board,
        score: 0
    };
    if (board.getChainFromID(i).size > 1) {
        var value = board.getValueOfID(i);
        round.score = value * board.getChainFromID(i).size;
    }
    board.destroyChainFromID(i);
    return round;
};
exports["default"] = playGame;
