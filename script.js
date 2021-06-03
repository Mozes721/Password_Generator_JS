// Form
const form = document.getElementById('passwordGeneratorForm');
// get all input types 

const characterRange = document.getElementById('slider-range');
const characterUppercase = document.getElementById('uppercase');
const characterLowercase = document.getElementById('lowercase');
const characterSymbols = document.getElementById('symbols');
const characterNumbers = document.getElementById('numbers');
const passwordDisplay = document.getElementById("passwordDisplay");

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

form.addEventListener('submit', e => {
    e.preventDefault();

    const characterLenght = characterRange.value;
    const includeUppercase = characterUppercase.checked;
    const includeLowercase = characterLowercase.checked;
    const includeSymbols = characterSymbols.checked;
    const includeNumbers = characterNumbers.checked;
    const password = generatePassword(characterLenght, includeUppercase, includeLowercase, includeSymbols, includeNumbers);
    
    passwordDisplay.innerText = password;
})

function generatePassword(characterLenght, includeUppercase, includeLowercase, includeSymbols, includeNumbers) {
    let charPassword = LOWERCASE_CHAR_CODES
    // if (includeLowercase) charPassword = charPassword.concat(lowercase)
    if (includeUppercase) charPassword = charPassword.concat(uppercase)
    if (includeSymbols) charPassword = charPassword.concat(symbols)
    if (includeNumbers) charPassword = charPassword.concat(numbers)

    const passwordCharacters = []
    for (let i = 0; i < characterLenght; i++) {
        const caracterCode = charPassword[Math.floor(Math.random() * characterLenght.length)]
        passwordCharacters.push(String.fromCharCode(caracterCode))
    
    // alert(caracterCode);
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}
