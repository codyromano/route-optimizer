import extend from './utils';

interface EdgeType {
  toLabel: string;
  weight: number;
}

class Edge {
  toLabel: string;
  weight: number;

  constructor(options = {}) {
    extend(this, options);
  }
}

export {EdgeType, Edge};
export default Edge;