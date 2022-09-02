/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase()
    s = s.replace(/[^A-Za-z0-9]/g, "")
    let point1 = 0;
    let point2 = s.length - 1
    while(point1 <= point2){
        if(s[point1] !== s[point2]){
            return false;
        }
        point1++;
        point2--;
    }
    return true
};