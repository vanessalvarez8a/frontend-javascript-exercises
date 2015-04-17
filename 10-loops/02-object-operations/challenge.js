module.exports.copy = function(object) {
  var newObject = {}; //empty object, will use keys and values
  for (property in object) {
    newObject[property] = object[property];
  }
  return newObject;
};


module.exports.extend = function(dest, src){
  for (property in src) {
    dest[property] = src[property];
  }
  return dest;
}

module.exports.hasElems = function(object, array) {
  for ( var i =0; i < array.length; i++) {
    if(object[array[i]] === object[property]) {
      return false;
      }
    }
      return true;

};