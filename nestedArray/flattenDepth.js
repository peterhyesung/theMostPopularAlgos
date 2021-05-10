/* Given an arbitrarily nested array of numbers and a nonnegative integer "depth",
return a new nested array that's flattened to a certain level of depth.
​
Flattening at "depth 0" just returns the same array.
Flattening at "depth 1" returns the array flattened at just one level
*/

//input : nested array, number(nonnegative integer);
//output : a new nested array 
//edge case : invalid inputs 

const flattenDepth = (array, depth) => {  
  //initiate a variable and assign its value as an empty array 
  let result = [];
  //initiate a variable for counting;
  let counter = 0;
  //a recursive helper function : 
  const flattening = (array, depth) => {
    //check if the depth is equal to counter variable, 
    //reassign the result value as the modified result which is concatenated by the array;
    if (depth === counter) {
      result = result.concat(array);
      //then, exit out of this helper function;
      return;
    }  
    //iterate the passed in array, 
    //each iteration, check if the currEl is an array 
      array.forEach((currEl) => {
      if (Array.isArray(currEl)) {
        //if so, increment the count variable by 1; 
        counter++;
        //and recursively return the helper function with currEl and depth; 
        flattening(currEl, depth);
      } 
      //otherwise, add currEl to the result array 
      else result.push(currEl);
      })
  }
  //invoke the helper function 
  flattening(array, depth);
  //return the result array 
  return result; 
}
const nestedArray = [2, [4, [7], 1], 5];
console.log(flattenDepth(nestedArray, 0)); // exact same array 
console.log(flattenDepth(nestedArray, 1)); // [2, 4, [7], 1, 5]
console.log(flattenDepth(nestedArray, 2)); // [2, 4 ,7, 1, 5]
console.log(flattenDepth(nestedArray, 3)); // [2, 4 ,7, 1, 5] 
console.log(flattenDepth(nestedArray, 4)); // [2, 4 ,7, 1, 5]
console.log(flattenDepth(nestedArray, 5)); // [2, 4 ,7, 1, 5]