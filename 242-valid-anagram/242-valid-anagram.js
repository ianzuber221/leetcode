/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // //check if strings are same size if not return false
    // if(s.length !== t.length) return false;
    // // iterate through s put into hash table
    // let hash = {};
    // for(const letter of s){
    //     !hash[letter] ? hash[letter] = 1 : hash[letter]++
    // }
    // // iterate through t check hash table
    // for (const letter of t){
    //     if(!hash[letter]){
    //         return false;
    //     }
    //     hash[letter]--;
    // }
    // // if letter is not in hash table return false
    // //check hash table for values that arent 0 and if found return false
    // for(const key in hash){
    //     if(hash[key] !== 0) return false;
    // }
    // //else return true
    // return true;
    if(s.length !== t.length) return false;
    const hash = {};
    for(const letter of s){
        !hash[letter]? hash[letter] = 1: hash[letter]++
    }
    for(const letter of t){
        if(!hash[letter]) { 
            return false
        }else {hash[letter]--}
        
        if(hash[letter] < 0) return false;
    }
        return true;
};