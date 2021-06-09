const characterRange = document.getElementById('slider-range');
const characterUppercase = document.getElementById('uppercase');
const characterSymbols = document.getElementById('symbols');
const characterNumbers = document.getElementById('numbers');
const passwordDisplay = document.getElementById("passwordDisplay");
// copy to clipboard
const copyClipboard = document.getElementById("CopyToClipBoard");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

document.getElementById("generate-password").addEventListener("click", e => {
  e.preventDefault();
  let characters = lowercase;
    const characterAmount = characterRange.value;
    characterUppercase.checked ? (characters += uppercase) : "";
    characterSymbols.checked ? (characters += symbols) : "";
    characterNumbers.checked ? (characters += numbers) : "";
    const password = generatePassword(characterAmount, characters);

    passwordDisplay.innerText = password;
  });


const generatePassword = (lenght, characters) => {
  let password = "";
  for (let i = 0; i < lenght; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

copyClipboard.addEventListener("click", () => {
  passwordDisplay.select();
  document.execCommand("CopyToClipBoard");
  alert("Password Copied!");

})
