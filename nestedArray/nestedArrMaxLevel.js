/* Write a function to find the largest number in a nested array, up to and including a given level. 
Return the largest number without going deeper in the nested array than the specified level.
Assume all elements in each array are numbers.
The original array is considered to be at depth 1, any inner array is depth 2, etc */ 

//input : a nested array, number(depth level);
//output : a number 
//edge case : invalid input

const nestedArrMaxLevel = (array, level) => {
  //initialize a variable to hold current largest num 
  let largestNum;  
  //iterate the passed in array
  array.forEach((element) => {
    //check if the element is an array, if so, enter recursive logic 
    if (Array.isArray(element)){
      //check if the level is 1, if so we hit the deepest level(base case), so return the largestNum;
      if (level === 1) return largestNum;
      //otherwise, reassign find the max value of nested array by decrementing level by 1
      largestNum = Math.max(nestedArrMaxLevel(element, level - 1), largestNum)
    }
    else {
      //handle edge case: 
      if (typeof element !== 'number') largestNum = undefined;
      //if largestNum is undefined or largestNum is less than the element,
      //reassign largestNum as the element 
      else {
        if (!largestNum || largestNum < element) largestNum = element;
      }
    }
  })
  //return largestNum
  return largestNum; 
}

const nestedArr = [1, [7, [10]], 6];
console.log((nestedArrMaxLevel(nestedArr, 1))) // 6
console.log((nestedArrMaxLevel(nestedArr, 2))) // 7
console.log((nestedArrMaxLevel(nestedArr, 3))) //10
console.log((nestedArrMaxLevel([1, ['hello', 4], 'hi'], 3))) //10