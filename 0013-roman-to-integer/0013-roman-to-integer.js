/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;
    for(let i = 0; i < s.length; i++){
        let currentNumeral = s[i];
        let nextNumeral = s[i + 1];
        if(roman[currentNumeral] < roman[nextNumeral] ){
            result += roman[nextNumeral] - roman[currentNumeral];
            i+=1;
        } else {
            result += roman[currentNumeral];
        }
    }
    return result;
};