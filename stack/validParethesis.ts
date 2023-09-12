// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

const isValid  = (str: string): boolean => {
    const closeBracketmaps = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    const stack:string[] = [];
    const array = str.split("");

    array.forEach((element) => {
        if (element in closeBracketmaps) {
            const lastStackElement = stack.pop();
            if (closeBracketmaps[element] !== lastStackElement) {
                return false;
            }
        } else {
            stack.push(element);
        }
    });
    return true;
}

console.log(isValid("()[]{}"));
