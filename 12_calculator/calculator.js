const add = (num_1, num_2) => {
	return num_1 + num_2;
};

const subtract = (num_1, num_2) => {
	return num_1 - num_2;
};

const sum = (arr) => {
	let acc = 0;
  for( let i = 0; i < arr.length; i ++){
    acc += arr[i];
  }
  return acc;
};

const multiply = (arr) => {
  let multipled = 1;
  for( let i = 0; i < arr.length; i ++){
    multipled *= arr[i];
  }
  return multipled;
};

const power = (num_1, num_2) => {
	let powered = 1;
  for( let i = 0; i < num_2; i ++){
    powered *= num_1;
  }
  return powered;
};

const factorial = (num) => {
	let factor = 1;
  for( let i = 2; i <= num; i ++){
    factor *= i;
  }
  return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
