function reverseString(str) {
  
  let reversed = str.split('').reverse().join('')

  return reversed


}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// first we want to split each character up by adding a space in between, then we want to reverse the order of the characters, then we join them back together to form the reversed string.
