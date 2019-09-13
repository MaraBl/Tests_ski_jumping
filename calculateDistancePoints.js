const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let hillFlying = (distance - kPoint)* 1.2;
  let hillStandard = (distance - kPoint)* 2;
  let hillLarge = (distance - kPoint)* 1.8;

  switch(hillSize) {
    case 'flying':
      return 120 + hillFlying;
    case 'standard':
      return 60 + hillStandard;
    case 'large':
      return 60 + hillLarge;
  };
};

module.exports = calculateDistancePoints;