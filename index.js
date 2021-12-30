// // Start  time 5:25
// ?      ---- filter()-----
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// -----------------------------------------------------------------------------------------------------------------------------------------------

// //  --------  PUSH()-------
// // Array.prototype.push()
// //the push() method add one or more elements to the
// // end of an array and returns the new length of the array.

// // const animals =["buffalo","goats","sheep"];

// // animals.push("chicken","cow","cats");
// // console.log(animals);

// //push()method last me add karta ha

// // --------------------------------------------

// //            unshift()
// //unshift()start me add karta ha

// //the unshift() method adds one or more elemnts to
// //  the begining of an array & returns the new length of the array.

// const  animals = ["buffalo","goats","sheep"];

// animals.unshift("chicken");
// console.log(animals);
// //for count length of an array
// const count = animals.unshift();

// console.log(count);

// // // 2nd Example

// // const myNumbers =[1,2,3,4,6];
// // console.log(myNumbers.unshift(4,6));
// // console.log(myNumbers);

// // -----------------------------------------------------------------

// //         ---   POP()

// // the pop removes the last elemnet from an array and returns
// //that elemnts.

// const animal = ["sheep", "Bufalo","cow","goat","cats"]; //
// console.log(animal);
// animal.pop();
// console.log(animal);// it removes cat b/c its a last elemnt

// // ---------------------------------------------------------------------

// ----       shift()
// shift( ) removes the first elemnt  from an array and returns that
// removed elemnt. this method  changes the length of the array.

// const animal = ["sheep", "Bufalo","cow","goat","cats"]; //
// console.log(animal);

// animal.shift();
// console.log(animal);//its remove first elemnt

// -----------------------------------------------------------------------------

//  ----     CHALLENGE TIME ----

// Questions
// 1. Add Dec at the end of an Array.?
// 2. what is the  return value of a splice method.?
// 3. update march to March (update)?
// 4. delete June from an array?
// using one method

//  -------- Splice()---
// Adds  and /or removes elemnts from an array.

// const months =["jan","march","april" ,"june","July"];

// ///---- solution 1

// const newMonth= months.splice(months.length,1,"november");// first=>choose,second=>delete,third=>add
// // console.log(months);

// /////---- solution 2
// console.log(newMonth); // answer []

// // ----solution 3  =>update march to "March"

// const months = ["jan", "march", "april", "june", "July"];

// const indexOfMonth =months.indexOf("march");// for check index number
// if(indexOfMonth !=  -1 ){
//     const updateMonth = months.splice(indexOfMonth, 2, 'March');
// }else{
//     console.log("No data found");
// }
// // const updateMonth = months.splice(1, 1, 'March');

// console.log(months);

// -----------------------------------------------------------------------
// /
// /  ----- Map and reduce Method ------------------------
// ----     map()

// let newArray = arr.map(callbck(currentValue[,index[,array]]){
//     return element for newArray, after executing something

// }[, thisArg]);

// Returns a new array containing the results of calling
// a fuunction on every element in this Array.

// const array1 = [ 1 , 4 , 9 , 16 , 25 ];

// num  >  9

// let newArr = array1.map((currentElement,indexNumber,ArrayNumber)=>{
//     return currentElement > 9;

// })
// console.log(array1);
// console.log(newArr);

// const array1 = [ 1 , 4 , 9 , 16 , 25 ];
// let newArr = array1.map((cuurentElemnet,IndexNumber, currentarray) =>{
//     return `Index no =${IndexNumber}and the value is ${cuurentElemnet} belong to ${currentarray}`
// })
// console.log(newArr);

// it returns the new without  changes the current/original array

// ///   key  =>     for----     for each loop() method
// for each  method me wo hamme "undefined" deta ha new array me isliyee ham map( ) used karte ha

//  const array1 = [ 1 , 4 , 9 , 16 , 25 ];
//  let newArr = array1.forEach((cuurentElemnet,IndexNumber, currentarray) =>{
//      return `Index no =${IndexNumber}and the value is ${cuurentElemnet} belong to ${currentarray}`
//  })
//  console.log(newArr);

// /--------------------------------------------------------------------------------------------------------------------------------------------------------

// -- challenge Time ;

// Q1 : find the square root of each elemnt in an array?
// solution --1
// let arr = [25 , 36 , 49 , 64 , 81] ;

// // let arrSquare= arr.map((currentElement)=>{
////     return Math.sqrt(currentElement); //=> math.sqrt() used for square root
//// })

//// OR => second  easy method

// let arrSquare = arr.map((currentElement) =>  Math.sqrt(currentElement) )

// console.log(arrSquare);

//Q2 : Multiply each elemnt by 2 and return only those
//elments which are greater than 10?

//solution 2

// let arr = [1, 3, 4, 6, 8];

// let arr2 = arr.map((currentElement) => {
//     return currentElement * 2;
//   }) .filter((currentElement) => {
//     return currentElement > 10;
//   });
//   console.log(arr2);
// --------------------------------------------------------------------------------------------------------------------

// ----- Reduce ()  Method
// important method used in reactjs also 

// flatten an array means to convert the 3d or 2d array
//into single dimensional array

// the reduce() method executes a reducer