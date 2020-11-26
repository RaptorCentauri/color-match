"use strict";
exports.__esModule = true;
var React = require("react");
var react_dom_1 = require("react-dom");
require("./index.scss");
var contextAndProvider_1 = require("./contextAndProvider");
var components_1 = require("./components");
var App = function (props) {
    return (React.createElement(contextAndProvider_1.AppProvider, null,
        React.createElement("color-match", null,
            React.createElement(components_1.Titlebar, null),
            React.createElement(components_1.Boardframe, null,
                React.createElement(components_1.Gameboard, null)))));
};
react_dom_1.render(React.createElement(App, null), window.document.getElementById('root'));
