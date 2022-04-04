export default function appendToEachArrayValue(array, appendString) {
  var newArray = [];
  for (const idx of array) {
    newArray.push(appendString + idx);
  }

  return array;
}
