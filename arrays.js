var chocolateBars = ["snickers", "hundred grand", "kikat", "skittles"];

function addElementToBeginningOfArray(array, element) {
   const newArray = array.unshift(element);
   return newArray;
}

function destructivelyAddElementToBeginningOfArray(array,element){
    array = array.unshift(element);
    return array;
  }  
  
  f