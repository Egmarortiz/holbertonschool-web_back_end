export default function hasValuesFromArray(set, arr) {
  return arr.reduce((acc, curr) => acc && set.has(curr), true);
}
