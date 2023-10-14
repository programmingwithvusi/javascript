const Address = {
    Street: '12 Hawston Rroad, Freeway Park, Boksburg',
    City: 'Johannesburg',
    PostalCode: 1459
}

showAddress(Address);
function showAddress(address) {
    for (const key in address) {
    console.log(key, address[key]);
    }
}