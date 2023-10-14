// Function Declaration
function walk(){
    console.log('walk');
  }
  walk();
  
  // Function Expression
  // There's 2 ways we can declare a function expression
  let run = function() {};
  
  // Anonymous Function Expression
  let running = function() {
    console.log('run');
  }
  let move = running;
  running();
  move();
  
  // Named move() Function Expression
  let movement = function move() {
    console.log('moving');
  }
  
  movement();
  