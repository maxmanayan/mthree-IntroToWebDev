var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];

var sum = 0;

testArray.push(Number(prompt("Enter a number:")));

for (let i = 0; i < testArray.length; i++) {
  sum += testArray[i];
}

console.log(`The sum of ${testArray} is ${sum}`);

var addToArray = [];
var newSum = 0;

for (let i = 0; i < 5; i++) {
  addToArray.push(Number(prompt("Add a number to the new array!")));
}

for (let i = 0; i < addToArray.length; i++) {
  newSum += addToArray[i];
}

console.log(`The sum of ${addToArray} is ${newSum}`);
