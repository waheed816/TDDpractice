function myMap(inputArray, callback) {
  // Your code here
  let newArray = [];
  let current;

  for(let i = 0; i < inputArray.length; i++){
    current = inputArray[i];
    newArray.push(callback(current));
  }
  return newArray;
}

module.exports = myMap;
