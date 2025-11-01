const removeFromArray = function(array, ...args) {
    return array.filter((items) => !args.includes(items));
    // use .includes in arr to get true of false
};

// slice: copy a to b // doesn't change original array
// splice: cut a to b // does change the original array
// pop: rm the last item
// shift: rm the 1st item
// .filter filter out the unwanted item

// ...args means:
// “Collect everything passed into this function into a single array named args.”
// console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)) //toEqual([])
// console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3))//toEqual([2, "ho"]);

// Do not edit below this line
module.exports = removeFromArray;
