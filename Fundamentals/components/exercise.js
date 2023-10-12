 // Exrcise =====================================================

 let a = 'red';
 let b = 'yellow';

 console.log('currentColor A ', a);
 console.log('currentColr B ',b);
 let c = a;
 a = b;
 b = c;
 //tempColorA = (a || b) ? b : undefined;
 //tempColorB = (b || a) ? a : undefined;
 // a = tempColorA;
 // b = tempColorB;

 console.log('Changed Color A ', a);
 console.log('Changed Color B ', b)