// // // JSchallenger => Javascript practice => Javascript arrays (22)


// // 1. Get nth element of array ------------------------------------------------
// function nthElement(a:number[],n:number):number{
//     return a[n-1]
// }
// console.log(nthElement([6,5,4,3,2,1], 2));

// // 2. Remove first 3 elements of an array -------------------------------------
// function first3Remove(a:number[]):number[]{
//     return a.slice(3)
// }
// console.log(first3Remove([1,2,3,4,5,6,7]));

// // 3. Get last 3 elements of an array -----------------------------------------
// function getLast3(a:number[]):number[]{
//     return a.slice(-3)
// }
// console.log(getLast3([4,5,6,7,8]));

// // 4. Get first 3 elements of an array ---------------------------------------
// function getFirst3(a:number[]):number[]{
//     return a.slice(0,3)
// }
// console.log(getFirst3([1,2,3,4,5]));

// // 5. Return last n array elements -------------------------------------------
// function lastNElement(a:number[], n:number):number[]{
//     return a.slice(-n)
// }
// console.log(lastNElement([1,2,3,4,5], 2));

// // 6. Remove a specific array element ----------------------------------------
// function filterB(a:any[], b:any):any{
//     return a.filter(el=>el!=b)
// }
// console.log(filterB);

// // 7. Count number of elements in JavaScript array ---------------------------
// function lenArr(a:number[]):number{
//     return a.length
// }
// console.log(lenArr([1,2,3,4,5,6]));

// // 8. Count number of negative values in array -------------------------------
// function countNegativeValues(arr:number[]) {
//     let count:number = 0;
//     arr.forEach(num => {
//         if (num < 0) {
//             count++;
//         }
//     });
//     return count;
// }
// console.log(countNegativeValues([1,-2,5,-1,4]));

// // 9. Sort an array of strings alphabetically --------------------------------
// function sortAlphabet(a:string[]):string[]{
//     return a.sort()
// }
// console.log(sortAlphabet(["c","a","b"]));

// // 10. Sort an array of numbers in descending order --------------------------
// function desortNumbers(a:number[]):number[]{
//     return a.sort().reverse()
// }
// console.log(desortNumbers([1,3,2,6,4,5]));

// // 11. Calculate the sum of an array of numbers ------------------------------
// function sumArr(a:number[]):number{
//     let sum:number = 0;
//     a.forEach(num => {
//         sum += num;
//     });
//     return sum;
// }
// console.log(sumArr([1,2,3,4,5]));

// // 12. Return the average of an array of numbers ----------------------------
// function calAverage(arr:number[]):number {
//     let sum = 0;
//     arr.forEach(num => {
//         sum += num;
//     });    
//     return sum / arr.length;
// }
// console.log(calAverage([1,2,3,3,4]));

// // 13. Return the longest string from an array of strings -------------------
// function findLongStr(arr:string[]):string {
//     let longestStr:string = "";
//     arr.forEach(str => {
//         if (str.length > longestStr.length) {
//             longestStr = str;
//         }
//     });
//     return longestStr;
// }
// console.log(findLongStr(["I", "am", "khushnudbek", 'pratov']));

// // 14. Check if all array elements are equal --------------------------------
// function isAllEqual(arr:any[]):boolean {
//     const el1:any = arr[0];
//     return arr.every(el => el=== el1);
// }
// console.log(isAllEqual([1,2,1,1,1,1,1,1,1,1,1,1]));

// // 15. Merge an arbitrary number of arrays ----------------------------------
// function mergeArrs(...arrs:any[]) {
//     return arrs.reduce((res, curArr) => {
//         return res.concat(curArr);
//     }, []);
// }
// console.log(mergeArrs([1,3,4],["hi,jo"],[true, false]));








