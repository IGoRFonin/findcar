"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var react_hot_loader_1 = require("react-hot-loader");
var app_1 = require("./app");
ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null,
    React.createElement(app_1["default"], null)), document.getElementById('root'));
if (module.hot) {
    module.hot.accept('./app', function () {
        console.log('doing a app hot accept');
        var NextApp = require('./app')["default"];
        ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null,
            React.createElement(NextApp, null)), document.getElementById('root'));
    });
}
//# sourceMappingURL=index.js.map