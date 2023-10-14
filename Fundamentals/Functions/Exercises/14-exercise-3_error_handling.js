// Error Handling.

try {
  const numbers = [1, 2, 3, 1, 1, 1, 4];

  const count = countOccurences([1, 1, 1, 1, 1, 1], 1);

  console.log(count);
} catch (e) {
  console.log(e.message);
  // alert(e);
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error("Please pass array as first argument.");
  else {
    let items = [...array];
    return items.reduce((accumulator, current) => {
      const occured = current === searchElement ? 1 : 0;
      return accumulator + occured;
    }, 0);
  }
}
