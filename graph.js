"use strict";
var utils_1 = require('./utils');
var Graph = (function () {
    function Graph(options) {
        if (options === void 0) { options = {}; }
        utils_1["default"](this, options);
    }
    Graph.prototype.addVertex = function (vertex) {
        this.vertices[vertex.getLabel()] = vertex;
    };
    return Graph;
}());
exports.__esModule = true;
exports["default"] = Graph;
