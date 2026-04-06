// Array methods

let nums: number[] = [10, 20, 30, 40];

let doubled = nums.map(n => n * 2);
let filtered = nums.filter(n => n > 20);
let sum = nums.reduce((acc, val) => acc + val, 0);

console.log(doubled);
console.log(filtered);
console.log(sum);