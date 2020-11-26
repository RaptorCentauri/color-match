"use strict";
exports.__esModule = true;
var React = require("react");
require("./Titlebar.scss");
var contextAndProvider_1 = require("../../contextAndProvider");
var Titlebar = function (props) {
    var _a = React.useContext(contextAndProvider_1.AppContext), level = _a.level, score = _a.score;
    return (React.createElement("title-bar", null,
        React.createElement("current-level", null,
            "Level: ",
            level),
        React.createElement("title-name", null, "Color Match"),
        React.createElement("current-score", null,
            "Score: ",
            score)));
};
exports["default"] = Titlebar;
