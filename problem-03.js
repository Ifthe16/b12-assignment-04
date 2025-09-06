/* Problem-03 */
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

const team1 = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 };
const team2 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 };
const team = bestTeam(team1, team2);
console.log(team);