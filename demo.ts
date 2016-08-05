import {Vertex} from './vertex';
import {Graph} from './graph';

let graph = new Graph();
let getVertexInstance = (place) => new Vertex(place);
let addToGraph = (vertex) => graph.addVertex(vertex);

let places = [
  {label: 'spaceNeedle', coords: [2, 2]},
  {label: 'columbiaTower', coords: [5, 2]},
  {label: 'paramount', coords: [6, 6]}
];

places
  .map(getVertexInstance)
  .forEach(addToGraph);

console.log(graph);
console.assert(Object.keys(graph.getVertices()).length === 3);