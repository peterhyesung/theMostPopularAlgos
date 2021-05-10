/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:

  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.

*/
//input : unsorted array 
//output : sorted array 
//edge case : invalid inputs 
const merge = (left, right) => {
//initiate a variable and assign it to an empty array 
  const result = []; 
  //two variables needed for left and right index 
  let leftIndex = 0;
  let rightIndex = 0;
//iterate through left and right array as long as we have item in one of them  
  while(left[leftIndex] || right[rightIndex]){
    //compare left and right, and add the element in ascending order to result array
    if(left[leftIndex] < right[rightIndex]){
      //after adding the element, increment leftIndex by 1 using post-fix. 
      result.push(left[leftIndex++])
    } else if(left[leftIndex] >= right[rightIndex]) {
      //after adding the element, increment rightIndex by 1 using post-fix 
      result.push(right[rightIndex++])
    } //otherwise, if there is any element in left or right array, add them to the result array.
    else result.push(left[leftIndex++] || right[rightIndex++])
  } //return sorted array 
  return result; 
}
const mergeSort = (array) => {
  //check edge case: if the array contains only one element or empty 
  if (array.length <= 1) return array
  //to use "merge sort" strategy, 
  //initiate a new variable and assign its value as the length of the passed in array
  const length = array.length;
  //to split the passed in array in half, using Math.floor method
  const middle = Math.floor(length / 2);
  //define the left and right arrays using "slice" method 
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  //return merge function with two arguments, left and right by merging them recursively
  return merge(mergeSort(left), mergeSort(right))
}
const unsorted = [1, 55, 10, 3] // [1, 3, 10, 55]
console.log(mergeSort(unsorted))