const basicAddress = {
    Street: '12 Hawston Rroad, Freeway Park, Boksburg',
    City: 'Johannesburg',
    PostalCode: 1459
}  


// Factory function

const addrss = { Street: '12 Hawston Rroad, Freeway Park, Boksburg', City: 'Johannesburg', PostalCode: 1459};

const address = createAddress(addrss);
console.log(address);

function createAddress(address) {
    return {
       address
    }
}


// Constructor function
const another = new AnotherAddress('12 Hawston Road, Freeway Park, Boksburg', 'Johannesburg', 1459);
console.log(another);

function AnotherAddress(street, city, zipcode) {
    this.street =street,
    this.city = city,
    this.zipcode = zipcode
} 

const test = new AnotherAddress('a','b', 'c');
console.log(test);

// Mosh Solution
// Factory function

let street = anotherAddress('d','t','y');
console.log(street);

function anotherAddress(street, city, zipCode) {
    return {
       street,
       city,
       zipCode
    }
}

// Constructor function -> uses pascal notations
let constructorAddress = new Address('T','Y', 'P');
console.log(constructorAddress);
function Address(street, city, zipCode) {  
       this.street = street,
       this.city= city,
       this.zipCode = zipCode
}

