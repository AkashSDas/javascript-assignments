const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// min max
console.log(ages.sort()[0], ages.sort()[ages.length - 1]);

// median
const sum = ages.reduce((a, b) => a + b, 0);
console.log(sum / ages.length);

// average
console.log(sum / ages.length);

// range value
console.log(ages.sort()[ages.length - 1] - ages.sort()[0]);

// last question
const sortedAges = ages.sort();
const median = sortedAges[Math.floor(sortedAges.length / 2)];
const min = sortedAges[0];
const max = sortedAges[sortedAges.length - 1];
const average = sum / ages.length;
console.log(Math.abs(min - average), Math.abs(max - average));
