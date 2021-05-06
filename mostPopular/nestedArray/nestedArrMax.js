/* Write a function to find the largest number in an arbitrarily nested array. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all elements in each array are numbers */ 

//input : arbitrarily nested array 
//output : number (largest)
//edge case : invalid inputs => other data types(string, objects, null) 

const nestedArrMax = arr => {
  //declare a new variable called the largest num, set it to 0
  let largestNum = 0;
  const helpFlattening = (arr) => {
    //iterate the passed in array 
    arr.forEach((element) => {
      
      //each iteration, check if the data type of the element is array;
      if (Array.isArray(element)) {
        //if it is, recursively return helpFlattening func with the element as an argument 
        return helpFlattening(element);
      } else {
        //handle edge case: 
        if (typeof element !== 'number') largestNum = undefined; 
        //if not, check if the largestNum is less than the element 
        //if it is, reassign its value as the element
        if (largestNum < element) largestNum = element
      }
    })
  }
  //invoke the helper Function 
  helpFlattening(arr)
  //return largestNum 
  return largestNum 
}

const arrFlat = [1, 3, 10, 6]; 
console.log(nestedArrMax(arrFlat))// 10 
const arrNested = [1, [3, [0], 6]]; 
console.log(nestedArrMax(arrNested))// 6 
const arrDeeplyNested = [1,[3, 10],[20]] 
console.log(nestedArrMax(arrDeeplyNested));// 20
const arrForInvalidInputs = [1, [3, 'hello'], 'bye']
console.log(nestedArrMax(arrForInvalidInputs)) // undefined;