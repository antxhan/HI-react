/**
 * TODO write a JavaScript function that takes a string and returns it in revserse order.
 * DO NOT use the built-in reverse() method.
 * Should return the reversed string.
 * For example:
 *   reverseString("hello") should return "olleh"
 *   reverseString("world") should return "dlrow"
 *   reverseString("12345") should return "54321"
 */
function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log(reverseString("12345"));

/**
 * TODO write a JavaScript function that takes a number and returns it in the reverse order.
 * Should return the reversed number.
 * For example:
 *   reverseNumber(12345) should return 54321
 *   reverseNumber(98765) should return 56789
 *   reverseNumber(101010) should return 10101
 */

function reverseNumber(num) {
  let newNum = "";
  num = num.toString();
  for (let i = num.length - 1; i >= 0; i--) {
    newNum += num[i];
  }
  return parseInt(newNum);
}

console.log(reverseNumber(12345));
console.log(reverseNumber(98765));
console.log(reverseNumber(101010));

/**
 * TODO destruct the following object to get name and age.
 */
const person = {
  name: "John",
  info: {
    age: 30,
    city: "New York",
    job: "Developer",
  },
};

const {
  name,
  info: { age },
} = person;
console.log("name:", name, "age:", age);

/**
 * TODO destruct the following array the first and second element, and the remaining elements in a third variable.
 */

const thisArray = ["apple", "banana", "cherry", "dates", "elderberry", "fig"];
const [apple, banana, ...rest] = thisArray;
console.log(apple);
console.log(banana);
console.log(rest);

/**
 * !!!!OPTIONAL!!!!
 * TODO Write a JavaScript function that checks if a string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads * the same forward and backward. For example, "madam" is a palindrome.
 * The function should return true if the string is a palindrome and false if it is not.
 * For example:
 *    isPalindrome("madam") should return true
 *    isPalindrome("hello") should return false
 *    isPalindrome("12321") should return true
 *    isPalindrome("race car") should return true
 *    isPalindrome("coding") should return false
 */

function isPalindrome(string) {
  string = string.replace(" ", "");
  for (let left = 0; left < string.length - 1; left++) {
    let right = string.length - 1 - left;
    if (string[left] === string[right]) {
      if (left === right) {
        return true;
      }
      continue;
    } else {
      return false;
    }
  }
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("12321"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("coding"));