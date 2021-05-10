/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.
​
Example:
​
intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]
​
intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]
​
Do not assume the ranges are in order. The intervals array will have at least
one range in it.
*/

//input : array of arrays (ranges);
//output : array (sorted ranges - merging the overlapping intervals);
//edge case : invalid inputs 

const mergeRanges = (ranges) => {
  //use "sort" method to have a sorted array in ascending order 
  ranges.sort((a, b) => a[0] - b[0]);
  // console.log(ranges)
  //create a new array for the final result; 
  const result = [];
  //initiate a new variable called previous, and assign its value as the first element of the sorted array
  let previous = ranges[0]
  //iterate through the sorted array, 
  for(let i = 1; i < ranges.length; i++){
    //compare the intervals between the last element of previous and the first element of current element.
    if (previous[1] >= ranges[i][0]) {
      //if the last number of previous is overlapped over the first element of currEl,
      //reassign its value 
      previous = [previous[0], Math.max(previous[1], ranges[i][1])]
    } else {
      //otherwise push the previous array to result array 
      result.push(previous);
      //reassign previous as the current element of ranges.
      previous = ranges[i];
    }
  }
  //add the previous to the result array(previous : the very last array of sorted array)
  result.push(previous)
  //return the result array 
  return result;   
}

const intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(intervals));
const intervals2 = [[8, 10], [15, 18], [1, 3], [2, 6]]
console.log(mergeRanges(intervals2));
