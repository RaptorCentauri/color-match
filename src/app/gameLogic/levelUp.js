"use strict";
exports.__esModule = true;
var levelUp = function (score) {
    var level = Math.floor((score / 100));
    return level + 1;
};
exports["default"] = levelUp;
