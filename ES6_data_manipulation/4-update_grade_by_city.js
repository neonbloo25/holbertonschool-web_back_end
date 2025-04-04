// 4-update_grade_by_city.js
function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((g) => g.studentId === student.id);
      student.grade = grade ? grade.grade : 'N/A';
      return student;
    });
}

export default updateStudentGradeByCity;
