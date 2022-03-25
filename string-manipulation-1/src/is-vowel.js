/* exported isVowel */
// Create a function with a single character as parameter
// inside the function code block, create a vowels array and assign it the strings
// for each vowel in the alphabet (both lowercase and uppercase)
// return true if the vowels array includes the char, false otherwise

function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return vowels.includes(char);
}
