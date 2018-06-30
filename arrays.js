var chocolateBars = ["snickers", "hundred grand", "kikat", "skittles"];

function addElementToBeginningOfArray(array, element) {
   const newArray = [element, ...array]
   return newArray;
}

function destructivelyAddElementToBeginningOfArray(array,element){
    array = [element,...array]
    return array;
  }  
  
  function addElementToEndOfArray(array, element) {
    const newArrays = [...array, element]
    return newArrays;
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    array = [...array, element]
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
    var newList = array.slice(0, 1);
    return array
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
    array.push()
    return array;
  }
  
  function removeElementFromEndOfArray(array) {
    var newListArray = array.slice(0, array.length -1);
    return newListArray;
  }
  
  
  