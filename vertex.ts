import extend from './utils';
import {Edge, EdgeType} from './edge';
import {Place} from './place';

interface VertexType {
  label: string;
  value: Place;
  edges: Array<EdgeType>;
}

interface VerticiesMapType {
  [label: string] : Vertex;
}

class Vertex {
  label: string;
  value: Place = {};
  edges: Array<EdgeType> = [];

  constructor(options = {}) {
    extend(this, options);
  }

  addEdge(toLabel: string, weight: number) {
    this.edges.push({
      toLabel,
      weight
    });
  }
}

export {VertexType, VerticiesMapType, Vertex};
export default Vertex;