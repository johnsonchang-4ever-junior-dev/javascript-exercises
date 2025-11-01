const findTheOldest = (arr) => {
    const currentYear = new Date().getFullYear()
    arr = arr.sort((a , b) =>  {
        const aDeath = a.yearOfDeath || currentYear;
        const bDeath = b.yearOfDeath || currentYear;

        const aAge = aDeath - a.yearOfBirth;
        const bAge = bDeath - b.yearOfBirth;

        return bAge - aAge;
    });
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
