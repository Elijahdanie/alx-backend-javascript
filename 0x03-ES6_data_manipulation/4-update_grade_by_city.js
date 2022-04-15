export default function updateStudentGradeByCity(students, city, gradeArray) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (!Array.isArray(gradeArray)) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const [grade] = gradeArray.filter((x) => x.studentId === student.id);
      return {
        ...student,
        grade: grade ? grade.grade : 'N/A',
      };
    });
}
