/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray;

doubleArray = function(arr){
  newArr = arr.map(x => x * 2);
  return newArr;
}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays;
sumArrays = function(arr1, arr2){
  let newArr = arr1.concat(arr2);
  let sum = newArr.reduce((accumulator, currentValue) =>(accumulator + currentValue));
  
  return sum;
}

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount;
stringCount = function(str){
  return str.length;
}
/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength;
arrayLength = function(arr){
  return arr.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll;
countAll = function(arr){
 let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
 return sum;
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings;
countStrings = function(arr){
  let newArr = arr.map((x => x.length));
  return newArr;
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
var countAllStrings;
countAllStrings = function(arr){
  let newArr = arr.map(x => x.length);
  let sum = newArr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum;
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray;
convertToArray = function(obj){
  return Object.values(obj);
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize;
objectSize = function(obj){
  let newArr = Object.keys(obj);
  return newArr.length;
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
var createZeroFilledArray;
createZeroFilledArray = function(n){
  let newArr = [];
  for (i = 0 ; i < n; i++){
    newArr.push(0);
  }
  return newArr;
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray;
poppedArray = function(arr){
  arr.pop();
  return arr;
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString;
splitString = function(str){
  return str.split('');
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
var lengthOfLast;
lengthOfLast = function(arr){
  return arr.pop().length;
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen;
sumBelowTen = function(arr){
  let newArr = arr.filter(x => x < 10);
  let sum = newArr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum;
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
var moreThanTenLetters;
moreThanTenLetters = function(arr){
  return arr.filter(x => x.length > 10).length;
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
 var multiplyAll;
multiplyAll = function(arr){
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);

}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive;
sumAllPositive = function(arr){
  let newArr = arr.filter(x => x > 0);
  return newArr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree;
stringCountBelowThree = function(arr){
  let newArr = arr.filter(x => x.length <= 3);
  return newArr.length;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects;
countObjects = function(arr){
  return arr.length;
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys;
getObjectKeys = function(arr){
  return Object.keys(arr);
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues;
getObjectValues = function(obj){
  return Object.values(obj);
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject;
makeObject = function(key, value){
  let newObj = {};
  newObj[key] = value;
  return newObj;
}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse;
makeObjectReverse = function(value, key){
  let newObj = {};
  newObj[key] = value;
  return newObj;
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject;
tupleToObject = function(tup){
  let newObj = {};
  newObj[tup[0]] = tup[1];
  return newObj;
}
/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse;
tupleToObjectReverse = function(tup){
  let newObj = {};
  newObj[tup[1]] = tup[0];
  return newObj;
}
/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys;
strToKeys = function(arr){
  let newObj = {};
  for(i = 0; i < arr.length; i++){
    newObj[arr[i]] = 0;
  }
  return newObj;
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues;
getValues = function(obj){
  return Object.values(obj);
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys;
getKeys = function(obj){
  return Object.keys(obj)
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray;
objectToArray = function(obj){
  let newArr = [];
  let objKeys= Object.keys(obj);
  let objVal = Object.values(obj);
  for(i = 0; i < objKeys.length; i++){
    let newTup = [];
    newTup.push(objKeys[i]);
    newTup.push(objVal[i]);
    newArr.push(newTup);
    newTup = [];
  }
  return newArr;
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject;
arrayToObject = function(arr){
  let newObj = {};
  arr.map(x => newObj[x] = false);
  return newObj;
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject;
arraysToObject = function(arr1, arr2){
  let newObj = {};
  for(i = 0; i < arr1.length; i++){
  newObj[arr1[i]] = arr2[i];
  }
  return newObj;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples;
objectsToTuples = function(obj1, obj2){
  let newObj = Object.assign(obj1, obj2);
  let objKey = Object.keys(newObj);
  let objVal = Object.values(newObj);
  let newArr = [];
  for(i = 0; i < objKey.length; i++){
    let newTup = [];
    newTup.push(objKey[i]);
    newTup.push(objVal[i]);
    newArr.push(newTup);
    newTup = [];
  }
  return newArr;
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues;
mapArrayValues = function(arr){
  let newObj = {};
  arr.map(x => newObj[x] = true);
  return newObj;
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts;
mapStringCounts = function(arr){
  let newObj = {};
  arr.map(x => (x.length >= 5) ? newObj[x] = true : newObj[x] = false);
  return newObj;
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums;
arrayToObjectNums = function(arr){
  let newObj = {};
  arr.map(x => newObj[x] = true);
  return newObj;
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;
stringToKeys = function(str){
  let newObj = {};
  let newArr = str.split('');
  newArr.map(x => newObj[x] = true);
  return newObj;
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;
charCountMap = function(arr){
  let newObj = {};
  arr.map(x => newObj[x] = x.length);
  return newObj;
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Object}
 */
var frequencyMap;
frequencyMap = function(arr){
  let newObj = {};
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    for(let x = 0; x < arr.length; x++)
      if(arr[i] === arr[x]){
        count++;
      }
    newObj[arr[i]] = count;
    count = 0;
  }
  return newObj;
}
/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Object}
 */
var tupleConvertToObject;
tupleConvertToObject = function(arr){
  let newObj = {};
  arr.forEach(x => {
    newObj[x[0]] = x[1]
  });
  return newObj;
}


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject,
}
