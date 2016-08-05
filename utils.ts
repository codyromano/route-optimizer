let Utils: any = {};

function extend(objA: any, objB: any) {
  return (<any>Object).assign(objA, objB);
};

Utils.extend = extend;
export {extend};
export default Utils;