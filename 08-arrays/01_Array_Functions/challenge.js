module.exports.reversePlusOne = function(a) {
  return a.push(1), a.reverse();
};

module.exports.plusesEverywhere = function(a) {
  return a.join([separator = '+']);
  //return a.join('+'); also works!//
};

module.exports.arrayQuantityPlusOne = function(a) {
  return a.length +1;
};


