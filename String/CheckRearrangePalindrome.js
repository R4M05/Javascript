/**
  * What is a palindrome? https://en.wikipedia.org/wiki/Palindrome
  * Receives a string and returns whether it can be rearranged to become a palindrome or not
  * The string can only be a palindrome if the count of ALL characters is even or if the ONLY ONE character count is odd
  * Input is a string
  *
  **/

const checkString = (str) => {
  // check that input is a string
  if (typeof str !== 'string') {
  return 'Not a string'
  }
}

const checkEmpty = (str) => {
  // Check if is a empty string
  if (str.length === 0) {
  return 'Empty string'
  }
}

const isPalindrome = (str) => {
  // First obtain the character count for each character in the string and store it in an object.
  // Filter the object's values to only the odd character counts.
  const charCounts = [...str].reduce((counts, char) => {
    counts[char] = counts[char] ? counts[char] + 1 : 1
    return counts
  }, {})
  // If the length of the resulting array is 0 or 1, the string can be a palindrome.
  return Object.values(charCounts).filter(count => count % 2 !== 0).length <= 1
}

const palindromeRearranging = (str) => {
  // check that input is a string
  checkString(str);
  // Check if is a empty string
  checkEmpty(str);
  return isPalindrome(str);
}

// testing
console.log(palindromeRearranging('sopapos')) // true
console.log(palindromeRearranging('reviver')) // true
console.log(palindromeRearranging('arara')) // true
console.log(palindromeRearranging('leve')) // false
