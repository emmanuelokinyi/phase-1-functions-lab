
function distanceFromHqInBlocks(someValue) {
  const headquartersLocation = 42;
  return Math.abs(someValue - headquartersLocation);
}

function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  const feetPerBlock = 264;
  return blocksTravelled * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
  const distance = Math.abs(start - destination);

  if (distance === 0) {
    return 0;
  } else if (distance <=400) {
    return 0; 
  } else if (distance >=400 && distance <= 2000) {
    return (distance - 400) * 0.02; 
  } else if (distance > 2000 && distance <= 2500) {
    return 25; 
  } else {
    return 'cannot travel that far'; 
  }
}

