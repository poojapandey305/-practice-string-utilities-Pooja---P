const stringUtils = require('./stringUtils');
//________________________________________
////Test: capitalize(str)
console.log(stringUtils.capitalize('pooja'));     // Output: Pooja
console.log(stringUtils.capitalize('pandey'));          // Output: Pandey
console.log(stringUtils.capitalize(123));         // Output: (empty string)
//This checks how the capitalize function behaves with a regular word, an empty string, and a non-string value.
//________________________________________
//Test: reverse(str)
// testing the reverse function with normal strings and invalid input.S
console.log(stringUtils.reverse('pooja'));        // Output:ajoop
console.log(stringUtils.reverse('JavaScript'));   // Output: tpircSavaJ
console.log(stringUtils.reverse(12345));          // Output: (empty string)
//________________________________________
//Test: contains(str, substr)
//testing whether the main string contains the smaller string and handles non-string inputs correctly.

console.log(stringUtils.contains('hello world', 'world')); // Output: true
console.log(stringUtils.contains('hello world', 'bye'));   // Output: false
console.log(stringUtils.contains('hello', 123));           // Output: false

