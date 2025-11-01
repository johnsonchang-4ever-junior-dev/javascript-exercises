const reverseString = (string) => {
    // or use 
    // s.split("").reverse().join("");
    // .split("") split into array
    // .reverse() reverse array
    // .join("") combine an array .join() does not change the array — it returns a new string.
    if(string.length === 0) return string;
    let characters = []
    for(let i = (string.length - 1); i >= 0; i--){
        characters.push(string[i]);
    }

    return characters.join("");

};

// let outcome = reverseString("abc");

// console.log(outcome);

// Do not edit below this line
module.exports = reverseString;
