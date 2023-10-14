// The 'this' keyword (in JavaScript)
// 'this' -> references the object that is executing the current function.

// method -> if that function is a method, then that function references that obj.
// function -> that function will be referencing global (window, or global in node).

// Example 1
// method -> obj
const video = {
  title: "s",
  play() {
    console.log(this); // 'this' -> references the video object, to (itself)
  },
  tags: ["a", "b", "c", "d"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    }, this);
  }
};

// by the same token if we add the stop method to video object. its will reference, to (itself)
video.stop = function () {
  console.log(this);
};
video.stop();
/*
 returns: 
{title: 's', play: ƒ, stop: ƒ}
play: ƒ play()
stop: ƒ () // anonymous function
title: "s";
*/

// Example 2
// Regular function
function playVideo() {
  console.log(this);
}

playVideo();
// window.playVideo() =>
// returns: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// Constructor function
// instead of getting window object, we get a new object.
// note this new object is seperate from the 'v' object above.
// this means the there's a new allocation in memory to the 'v'
function Video(title) {
  this.title = title;
  console.log(this);
}
const v = new Video("a");
v.reset = function () {
  console.log(this);
};
console.log(v);
// console.log(Video);

// Example 3
video.showTags();
