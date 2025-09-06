function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return 'Invalid';
    }
    const surCharge = fare * (20 / 100);
    const extraServiceCharge = 30;
    const fine = fare + surCharge + extraServiceCharge;
    return fine;
}

function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return "Invalid";
    }
    const character = str.split(' ').join('').toUpperCase();
    return character;

}

function bestTeam(player1, player2) {
    if (typeof player1 !== 'object' || typeof player2 !== 'object' || Array.isArray(player1) === true || Array.isArray(player2) === true) {
        return 'Invalid';
    }
    const fairPoint1 = player1.foul + player1.cardY + player1.cardR;
    const fairPoint2 = player2.foul + player2.cardY + player2.cardR;
    if (fairPoint1 > fairPoint2) {
        return player2.name;
    }
    else if (fairPoint1 < fairPoint2) {
        return player1.name;
    }
    else {
        return "Tie";
    }
}

function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || Array.isArray(arr2) === false) {
        return 'Invalid';
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

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
    const averageMark = subjectCount === 0 ? 0 : Math.round(totalMarks / subjectCount);
    const studentResult = {};
    studentResult.finalScore = averageMark;
    studentResult.pass = passSubjectCount;
    studentResult.fail = failSubjectCount;
    return studentResult;
}