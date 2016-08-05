import extend from './utils';
import {VerticesMapType, Vertex} from './vertex';

class Graph {
  private vertices: VerticesMapType;

  constructor(options = {}) {
    extend(this, options);
  }

  addVertex(vertex: Vertex) {
    this.vertices[vertex.getLabel()] = vertex;
  }
}

export default Graph;