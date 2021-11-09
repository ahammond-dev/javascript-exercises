const removeFromArray = function() {
  let myArray = arguments[0];
  let pos = -1;
  for (i = 1; i < arguments.length; i++){
    pos = myArray.indexOf(arguments[i]);
    if (pos >= 0) {
      myArray.splice(pos, 1);
    }
  }
  return myArray;
};


// Do not edit below this line
module.exports = removeFromArray;
