"use strict";
exports.__esModule = true;
var React = require("react");
require("./Gameover.scss");
var contextAndProvider_1 = require("../../contextAndProvider");
var Gameover = function (props) {
    var playAgain = React.useContext(contextAndProvider_1.AppContext).playAgain;
    return (React.createElement("game-over", null,
        "GAME OVER",
        React.createElement("play-again-btn", { onClick: playAgain }, "Play Again?")));
};
exports["default"] = Gameover;
