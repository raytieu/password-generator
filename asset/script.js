// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt for password
do {
var pwLength = parseInt(prompt("Select a character length for your password, between 8 and 128: "));
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert("Please select an appropriate character length.");
  }
}
while (pwLength < 8 || pwLength > 128 || isNaN(pwLength));

// Confirm which type of characters to include in password
var pwLowercase = confirm("Would you like lowercase letters in your password?");
var pwUppercase = confirm("Would you like uppercase letters in your password?");
var pwNumeric = confirm("Would you like numeric characters in your password?");
var pwSpecial = confirm("Would you like special characters (e.g. !@#$) in your password?");

alert("Click on Generate Password to get your random password!");

// Create array of possible characters in password
var charArray = [];
if (pwLowercase) {
  charArray.push("abcdefghijklmnopqrstuvwxyz");
}
if (pwUppercase) {
  charArray.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
}
if (pwNumeric) {
  charArray.push("1234567890");
}
if (pwSpecial) {
  charArray.push(" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
}

charArray = (charArray.join(''));

// Create a random password using user-confirmed characters in charArray
var pwRandom = [];

for (var i = 0; i < pwLength; i++) {
  pwRandom.push(charArray.charAt(Math.floor(Math.random() * charArray.length)));
}

pwRandom = (pwRandom.join(''));

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = pwRandom;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
