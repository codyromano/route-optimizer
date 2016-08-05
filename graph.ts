import extend from './utils';
import {VerticesMapType, Vertex} from './vertex';

class Graph {
  private vertices: VerticesMapType;

  constructor(options = {}) {
    extend(this, options);
  }

  getVertices() {
    // Clone object
    return extend({}, this.vertices);
  }

  addVertex(vertex: Vertex) {
    this.vertices[vertex.getLabel()] = vertex;
  }
}

export {Graph};