// // // JSchallenger => Javascript practice => Javascript fundamentals (24)


// // 1. Sum two numbers ------------------------------------------------------------------
// function Sum(a:number, b:number):number{
//     return a+b
// }
// console.log(Sum(10, 6));

// // 2. Comparison operators, strict equality --------------------------------------------
// function isSame(a:any, b:any):boolean{
//     if (a===b){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isSame("2007", 2007));

// // 3. Get type of value ---------------------------------------------------------------
// function myTypeof(a:any):string{
//     return typeof a
// }
// console.log(myTypeof(false));

// // 4. Get nth character of string -----------------------------------------------------
// function nthCharacter(a:string, n:number):string{
//     return a.charAt(n-1)
// }
// console.log(nthCharacter("pratov", 2));

// // 5. Remove first 3 characters of string ---------------------------------------------
// function remove3(a:string):string{
//     return a.slice(3)
// }
// console.log(remove3("hello"));

// // 6. Get last 3 characters of string -------------------------------------------------
// function last3Char(a:string):string{
//     return a.slice(-3)
// }
// console.log(last3Char());

// // 7. Get first 3 characters of string -----------------------------------------------
// function first3Char(a:string):string{
//     return a.slice(0, 3)
// }
// console.log(first3Char("hello"));

// // 8. Find the position of one string in another ("is") ------------------------------
// function findStr(a:string):number{
//     return a.indexOf('is')
// }
// console.log(findStr("practise"));

// // 9. Extract first half of string --------------------------------------------------
// function firstHalf(a:string):string{
//     let mid:number=Math.ceil(a.length/2)
//     return a.slice(0, mid)
// }
// console.log(firstHalf("Xushnudbek"));

// // 10. Remove last 3 characters of string -------------------------------------------
// function removeLast3(a:string):string{
//     return a.slice(0, a.lastIndexOf(a) - 3);
// }
// console.log(removeLast3("Pratov"));

// // 11. Return the percentage of a number --------------------------------------------
// function bPercentofA(a:number, b:number):number{
//     return (b/100)*a
// }
// console.log(bPercentofA(100, 50));

// // 12. Basic JavaScript math operators ----------------------------------------------
// function basicMath(a:number, b:number, c:number, d:number, e:number, f:number):number{
//     return  ((((a+b)-c)*d)/e)**f
// }
// console.log(basicMath(6,5,4,3,2,1));

// // 13. Check whether a string contains another string and concatenate ---------------
// function concatenate(a:string, b:string):string{
//     if (a.includes(b)){
//         return b+a
//     }else{
//         return a+b
//     }
// }
// console.log(concatenate("java", "script"));

// // 14. Check if a number is even ----------------------------------------------------
// function isEven(a:number):boolean{
//     if(a%2==0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isEven(17));

// // 15. How many times does a character occur? ---------------------------------------
// function counter(a:string, b:string):number{
//     let res:number=0;
//     for(let i of b){
//         i==a?res++:""
//     }
//     return res
// }
// console.log(counter("t", "nechta t harfi bor?"));

// // 16. Check if a number is a whole number ------------------------------------------
// function isWhole(a:number):boolean{
//     return Math.trunc(a)==a?true:false
// }
// console.log(isWhole(16.06));

// // 17. Multiplication, division, and comparison operators ---------------------------
// function divOrMul(a:number, b:number):number{
//     return a<b?a/b:a*b
// }
// console.log(divOrMul(10, 100));

// // 18. Round a number to 2 decimal places -------------------------------------------
// function round2(a:number):number{
//     return Math.round(a*100)/100
// }
// console.log(round2(12.3456));

// // 19. Split a number into its digits -----------------------------------------------
// function numSplit(a:number):number[]{
//     return String(a).split("").map(Number);
// }
// console.log(numSplit(345));

// // // 20. Fundamentals qismining 20 dan oxirigacha, ya'ni 24 tacha premium uchun ekan. :( 