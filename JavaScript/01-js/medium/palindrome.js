/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let l = 0;
    let r = str.length-1;
    while(l<r){
      if(str.charAt(l)!==str.charAt(r)){
        return false;
      }
      l++;
      r--;
    }
    return true;
}

module.exports = isPalindrome;