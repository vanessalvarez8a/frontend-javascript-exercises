module.exports.getKeys = function(object) {
var array = [];
for (var property in object) {
  array.push(property);
}
  return array;

};


module.exports.getValues = function(object) {
  var array = [];
  for (var property in object) {
    array.push(object[property]);
  }
  return array; // this one will return 25,bob, nov 27
};

module.exports.objectToArray = function(object) {
  var array = [];
  for (var property in object) {
    array.push(property + " is " + object[property]);
  }
  return array; //instead of using the counter is using the name of the property
};

