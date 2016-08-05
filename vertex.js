"use strict";
var utils_1 = require('./utils');
var Vertex = (function () {
    function Vertex(options) {
        if (options === void 0) { options = {}; }
        this.value = {};
        this.edges = [];
        utils_1["default"](this, options);
    }
    Vertex.prototype.getLabel = function () {
        return this.label;
    };
    Vertex.prototype.getValue = function () {
        return this.value;
    };
    Vertex.prototype.getEdges = function () {
        // Clone the array
        return this.edges.slice();
    };
    Vertex.prototype.addEdge = function (toLabel, weight) {
        this.edges.push({
            toLabel: toLabel,
            weight: weight
        });
    };
    return Vertex;
}());
exports.Vertex = Vertex;
exports.__esModule = true;
exports["default"] = Vertex;
