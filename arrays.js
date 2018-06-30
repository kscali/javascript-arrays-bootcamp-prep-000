var chocolateBars = ["snickers", "hundred grand", "kikat", "skittles"];

function addElementToBeginningOfArray(array, element) {
   const newArray = array.unshift(element);
   return newArray;
}

function destructivelyAddElementToBeginningOfArray(array,element){
    array = array.unshift(element);
    return array;
  }  
  
  function addElementToEndOfArray(array, element) {
    const newArrays = array.push(element);
    return newArrays;
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    array = array.push(element);
    return array
  }
  
  function accessElementInArray(element, index) {
    return element[index];
  }
  
  
  function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift();
    return array;
    
  }
  
  function removeElementFromBeginningOfArray(array) {
    var newList = array.slice(1);
    return newList;
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
    array.push()
    return array;
  }
  
  function removeElementFromEndOfArray(array) {
    var newListArray = array.slice(0, array.length -1);
    return newListArray;
  }
  
  
  