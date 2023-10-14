
let address1 = new Address('T','Y', 'P');
let address2 = new Address('T','Y', 'P');
let address3 = address1; // passing a copy of address1 or address2 to address3 we create the same reference in memory location
// therefore object are the same becas=use they reference the location in memory.

// Constructor function 
// uses pascal notations for naming constructors
function Address(street, city, zipCode) {  
       this.street = street,
       this.city= city,
       this.zipCode = zipCode
}

//console.log(areEqual(address1, address2));

function areEqual(address1, address2) {
    // Mosh solution seem tobe the ideal. But i.m sure there's different ways (to investigate)
    //return (Object.keys(address1) === Object.keys(address2));
    return address1.city === address2.city &&
    address1.street === address2.street &&
    address1.zipCode === address2.zipCode 
}

//console.log(areSame(address1, address2))
function areSame(address1, address2) {
    return Object.keys(address1).toString() === Object.keys(address2).toString();
    //return address1 === address2;
}

// Mosh solution

//console.log(anotherAreEqaul(address1, address2));

function anotherAreEqaul(address1, address2) {
return address1.city === address2.city &&
address1.street === address2.street &&
address1.zipCode === address2.zipCode 
}


console.log(anotherAreSame(address2, address1));
// both obects are pointing to different memory lacation therefore not the same (false)
function anotherAreSame(address1, address2) {
    return address1 === address2;
}