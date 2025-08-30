export default function getStudentsIds(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map(ids => ids.id);
}
