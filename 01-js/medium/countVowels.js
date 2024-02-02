/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    // Convert the string to lowercase to handle both uppercase and lowercase vowels
    let lowercase=str.toLowerCase();
    // Define an array of vowels
    let vowels= ['a','e','i','o','u']
        // Initialize a counter for the number of vowels
        let vowelCount=0;
        // Loop through each character in the lowercase string
        for (let i=0;i<lowercase.length;i++){
          if(vowels.includes(lowercase[i])){
            vowelCount++

          }
        }
   return vowelCount;
    
}

module.exports = countVowels;