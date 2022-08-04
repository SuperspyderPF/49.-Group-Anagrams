/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// we need to iterate through the array and look for anagrams
var groupAnagrams = function(strs) {
    
    // first create a hash table 
    let hash = {};
    
    
    //iteration 
for (let test of strs){
    //check if anagram
        let angram = test.split('').sort().join('');
    // now use hash table to check for the group anagrams 
        if(hash[angram]) {
            hash[angram].push(test);
        } else {
            hash[angram] = [test];
        }
    }
return Object.values(hash);
    
};

//time O(n)
//space O(n)