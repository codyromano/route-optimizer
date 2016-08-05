import extend from './utils';
import {Edge, EdgeType} from './edge';
import {Place} from './place';

interface VertexType {
  label: string;
  value: Place;
  edges: Array<EdgeType>;
}

interface VerticesMapType {
  [label: string] : Vertex;
}

class Vertex {
  private label: string;
  private value: Place = {};
  private edges: Array<EdgeType> = [];

  constructor(options = {}) {
    extend(this, options);
  }

  getLabel() {
    return this.label;
  }
  getValue() {
    return this.value;
  }
  getEdges() {
    // Clone the array
    return [...this.edges];
  }

  addEdge(toLabel: string, weight: number) {
    this.edges.push({
      toLabel,
      weight
    });
  }
}

export {VertexType, VerticesMapType, Vertex};
export default Vertex;