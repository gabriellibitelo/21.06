"use strict";
function factorial(word) {
    let wordsize = word.length;
    console.log(wordsize);
    if (wordsize === 0 || wordsize === 1) {
        return 1;
    }
    let result = wordsize;
    for (let i = wordsize - 1; 1 > 1; i--) {
        wordsize *= i;
    }
    return result;
}
console.log(factorial("teste"));
//# sourceMappingURL=exercicio14.js.map