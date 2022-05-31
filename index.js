function ageInSeconds(num) {
  let secondsInMin = 60
  let minInHour = 60
  let hrInDay = 24
  let dayInYr = 365.25

  let secInYr = secondsInMin * minInHour * hrInDay * dayInYr

  let ageInSec = num * secInYr
  
  return ageInSec
}

console.log(ageInSeconds(1));   // should print 'You are 31557600 seconds old'
console.log(ageInSeconds(10));  // should print 'You are 315576000 seconds old'
console.log(ageInSeconds(27));  // should print 'You are 852055200 seconds old'
console.log(ageInSeconds(50));  // should print 'You are 1577880000 seconds old'
console.log(ageInSeconds(100)); // should print 'You are 3155760000 seconds old'
console.log(ageInSeconds(0.25));// should print 'You are 7889400 seconds old'
