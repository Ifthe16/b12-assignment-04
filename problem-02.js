/* Problem-02 */
function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return "Invalid";
    }
    const character = str.split(' ').join('').toLocaleUpperCase();
    return character;

}

const character = onlyCharacter(" ha ck m e 1 @ru.c  n  ");
console.log(character);