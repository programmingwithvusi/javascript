// Changing 'this'

// 'this' -> references the object that is executing the current function.

// method -> if that function is a method, then that function references that obj.
// function -> that function will be referencing global (window, or global in node).

// Example 1 => (NOT PREFERED APPROACH)
// method -> obj
const video = {
  title: "s",
  play() {
    console.log(this); // 'this' -> references the video object, to (itself)
  },
  tags: ["a", "b", "c", "d"],
  showTags() {
    const self = this; // personal preference
    self.tags.forEach((tag) => {
      console.log(self.title, tag);
    });
  }
};

video.showTags();

// Example 2
function playVideo(a, b) {
  console.log(this);
}

// call() ->if function has more than one parameters, we can pass single or more values one-by-one
playVideo.call({ name: "Vusi" }, 1, 2);

// apply -> we can pass an object, and array when using apply.
playVideo.apply({ name: "Vusi" }, [1, 2]);

// bind -> does not call our playVideo function,
// it returns a new function and set it 'this' object to point to {name: 'Mandla'} permanetly
// no matter how we call that function it will always, always,
// always point to this function we pass here {name: 'Mandla'}
const fn = playVideo.bind({ name: "Mandla" })(); // returns: a function {name: 'Mandla'}

// Example 3
// using the bind method.
const anotherVideo = {
  title: "s",
  play() {
    console.log(this); // 'this' -> references the video object, to (itself)
  },
  tags: ["a", "b", "c"],
  showTags() {
    // using arrow function => inherites the 'this' fuection
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
  fruits: ["apple", "banana", "orange", "mango", "berries"],
  anotherShowTags() {
    this.fruits.forEach(
      // uses global function (window, global), with bind() method.
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  }
};

anotherVideo.showTags();
anotherVideo.anotherShowTags();

// BN: when dealing with call back functions, its better to use 'Arrow Functions'
