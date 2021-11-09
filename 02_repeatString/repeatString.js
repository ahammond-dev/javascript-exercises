const repeatString = function(myString, repeatCount) {
  if (repeatCount < 0){
    return 'ERROR';
  } else if ((repeatCount === 0) || (myString == '')) {
    return '';
  } else {
    returnString = '';
    for (i=0; i < repeatCount; i++) {
      returnString += myString;
    }
    return returnString;
  }
};

// Do not edit below this line
module.exports = repeatString;
