/**
Developing a problem solving process
The process
Understand the Problem
Explore Concrete Examples
Break It Down
Solve a Simpler Problem
Use Tools Strategically
Look Back and Refactor

1. Understand the Problem
Can I restate the problem in my own words?
you recieve an array and a val and will return which indexes of the array add up to that value
What are the inputs that go into the problem?
an arr of numbers and a number
What are the outputs that should come from the solution to the problem?
an arr with 2 numbers which are the indexs of the vals that add up to the number 
Do I have enough information?
ye ye 
How should I label the important pieces of data that are a part of the problem?


2. Explore Concrete Examples
Start with Simple Examples
Progress to More Complex Examples
Explore Examples with Empty Inputs
Explore Examples with Invalid Inputs

examples 

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [2,1,1], target = 2
Output: [1,2]
Explanation: Because nums[1] + nums[2] == 2, we return [0, 1].

Input: nums = [4,3,2], target = 2
Output: []
Explanation: no nums in arr equate to 2

Input: nums = [], target = 3
Output: []
Explanation: no nums in arr so no nums equal target



3. Break It Down
Explicitly write out the steps you need to take.
You can type this as pseudocode or write it on a whiteboard (or desk)
This forces you to think about the code you’ll write before you write it
This helps you catch any lingering conceptual issues or misunderstandings
Don’t write code!

arr, target 

loop through array with index i
    loop with idex j and j set to i
        if arr[j] + arr[i] === target
            return [i,j]

return []


4. Solve A Simpler Problem
If there is a problem you can’t solve, then there is an easier problem you can solve: find it.

—George Pólya

Find the core difficulty in what you’re trying to do
Temporarily ignore that difficulty
Write a simplified solution
Then incorporate that difficulty back in
Easier said than done.

This fourth strategy (solve a simpler problem) is easier said than done. If you simplify too much, you may make the problem too simple, in which case solving the simpler problem provides little insight into the original. But if you don’t simplify enough, you still might be stuck on a problem that is too challenging. Finding the right sub-problem to isolate takes a decent amount of practice.

5. Use Tools Strategically
Use your debugging tools.
Don’t guess and check!
Scientific approach: formulate hypotheses, test, draw conclusions. Repeat.


6. Look back and refactor
Does the result match your expected output?
Can you improve the performance of your solution?
What other ideas could you have pursued?


 */

/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
*/

// const twoSum = (nums, target) => {
//   for (let i = 0; i <= nums.length; i++) {
//     for (let j = i + 1; j <= nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         console.log([i, j]);
//         return [i, j];
//       }
//     }
//   }
//   console.log([]);
//   return [];
// };

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

/**
 * initiate obj
 *
 * loop through arr with index of i
 *     minus item from target = val needed
 *      add to obj arr[i] : [val needed, index]
 *
 * loop through obj
 *  if obj[val[0]] is key
 *        return [obj[val[1]], obj[key[val[1]]]]
 *
 * return []
 *
 */

const twoSum = (nums, target) => {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    let valNeeded = target - nums[i];
    obj[nums[i]] = [valNeeded, i];
  }

  console.log(obj);

  for (const [key, val] of Object.entries(obj)) {
    console.log(key);
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 1, 1], 2));
console.log(twoSum([4, 3, 2], 2));
console.log(twoSum([], 3));
