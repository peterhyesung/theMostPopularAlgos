/*
​
Given an arbitrarily nested array of numbers and a positive integer "depth",
return a new array consisting of the numbers with depth less than or equal to
the provided depth, in order of appearance.
​
The original array is considered to be at depth 1, and inner arrays are at
greater depth.
​
For example:
​
retrieveDepth([2, [4, [7], 1], 5], 1) -> [2, 5] because only the 2 and 5 are at
"depth 1", and everything else is too deep. The 4 and 1 are at "depth 2", and
the 7 is at "depth 3".
​
retrieveDepth([2, [4, [7], 1], 5], 2) -> [2, 4, 1, 5] because the 2 and 5 are at
"depth 1", the 4 and 1 are at "depth 2", and the 7 is too deep because it's at
"depth 3".
​
retrieveDepth([2, [4, [7], 1], 5], 3) -> [2, 4, 7, 1, 5] because every number
is within "depth 3". No number is deeper.
​
*/
//input : nested array, number(depth);
//output : array 
//edge case : invalid inputs;

const retrieveDepth = (array, depth) => {
  //initiate a new variable and assign its value as an empty array 
  const result = [];
  //a recursive helper function : 
  const depthRetriever = (array, depth) => {
    //check if the passed in depth is 0, if so return 
    if (depth === 0) return;
    //iterate the passed in array, 
    array.forEach((element) => {
      //check if the current element is an array, 
      //if not, add the element to the result array 
      if (!Array.isArray(element)) result.push(element);
      //if so, recursively return the helper function
      //with the current element as the first argument, and the depth decrementing by 1
      else depthRetriever(element, depth - 1)
    })
  }
  //invoke the helper function with the passed in array and number(depth)
  depthRetriever(array, depth);
  //return the result array 
  return result; 
}

const nestedArray = [2, [4, [7], 1], 5];
console.log(retrieveDepth(nestedArray, 1)) // [2, 5]
console.log(retrieveDepth(nestedArray, 2)) // [2, 4, 1, 5]
console.log(retrieveDepth(nestedArray, 3)) // [2, 4, 7, 1 ,5]