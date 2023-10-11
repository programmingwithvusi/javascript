// If..else if..else stamtent control flow ======================
// Hour
// If hours is bettwen 6am to 12pm display Good morning
// If hours is between 12pm to 6pm, display Good afternoon
// Otherwise display Good evening.

let hour = 10;
if(hour >= 6 && hour < 12)
{
    console.log('Good Morning');
}
else  if(hour >= 12 && hour < 18)
{
    console.log('Good Afternoon');
}
else
{
    console.log('Good evening');
}


// Switch and Case =============================================
// switch (condition){
    // case 'validation'
        // statement(s);
    // break
    // default:
        // statement(s);
//}

let role ='guest';
switch (role)
{
    case 'guest':
        console.log('Guest User');
        break;    

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
}
console.log('=======================================');

// For =======================================================
// poor way of executing the same statement multiple time
/*
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
*/
// good way 
for(let i = 0; i < 5; i++)
    console.log('Hello world', i);