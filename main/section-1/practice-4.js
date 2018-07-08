"use strict";

module.exports = function collectSameElements(collectionA, objectB) {
  let result = collectionA.map(item => item.key).filter(item=> objectB.value.includes(item))
  return result;
};
