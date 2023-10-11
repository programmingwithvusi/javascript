// Price Range Object

let priceRange = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 1, maxPerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
]

let restaurants = [
    {averagePerPerson: 10} 

]
bookings();
function bookings() {
    for (let booking of restaurants) {
        if(booking.averagePerPerson >= 1 && booking.averagePerPerson <= 10)
            console.log(priceRange[0]);
        if(booking.averagePerPerson  >= 11 && booking.averagePerPerson <= 20)
           console.log(priceRange[1]);
        if(booking.averagePerPerson  >= 21 && booking.averagePerPerson  <= 50)
            console.log(priceRange[2]);
    }
}

function anotherBookings() {
    let book = '';
    for (const booking of restaurants) {
         book = booking.averagePerPerson <= 10
        ? priceRange[0]
        : booking.averagePerPerson <= 20 
        ? priceRange[1]
        : booking.averagePerPerson <= 50 
        ? priceRange[2]
        : 0;
    }
    return book;
}
console.log(anotherBookings());