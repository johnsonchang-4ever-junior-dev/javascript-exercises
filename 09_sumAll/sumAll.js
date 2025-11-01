const sumAll = (num_1, num_2) => {

    if( ! Number.isInteger(num_1) || !Number.isInteger(num_2) ) {
        return "ERROR";
    }
    if(num_1 < 0 || num_2 < 0){
        return "ERROR";
    }
    
    if (num_1 > num_2){
        let num = num_1;
        num_1 = num_2;
        num_2 = num;
    }


    let sum = 0;
    for (let i = num_1; i <= num_2; i++){
        sum += i
    }
    return sum;
};

// console.log(sumAll(10, "90"));

// Do not edit below this line
module.exports = sumAll;
