// Bitwise operator============================================
// Computer science - deep diver later.

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// 0 = 00000000

console.log(1 | 2); // Bitwise OR {output: 3}
console.log(1 & 2); // Bitwise AND {output: 0}

// Read        Write       Execute
// 00000100    00000110    00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0; // 4 -> read, (4 + 2) = 6 -> readWite, (4+2+1) = 7 -> readWriteExecute
myPermission = myPermission | writePermission;
//console.log(myPermission);

let message = myPermission & readPermission ? "Yes" : "No";

console.log(message);

//function to convert decimail to binary
function decimilToBnary(number) {
  const binary = parseInt(number);
  const result = binary.toString(2);
  return result;
}
for (let i = 0; i <= 10; i++) {
  console.log(i, " 00000" + decimilToBnary(i));
}
