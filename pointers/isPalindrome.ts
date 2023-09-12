// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


const isPalindrome = (str: string) => {
    // remove all non alaphanumenrice charecters and white spaces
    const array = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '').replace(/\s/g, '').split(''); 
    return array.join() === array.reverse().join();
}


// test 1 
console.log(isPalindrome('A man, a plan, a canal: Panama'));


// test 2
console.log(isPalindrome('race a car'));