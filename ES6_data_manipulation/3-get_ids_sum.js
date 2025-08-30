export default function getStudentIdsSum(students) {
  return Array.isArray(students)
    ? students.reduce((sum, { id }) => sum + id, 0)
    : 0;
}
