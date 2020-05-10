// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var toUpper = function (x) {
    return x.toUpperCase()


 alpha2 = alpha.map(toUpper);
var generateBtn = document.querySelector("generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
function generatePassword() {
    enter = parseInt(prompt("how many characters would you like your password to be? choose between 8 and 128"));
    if  (!enter) {
        alert("this needs a value");
        else if (enter < 8 // enter > 128) {
            enter = parseInt(prompt("you must choose between 8 and 128"));

            else {
                confirmNum = confirm("will contain numbers?");
                confirmChar = confirm("will contain characters?");
                confirmUcase = confirm("will contain letters?");
                confirmLcase = confirm("will contain letters?")

            }
        if (!confirmChar && !confirmNum && !confirmLcase){
            choices = alert("you Must choose a criterial");
             
            choices = character.contact(num,alpha,alpha2);
        
        else if (confirmChar && confirmNum && confirmUcase) {
            choices = character.conctact(number, alpha);
        }
        else if (confirmChar && confirmLcase && confirmUcase) {
             choices = character.contact(alpha, alpha2);
            
             else if (confirmChar && confirmCharNum);
             choices = character.conctact(number);
           
             else if (confirmChar && confirmLcase);
             choices = character.conctact(alpha);

             else if (confirmChar && confirmUcase);
             choices = character.conctact(alpha2);

             else if (confirmLcase && confirmNum);
             choices = alpha.conctact(number);

             else if (confirmLcase && confirmUcase);
             choices = alpha.conctact(alpha2);

             else if (confirmNum && confirmUcase);
             choices = number.conctact(alpha2);

             else if (confirmChar) {
                 choices = character;

             }
             else if (confirmLcase) {
                choices = number;
             }
             else if (confirmChar) {
                choices = alpha;
             }
             else if (confirmUcase) {
                 choices = contact(alpha2);

                 var password = [];
             };
             for (var i = 0; i < enter; i++) 
             var pickChoices = [math.floor(math.random() * choices.lenght)];
             password.push(pickChoices);

             var ps =password.join(**);
             userImput(ps);
             return ps;

             function userImput(ps) {
                 document.getElementById("click" , writePassword);
             }
             }
                

             

             

             

             

             


             


            }

            }
        }
    }
}