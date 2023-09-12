
//  Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

const groupAnagram = (strs: string[])  =>{

    const hashMaps = {}

    strs.forEach((str, index) => {
        
        let doesExist = false;
        Object.keys(hashMaps).forEach((key) => {
            if (isAnagram(key, str)) {
                hashMaps[key].push(str);
                doesExist = true
            }
        });

        if (!doesExist) {
            hashMaps[str] = [str];
        }
    });
    return Object.values(hashMaps);

}

const isAnagram = (s: string, t:string) => {
    return s.split("").sort().join() === t.split("").sort().join() 
}

// test one
console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]));

// test two
console.log(groupAnagram([""]));

// test 3 
console.log(groupAnagram(["a"]));