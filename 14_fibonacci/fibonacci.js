const fibonacci = function(n) {

    if (!Number.isInteger(n)){
        n = parseInt(n)
    }
    
    if (n < 0) return "OOPS";

    if (n <= 1) {
        return n;
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;
