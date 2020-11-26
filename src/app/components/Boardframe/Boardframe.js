"use strict";
exports.__esModule = true;
var React = require("react");
require("./Boardframe.scss");
var contextAndProvider_1 = require("../../contextAndProvider");
var __1 = require("../");
var Boardframe = function (props) {
    var gameover = React.useContext(contextAndProvider_1.AppContext).gameover;
    return (React.createElement("board-frame", null,
        gameover && React.createElement(__1.Gameover, null),
        props.children));
};
exports["default"] = Boardframe;
