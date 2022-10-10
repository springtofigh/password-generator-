// //VARIABLES
const button = document.getElementById("copybtn");
const generat = document.querySelector(".big-btn");

// GENERATING RANDOM NUMBER , SYMBOL , UPPER AND LOWER CASE LETTERS WITH Charcode
function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
    const symbols = "!@#$%^&*{}[]/,.<>";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
    lower:randomLower,
    upper: randomUpper,
    number: randomNumber,
    symbol: randomSymbol,
};

// EVENT LISTNERE FOR GENERATE BUTTON
generat.addEventListener("click" , () => {
    const length = document.getElementById("passwordlength").value;
    const isUpper = document.getElementById("uppercase").checked;
    const isLower = document.getElementById("lowercase").checked;
    const isNumber = document.getElementById("numbers").checked;
    const isSymbol = document.getElementById("symbols").checked;
    const result = document.getElementById("passwordresult");
    result.innerText = generatePassword(isLower , isUpper , isNumber , isSymbol , length);
})

// GENERATE PASSWORD FUNCTION
function generatePassword(lower , upper , number , symbol , length) {
    let generatedPassword = "";
    const typesCount = lower +  upper + number + symbol ;
    const typesArr = [{lower} , {upper} , {number} , {symbol}].filter(
        (item) => Object.values(item)[0]
    );
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach((type) => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

// COPY TO CLIPBOARD FUNCTION
button.addEventListener("click" , (event) => {
    event.preventDefault();
    document.execCommand (
        "copy",
        false,
        document.getElementById("passwordresult").select()
);
});