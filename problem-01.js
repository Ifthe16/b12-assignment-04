/* Problem-01 */
function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return 'Invalid';
    }
    const surCharge = fare * (20 / 100);
    const extraServiceCharge = 30;
    const fine = fare + surCharge + extraServiceCharge;
    return fine;
}

const fine = totalFine(200);
console.log(fine);
