 
 // Bitwise operator============================================
 // Computer science - deep diver later.
 
 // 1 = 00000001
 // 2 = 00000010
 // 3 = 00000011
 // 0 = 00000000
 
 console.log(1 | 2) // Bitwise OR 
 console.log(1 & 2) // Bitwise AND

 // Read        Write       Execute
 // 00000100    00000110    00000111

 const readPermission = 4;
 const writePermission = 2;
 const executePermission = 1;

 let myPermission = 0;
 myPermission = myPermission  | writePermission;
 //console.log(myPermission);

let message = (myPermission & readPermission) ? 'Yes' : 'No';

console.log(message);