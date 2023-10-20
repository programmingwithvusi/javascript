// Avoid extending Build-in Object.
// Don't modify objects you don't own
Array.prototype.shuffle = function () {
  console.log("shuffle");
};

const array = [];
array.shuffle();
