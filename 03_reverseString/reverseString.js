const reverseString = function(str) {
  stringArray = [];
  reverseStr = '';
  if (str == ''){
    return '';
  } else {
    stringArray = str.split("")
    for (i = 0; i < str.length; i++){
      reverseStr += stringArray.pop();
    }
    return reverseStr;
  }
};

// Do not edit below this line
module.exports = reverseString;
