const palindromes = (raw) => {

    let inputTxt = raw.toLowerCase().replace(/[^a-z0-9]/g, '')
    let reverseText = inputTxt.split("").reverse().join("");
    return reverseText === inputTxt;
}

// Do not edit below this line
module.exports = palindromes;
