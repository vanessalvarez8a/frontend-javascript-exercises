module.exports.addItem = function(item, list) {
  if (list.lastIndexOf(item) == -1) {
    list.push(item);
  }
  return list;
};

module.exports.reverseSortedList = function(a) {
  return a.sort(), a.reverse();

}


