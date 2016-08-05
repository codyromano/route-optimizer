import extend from './utils';
import {VerticiesMapType, Vertex} from './vertex';

class Graph {
  vertices: VerticiesMapType;

  constructor(options = {}) {
    extend(this, options);
  }
}

export default Graph;