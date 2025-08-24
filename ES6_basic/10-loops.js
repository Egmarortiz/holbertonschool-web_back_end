export default function appendToEachArrayValue(array, appendString) {
  const arrayCreated = [];
  for (const value of array) {
    arrayCreated.push(appendString + value);
  }
  return arrayCreated;
}
