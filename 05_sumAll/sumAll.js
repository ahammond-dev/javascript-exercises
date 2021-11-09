const sumAll = function(numberOne, numberTwo) {
  let temp=0;
  let total = 0;
  if ((typeof(numberOne) !== 'number') || (typeof(numberTwo) !== 'number')) {
    return 'ERROR';
  } else if ((numberOne < 0) || (numberTwo < 0)) {
    return 'ERROR';
  } else if (numberTwo < numberOne) {
    temp = numberOne;
    numberOne = numberTwo;
    numberTwo = temp;
  }
  for (i = numberOne; i <= numberTwo; i++){
    total += i;
  }
  return total

};

// Do not edit below this line
module.exports = sumAll;
