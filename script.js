// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  // copllect data from user of length of password preference
  var characterAmountNumber = parseInt(prompt('How many characters would you like this password to be?'));

  // Validate numbers between 8 to 128
  if ( isNaN(characterAmountNumber) ) {
    prompt('You should type a number. Try it again, please!');
  } else if ( characterAmountNumber < 8 || characterAmountNumber > 128 ) {
    prompt('You should type a number between 8 to 128. Please, Try again!');
  }
// collet choice  of specials characters to be use
  var lowerOpt = confirm('you can use lowercase!');
  var upperOpt = confirm('you can use Uppercase!');
  var specialCharOpt = confirm('you can use special characters!');
  var numbersOpt = confirm('you can use numbers!');

  // Validate at least one special character type should be selected
  if ( specialCharOpt === false && numbersOpt === false && lowerOpt === false &&  upperOpt === false ) {
     alert('At least one special character type should be selected. Try it again!');
  }
 // Characters arrays
  var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var specialCharArr = ['*', '!','.', '?','/',',','@','$','%','&','=','#','+','-',';'];
  var numbersArr = [1,2,3,4,5,6,7,8,9,0];

  var entireOpt = [];

  // Check options chose by user then concat into a new array
  if ( lowerOpt === true ){
    entireOpt = entireOpt.concat(lowerArr);
  }

   if ( specialCharOpt === true ){
    entireOpt = entireOpt.concat(specialCharArr);
  }

  if ( numbersOpt === true) {
    entireOpt = entireOpt.concat(numbersArr);
  }

  // Loop to give us a random number
  let randomPass = '';

  for ( var i = 0; i < characterAmountNumber; i++ ) {
    var randomNum = Math.floor(Math.random() * entireOpt.length);
    randomPass += entireOpt[randomNum];   //randomPass = h + p;
  }
  return randomPass;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
