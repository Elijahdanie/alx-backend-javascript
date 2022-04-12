export default function getStudentsByLocation(students, localtion) {
  return students.map((x) => x.localtion === localtion);
}
