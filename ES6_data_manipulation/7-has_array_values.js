// 7-has_array_values.js
function hasValuesFromArray(set, array) {
  return array.every(item => set.has(item));
}

export default hasValuesFromArray;
