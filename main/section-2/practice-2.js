"use strict";

module.exports = function countSameElements(collection) {
  let n = 1,
    m = 0;
  return collection.reduce((allValue, value, index, array) => {
    if (value.includes("-")) {
      let arr = value.split("-");
      allValue[m] = { key: arr[0], count: arr[1] * 1 };
    } else {
      allValue[m] = { key: value, count: n };
      if (array[index] != array[index + 1]) {
        n = 0;
        m++;
      }
      n++;
    }
    return allValue;
  }, []);
};
