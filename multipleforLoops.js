let sum = 0;
let total = 0;
for (let i; i < 100; i++) {
  sum = sum + 1;
}
for (let i; i < 200; i++) {
  total = total + 1;
}

console.log(`sum ${sum}`);
console.log(`total ${total}`);

// expected result sum: 100, total: 0
// result sum: 0 , total: 0
