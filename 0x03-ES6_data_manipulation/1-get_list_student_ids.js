export default function getListStudentIds(students) {
  if (students === Array) {
    return students.map((student) => student.id);
  }
  return [];
}
