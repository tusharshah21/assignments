/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var charArray1 = str1.toLowerCase().split("");
  var charArray2 = str2.toLowerCase().split("");

  if (charArray1.length !== charArray2.length) {
    return false;
  }
  var matchWord = charArray1.sort().join("");
  var matchWords = charArray2.sort().join("");
  // console.log(matchWord, matchWords);
  return matchWord === matchWords;
}

// const result = isAnagram("dior", "roid");
// console.log(result);

module.exports = isAnagram;
