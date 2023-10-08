// We create a function that accepts speed parameter. //

function checkSpeed(speed) {

    // We define constant variables. //
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
  
    // writing an if statement to check whether speed is less or greater than our intended speed limit.//

    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  
      // An if statement to check whether our demerit point is greater than max demerit point.//
      
      if (demeritPoints <= maxDemeritPoints) {
        console.log(`Points: ${demeritPoints}`);
      } else {
        console.log("License suspended");
      }
    }
  }
  
  // Example usage:
  const carSpeed = 80;
  checkSpeed(carSpeed);
  