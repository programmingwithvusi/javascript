// Dynamic nature of Objects.

const circle = {
  radius: 1,
};

// circle = {}; Uncaught TypeError: Assignment to constant variable.
// Cannot re-assign const variable but we can always change (circle)
// objects by adding or delete/remiving properties.

// adding operator method
circle.color = "yellow";
circle.draw = function () {};

// delete operator metgod
delete circle.color;
delete circle.draw;

console.log(circle);
