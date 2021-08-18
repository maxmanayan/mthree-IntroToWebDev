var testArray = [0, 1, 1, "1", 3, "311"];

for (var position = 0; position < testArray.length - 1; position++) {
  var currentElement = testArray[position];
  var nextElement = testArray[position + 1];

  console.log(
    `Testing ${currentElement} and ${nextElement} (greater than): ${
      currentElement > nextElement
    }`
  );
  console.log(
    `Testing ${currentElement} and ${nextElement} (less than or equal to): ${
      currentElement <= nextElement
    }`
  );

  if (currentElement == nextElement) {
    console.log(
      `Testing ${currentElement} and ${nextElement} (strictly equal to): ${
        currentElement === nextElement
      }`
    );

    if (currentElement !== nextElement) {
      console.log(`${currentElement} is ${typeof currentElement}`);
      console.log(`${nextElement} is ${typeof nextElement}`);
    }
  } else {
    console.log(
      `Testing ${currentElement} and ${nextElement} (equal to): false`
    );
  }

  console.log("###############################");
}
