// Speed Limit 50
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspend license

checkSpeed(90);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const demeritPoints = 12;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= demeritPoints) console.log("License suspended");
  else console.log("Points", points);
}
