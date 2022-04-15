export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((acc, item) => acc + item.id, 0);
  }
  return [];
}
