// Exercise 1
// creating two object first HtmlElemt and second is HtmlSelectElement (dropwn element)
// we have prototypical inheritance between HtmlSelectElement and its parent (HtmlElemt).

function HtmlElement() {
  this.click = function () {
    console.log("Clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("Focused");
};

const e = new HtmlElement();
// correction passing an argument assigned a defaul empty array
function HtmlSelectElement(items = []) {
  // OR
  // this.items = items || []
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
    //console.log("Add Item");
  };

  this.removeItem = function (item) {
    // this.items.pop(item);
    // OR
    this.items.splice(this.items.indexOf(item), 1);
    //console.log("Remove item");
  };
}

// missing the new keyword to assign prarent properties and functions to the child prototype object.
//HtmlSelectElement.prototype.constructor = HtmlElement;

// correction adding new keyword, this assign properties and functions to child object
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement();
s.addItem("1");
s.addItem("2");
s.addItem("3");
console.log(s.items.length);
s.removeItem("3");
console.log(s.items.length);
