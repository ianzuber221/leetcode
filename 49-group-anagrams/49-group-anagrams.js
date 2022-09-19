/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};
    const result = [];
    strs.forEach((str) => {
        sortStr = str.split('').sort((a,b) => a.charCodeAt() - b.charCodeAt()).join('');
        if(!hash[sortStr]){ 
            hash[sortStr] = [str]
            
        } else{
            hash[sortStr].push(str);
  
        }
    })
    for(let key in hash){
        result.push(hash[key]);
    }
    return result;
};