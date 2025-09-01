export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];

  const gradeById = Array.isArray(newGrades)
    ? newGrades.reduce((acc, { studentId, grade }) => {
        acc[studentId] = grade;
        return acc;
      }, {})
    : {};

  return students
    .filter((s) => s.location === city)
    .map((s) => ({
      ...s,
      grade: Object.prototype.hasOwnProperty.call(gradeById, s.id)
        ? gradeById[s.id]
        : 'N/A',
    }));
}
