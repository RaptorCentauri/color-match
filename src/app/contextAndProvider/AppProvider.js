"use strict";
exports.__esModule = true;
var React = require("react");
var matrix_map_1 = require("matrix-map");
var gameLogic = require("../gameLogic/index");
var AppContext_1 = require("./AppContext");
var AppProvider = function (props) {
    var gameBoard = new matrix_map_1["default"](gameLogic.numberOfSquares);
    gameBoard.fillEmptyValues(gameLogic.randomValues);
    var _a = React.useState(gameBoard), board = _a[0], setBoard = _a[1];
    var _b = React.useState(0), score = _b[0], setScore = _b[1];
    var _c = React.useState(1), level = _c[0], setLevel = _c[1];
    var _d = React.useState(false), gameover = _d[0], setGameover = _d[1];
    var _e = React.useState(1), gameRound = _e[0], setGameRound = _e[1];
    var nextLevelCheck = function () {
        var nextLevel = gameLogic.levelUp(score);
        if (nextLevel > level) {
            setLevel(nextLevel);
        }
    };
    var gameOverCheck = function () {
        var isGameover = gameLogic.checkForGameOver(board);
        setGameover(isGameover);
    };
    var playAgain = function () {
        var reset = gameLogic.resetBoard(board, gameLogic.numberOfValues);
        setBoard(reset.board);
        setLevel(1);
        setScore(0);
        setGameover(false);
    };
    var squareClick = function (i) {
        var round = gameLogic.playGame(board, i);
        setBoard(round.board);
        setTimeout(function () {
            var drop = gameLogic.dropSquares(board, gameLogic.numberOfValues);
            setBoard(drop.board);
            setGameRound(gameRound + 1);
        }, 1000 * 0.75);
        setScore(score + round.score);
    };
    React.useEffect(function () {
        nextLevelCheck();
        gameOverCheck();
    });
    return (React.createElement(AppContext_1["default"].Provider, { value: {
            score: score,
            level: level,
            board: board,
            gameover: gameover,
            playAgain: playAgain,
            squareClick: squareClick
        } }, props.children));
};
exports["default"] = AppProvider;
