import extend from './utils';

interface PlaceType {
  name: string;
  coords: [number, number];
}

class Place {
  constructor(options = {}) {
    extend(this, options);
  }
}

export {PlaceType, Place};
export default Place;