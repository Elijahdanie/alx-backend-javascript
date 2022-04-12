export default function updateStudentGradeByCity(students, city, grade) {
  return students
    .filter((x) => x.location === city)
    .map((value) => {
      const temp = value;
      grade.forEach((x) => {
        temp.grade = x.studentId === temp.id ? x.grade : 'N/A';
      });
      return temp;
    });
}
