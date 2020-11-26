"use strict";
exports.__esModule = true;
var React = require("react");
require("./Gameboard.scss");
var Square_1 = require("../Square/Square");
var contextAndProvider_1 = require("../../contextAndProvider");
var Gameboard = function () {
    var board = React.useContext(contextAndProvider_1.AppContext).board;
    return (React.createElement("game-board", { "class": "board-size-" + Math.sqrt(board.size) }, board.keysAsArray.map(function (i) {
        //@ts-ignore
        return React.createElement(Square_1["default"], { key: i, id: i, value: board.getValueOfID(i) });
    })));
};
exports["default"] = Gameboard;
