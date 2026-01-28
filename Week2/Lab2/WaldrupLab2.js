// Question 1 - How many vowels?
// Write code that counts the number of vowels 
// in a string. +1 bonus points if you ask for
// the string from the user
// var sentence = "How many vowels do you think are in this one?";
// generate user prompt
var sentence = prompt("Enter a sentence:");

// How to ask for a vowel count? Need a selection tool that finds instances of a,e,i,o,u in variable sentence 
var vowels = "aeiouAEIOU"; //find var vowels in var sentence
var count = 0; //set count to 0
//Set up for loop to count vowels in sentence
for (var i = 0; i < sentence.length; i++) {
  if (vowels.includes(sentence[i])) {
    count++;
  }
}
// Output the result
console.log("Number of vowels in the sentence: " + count);