// Write a function that takes two number and returns the maximum of the two.

let result =  isLandscape(300, 600);

let size = (result) ? "Landscape" : "Portrait";
console.log(size);

function isLandscape (width, height){
    return (width > height);
}

