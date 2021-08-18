function countingCharacters(string, characterToFind) {
  let charCount = 0;
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === characterToFind) {
      charCount++;
    }
  }

  console.log(`String to search in: ${string}`);
  console.log(`Character to find: ${characterToFind}`);
  console.log(`Number of times the character appears: ${charCount}`);
}

function countingCharacters3(string, search) {
  let searchCount = 0;
  for (let i = 0; i <= string.length - search.length; i++) {
    if (string.substring(i, i + search.length) === search) {
      searchCount++;
    }
  }

  return searchCount;
}
