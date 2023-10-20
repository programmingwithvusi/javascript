// Stopwatch

// add defineProperty for each propert instance members (startTime, endTime, running) its going to pulute the stopwatch interface
// premature optimization is the root of evils
function Stopwatch() {
  // public members
  this.startTime, this.endTime, this.running, (duration = 0);

  // publc readonly property.
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    }
  });
}

Stopwatch.prototype.start = function () {
  if (this.running) throw new Error("Stopwatch has already started");

  this.running = true;
  startTime = new Date();
};
Stopwatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch is not started");

  this.running = false;
  endTime = new Date();
  const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
  duration += seconds;
};
Stopwatch.prototype.reset = function () {
  startTime = null;
  endTime = null;
  running = false;
  duration = 0;
};

const sw = new Stopwatch();
console.log(sw.start());
if (sw.running === "true") console.log(sw.stop());
console.log(sw.duration);
