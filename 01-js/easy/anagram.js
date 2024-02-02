/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // removeing the spaces of converting it into a lower case for better results
  const cleanedStr1=str1.replace(/\s/g, '').toLowerCase();
  const cleanedStr2=str2.replace(/\s/g, '').toLowerCase();
  //checking length of the string 
  if(cleanedStr1.length!==cleanedStr2.length){
    return false
  }
   //sort the array 
   const sortedStr1=cleanedStr1.split('').sort().join('');
   const sortedStr2=cleanedStr2.split('').sort().join('');
    
   return sortedStr1===sortedStr2
  
}

module.exports = isAnagram;
