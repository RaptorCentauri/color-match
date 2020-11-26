"use strict";
exports.__esModule = true;
var React = require("react");
require("./Square.scss");
var contextAndProvider_1 = require("../../contextAndProvider");
var Square = function (_a) {
    var value = _a.value, id = _a.id;
    var squareClick = React.useContext(contextAndProvider_1.AppContext).squareClick;
    var _b = React.useState('inital'), animateClass = _b[0], setAnimateClass = _b[1];
    React.useEffect(function () {
        value ? setAnimateClass('initial') : setAnimateClass('destroy');
    });
    return (React.createElement("colored-square", { onClick: function () { return squareClick(id); }, "class": "square-color-" + value + " square-animate-" + animateClass }));
};
exports["default"] = Square;
