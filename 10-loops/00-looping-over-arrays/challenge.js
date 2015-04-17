module.exports.sumNumbers = function(array) {
var sum = 0; //variable empty
  for ( var index =0; index < array.length; index ++) {
    sum += array[index]; // sum is the old sum plus the new one array[index]
}
return sum;
  
};

module.exports.splitAndLowerCaseString = function(inputString) {
  var lowCase = inputString.toLowerCase();
  return lowCase.split(',');
};

module.exports.addIndex = function(arrayInfo) {
  var array =[]; // empty array
  for (var index = 0; index < arrayInfo.length; index++) {
    array.push(index + " is " + arrayInfo[index]); //add an item into an array .push()   index is the position on the array "0" + is 
  }
  return array;

};



