module.exports.stream = function(conditionalFn, actionFn) {
  while (conditionalFn()) { //while contionalFn is true perform the action is gonna do the test for you 
  actionFn(); //
}
};

module.exports.sumNumbers = function(array) {
var sum = 0; //variable empty
var index = 0;
var endCondition = array.length;
while(index < endCondition) { //same as first exercise but with while loop
    sum += array.pop(); //shift take from front, pop from the back
    index ++;
}
return sum;
  
};

