/* Problem-05 */
function resultReport(marks) {
    if (Array.isArray(marks) === false) {
        return "Invalid";
    }
    let totalMarks = 0;
    let passSubjectCount = 0;
    let failSubjectCount = 0;
    for (const mark of marks) {
        if (mark >= 40) {
            passSubjectCount++;
        }
        else {
            failSubjectCount++;
        }
        totalMarks += mark;
    }
    const subjectCount = marks.length;
    const averageMark = subjectCount === 0? 0: Math.round(totalMarks / subjectCount);
    const studentResult = {};
    studentResult.finalScore = averageMark;
    studentResult.pass = passSubjectCount;
    studentResult.fail = failSubjectCount;
    return studentResult;
}

const studentMarks = [];
const result = resultReport(studentMarks);
console.log(result);