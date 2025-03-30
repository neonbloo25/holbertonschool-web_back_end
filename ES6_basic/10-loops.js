export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (var idx in array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
