// // // JSchallenger => Javascript practice => Javascript objects (19)


// // 1. Accessing object properties one -------------------------------------------------------
// function countryVal(obj:object):string{
//     return obj.country
// }
// console.log(countryVal({ continent: 'Asia', country: 'Japan' }));

// // 2. Accessing object properties two -------------------------------------------------------
// function getProp(obj:object):any {
//     return obj['prop-2'];
// }
// console.log(getProp({  one: 1,  'prop-2': 2}));

// // 3. Accessing object properties three ----------------------------------------------------
// function getMyProp(obj:object, prop:string):any {
//     return obj[prop];
// }
// console.log(getMyProp({  one: 1,  'prop': 2}, "prop"));

// // 4. Check if property exists in object ---------------------------------------------------
// function isExist(obj:object, key:any):boolean{
//     return Object.prototype.hasOwnProperty.call(obj, key);
// }
// console.log({hi:13, hello: 67}, "salom");

// // 5. Check if property exists in object and is truthy -------------------------------------
// function isExist(obj:object, key:any):boolean{
//     return obj.hasOwnProperty(key) && !!obj[key];
// }
// console.log({hi:13, hello: 67}, "hi");

// // 6. Creating Javascript objects two -----------------------------------------------------
// function createObj(a:any, v:any):object{
//     let obj:object = {};
//     obj[a] = v;
//     return obj;
// }
// console.log(createObj("hi", "hello"));

















