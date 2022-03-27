// 5 important topics of javascript
// equality , permitives , Async Js , error Handling , ES6 Syntax , Array Methods

// // Start  time 5:25
// simple function me 
// wo  state function ka leta ha 

//or arrow function me state component ka leta ha

// ?      ---- filter()-----
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// -----------------------------------------------------------------------------------------------------------------------------------------------

// --- splice(index  , number:how many you want for delete ) // used for delete
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

//  -------- Splice()--- // it is used for  delete
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

// ----          map()    -------
// The map() method in JavaScript creates an array by calling a
// specific function on each element present in the parent array.

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

// example 2;
// const products = [
//     { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
//     { name: 'Phone', price: 700, brand: 'Iphone', color: 'Golden' },
//     { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' },
//     { name: 'Aunglass', price: 300, brand: 'Ribon', color: 'Blue' },
//     { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' },
// ];

// const productName = products.map(product => product.name);
// console.log(productName);
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
// In simple words reduce means  kis cheez ko reduce/ ya less karna
// Or jha hamme single value chaiyhee hoo like when we need : percentage ,sum of all
// important method used in reactjs also

// flatten an array means to convert the 3d or 2d array
//into single dimensional array

// the reduce() method executes a reducer function (that you provide)
// on each Element of the array , resulting in single output value

// the reducer function takes four arguments:

// Accumulator
// Cuurent Value
// Current Index
// Source Array

// Example 01;
// let arr =[ 5,6 ,2];

// let sum =arr.reduce((accumulator , currentElement , currentIndex , array) =>{
//     debugger;
//     return accumulator += currentElement;
// })

// console.log(sum);

// Example 02; with map() function
// const arr = [1, 3, 4, 6, 8];
// let arr2 = arr.map((currentElement) => {
//     return currentElement * 2;
//   }) .reduce((accumulator,currentElement) => {
//     return accumulator +=currentElement;
//   });
//   console.log(arr2);

// 2d dimensional array =['zone 1','zone2']
// 3d dimensional array =['zone1','zone2','zone3']

// how to fatten an Array
// converting 2d and 3d array into aone dimensional array

// const arr =[['zone 1','zone 2'],['zone 3','zone 4'], ['zone 5' ,'zone 6'], ['zone 7' , 'zone 8'] ];

// const flatArr = arr.reduce((accum , currVal) =>{
//     return accum.concat(currVal); //concat milata ha
// })
// console.log(flatArr);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----     STRINGS  -------------

// Javascript strings are used for storing and manipulating text.
// you  can use single or double quotes

// Strings can be created as primitive,
// from string literals, or as objects, using the string() constructor

// hmm new string constructor se bhi string  create kar sakte ha
// let Name = new String("fasih ahmed");
// console.log(Name);

// how to find the length of a string
// string.prototype.length
// Reflects the length of the string

// let myName ="FasihAhmed";
// console.log(myName.length);// length is a property

// let sentence = "this a 'fasih ahmed'and he is a coder";
// console.log(sentence);

// =-------------------------------------------------------------------------------
//  --------- indexOf()
// --Finding a string in a string
// String.prototype.indexOf(searchValue [ , from index])

// the indexOf() method returns the index of (the posiiton) of  specified text

// const myBioData ='I am the fasih ahmed';
// console.log(myBioData.indexOf("fasih"));// indexOf() is a method

// agar indexOf() data find nhi karsake ga tu wo hamme ( -1 ) return kare ga

// console.log(myBioData.indexOf("a", 2));

// --------- Search() method
//
//the search() method searches a string for specified value and
// returns the position aof the match

// const myBiodata = "T am the fasih Ahmed Raza";
// let searchData = myBiodata.search("fasih");

// console.log(searchData);

// =--------------------------------------------------------------------

// Extracting String Parts

// there are 3 methods for extracting a part of a string:

// slice(start , end)
// substring(start , end)
// substr(start length)

// the slice() Method----
// Slice() extracts a part of a string and returns the axtracted part
//  in a new String

// the slice() method  selects the elements starting at the  given
// start argument, and ends at , but doesnot include,
// the given end argument

// var string = "Apple , Banana , Mango , Orange";
// let response = string.slice(0,4);// 0 index se lekr 4 tak hamme value dee gaa or last index number count nhi hoga
// let response2 = string.slice(7,-2);//-2 means string ke last 2  ko chor kar between me ane wale saree return kareee gaa
// console.log(response2);

// =---------------------------------------------------------------------------------------------------------

// --------- challenge Time -------

// Q : Display only 280 characters of a string like the one used
//     in Twitter ?

//  let myTweets ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// let myActualTweet =myTweets.slice(0,280);

// console.log(myActualTweet);

// // for checking its length
// console.log(myActualTweet.length);
// //

// ---------------------------------
// -- substring() Method
// substring(start , end)

// substring() is similar  to slice().

// The difference is that substring() cannot accept
// negative indexes.

// var str = "Apple , Banana ,kiwi";
// let res =str.substring(7,-1);// -1 wo ignore karrha ha
// console.log(res);

// --------------------------------------

//  substring() Method ----
// Substr() is similar to slice().

// the differnce is that the second parameter specifies the
// length of the extracted part.

// var str = "Apple , Banana ,kiwi";
// let res =str.substr(-10);//  last se count start karee gaa
// console.log(res);

// -----------------------------------------------------------

// --- Replace()

// the replace() method replace a specified value
// with another value in a string

// let myBioData = "I am Fasih Ahmed Raza";

// let replaceData =myBioData.replace("Fasih" ,"FASIH");// (search value , replace value)
// console.log(replaceData);

//> Key
// the replace() method replaces only first match
//------------------------------------------------------------------------

// -- Extracting String Characters
// Extract => نکالنا    nikalana

// there ae 3 methods for extracting string characters

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// ----   charAt()   Method
// charAt() method  returns the character at a
// specified index ( postion ) ina a string

// let string ="Hello world";

// console.log(string.charAt(7));

//--------------------------------------------------

// 11. challenge time
// return the unicode of the last character in a string

// let str =" HELLO WORLD";
// console.log(str.charCodeAt(10));

// -------------------------------------

// the charCodeAt() Method
// charCodeAt() method  returns the unicode of the character at a

// specified index ( postion ) ina a string
//  The method returns a UTF-16 Code  ( an Integer Between ) and 65535).

//  The Unicode Standard provides a unique number for every
//  character, no matter the platform,device,application,or
//  language.
//  UTF-8 is a popular Unicode encoding which has 88-bit code units.

// var str = " hello world";
// console.log(str.charCodeAt(8));


// =------------------------------------------------------------------------------

//     property Access
//  ECMASript 5 (2009) allows prperty access [ ] on strings

// var str ="hello world";
// console.log(str[4]);


// ====----------------------------------------------------------------------------

//        ----         Other Useful Methods ----

// let myName = "FASIH AHMED RAZA";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// the concat() method 
// concat() joins two or more strings 

// let firstName ="Fasih";
// let LastName ="Ahmed";
// console.log(`${firstName} ${LastName}`); //2nd method
// console.log( firstName.concat(LastName) );
// console.log( firstName.concat( "" , LastName));

// --------------------------------------------------------------

//   String.trim()
//  the trim() method removes whitespace from both 
// sides of a  string 

// var str = "             hello world !           ";
// console.log(str);
// console.log(str.trim());
// =----------------------------------------------

// Converting a String to an Array
// A string can be converted to an array with the
//  spilt() method

// var txt = "a,b,c,d,e,f,g"; //string

//  console.log(txt.split(","));  // spilt on commas
// console.log(txt.split(" "));   // spilt on spaces
// console.log(txt.split("|"));  // spilt on pipe


// ------------------------------------------------------------------------------------------------------------


//  Date and time in Javascript ---

// var a=1 ,b=2;
// console.log(a+b);

// Date And time in Javascript

// there are 4 ways to create a new date object
// new Date()
// new date(year ,month ,day,hours,minutes,seconds,milliseconds)
// it takes 7 arguments
// new Date(milliseconds)
//we cannnot avoid month section
// new Date(date String)


// // new Date()
// /// isi method se hm date or time find karsakte ha
// let  currDate = new Date();
// console.log(currDate);// 2022-01-03T11:21:44.821Z

// console.log(new Date().toLocaleString());//  1/3/2022, 4:21:44 PM
// console.log(new Date().toString());// jo value hmme browsr console par milte ha //
// // Mon Jan 03 2022 16:24:44 GMT+0500 (Pakistan Standard Time)

// ----------------------------------------------------------------------------------------------------------

// Date.now()
// hame milliseconds return karta ha  january 1 , 1970 s lekr abhi tak
// console.log( Date.now());

// -------------------------------
// new Date(year,month, ................)7 arguments it takes
// 7 numbers specify year, momth,day ,hour ,minute,second, and millisecond (in that order)
// note: In javascript months counts from 0 to 11.
// January is 0. December is 11.

// is method  se hmm date restrict lada saktee ha i.e is like launch date
//  var d = new Date(2021 ,0, 5, 10 ,33,20,0);
// // (year ,month ,day,hours,minutes,seconds,milliseconds)
// console.log(d);
// console.log(d.toLocaleString());
// console.log(d.toString());

// new Date(datesString) -------
// new Date(datesString) creates a new date object from  a date string

// var d = new Date("January 13 , 2021 11:13:00");
// console.log(d.toLocaleString());

// new Date( milllisecond)
// console.log(Date.now());// Answer==>1641210595302 
//  var d = new Date(1641210595302);
//  console.log(d);

// -------------------------------------------------------------------------------------------------

//   ------ Dates Method ------

// const currDate = new Date();

//   how to get the indivisual date
//Learn self in another time this all methods
// console.log(currDate.toLocaleString());
// console.log(currDate.setFullYear());//
// console.log(currDate.setMonth());// 
// console.log(currDate.setDate());


// // -------------------------------------------------------------------------------------------------------------

// // ---        Time Methods --
//         //    (  get and  set )


//         // --get methods
//  const curTime = new Date();

//  // how to get an individual time

//  console.log(curTime.getTime());
// // the getTime() returns  the hours the numbers of milliseconds
// // since Januaury 1, 1978
// console.log(curTime.getHours());
// // the gethours() method returns he hours of a date as a number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());


// -- set methods ( jo hmm khod set karsakte ha)

// const currTime = new Date();

// console.log(currTime.setTime(4));

// console.log(currTime.setMinutes());
// console.log(currTime.setSeconds());
// console.log(currTime.setHours());

//------------------------------------------------------
// -- Practice time---

// new Date().toLocaleTimeString();

//**********     Math Object in Javascript ******/

// the Javascipt Math object allows you to perform mathmatical tasks on munbers.


// Math.round()
//returns the value of x rounded to its nearest integer// the javascript math object allows you to its nearset integer

// let num =10.2354;// it work just like we use in round of karte ha number ka
// console.log(Math.round(num));

// Math.pow()
// Math.pow(x,y) returns the value of x to the power of y

// console.log(Math.pow(2,5)); //the number 2 its power is 5 

//******* Math.sqrt() ******/
// Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(5)); // square root _/5 =>2.23606797749979
// console.log(Math.sqrt(81));//=>9

//******** Math.abs() *****/
 // Math.abs(x) hamesha  positive value return karta ha beshak value negative hi kue na hoo
 // returns the absolute (positive) value of x

//  console.log(Math.abs(-55));//always return positve =>55
// console.log(Math.abs(4-6));

// Math.ceil()
// Math.ceil() return  kare gaa hamesha round of beshak value 5 se greater ho yah nahi
// ceil() method me agar . lag gea tu hamesha increment hoga

// console.log(Math.ceil(4.51));//=>5
// console.log(Math.ceil(4.1));//it still roundoff =>5

// // if check in round()
// console.log(Math.round(4.1));// 4

// Math.floor()
// Math.floor() hamseha point se phle wali value return kare gaa

// console.log(Math.floor(23.56));// it returns 23


// Math.min()
// Math.min() can be used to find the lowest value ina list of argument

// console.log(Math.min(0,23,2435,543,666,11,3,12));

// Math.max()
// Math.max() can be used to find the highestS value ina list of argument

// console.log(Math.max(0,23,2435,543,666,11,3,12));


// ---- Math.random()
// Math.random() returns a random number 0 , and 1

// console.log(Math.random()*10);
// it gives always with point value 
//so we use floor() to avoid this
// console.log(Math.floor(Math.random()*10));

// Math.trunc()
// the trunc() method returns the integer part of a a number

// decimal s phele jo bhi number ho wo return kare gaa chaiyee wo -ve Or +ve h

// console.log(Math.trunc(-234.234));

// ----------------------------------------------------------------------------------------------------

// BOM => browser object model
//OOP => object oriented programming

//  ******************** D O M vs B O M **************

// DOM=> the DOM  is the document object model,which deals with the document ,
//  the html Elements  themselves,e .g : document & all traversal 
// you would do init, events , etc.
// EXAMPLE:- 
//  change in background color  to red
//  document.body.style.background ="red";

// BOM => 
 //   the BOM is the browser object Model , which deals with browser components
 //   aside from the document , like history ,location ,navigator and screen
 //  (as well as some others that vary by browser).
                // OR
//    In simple meaning all the windows operations which comes under BOM are performend
  //     using BOM

  // so example of window object properties are 
//   innerHeight,
//   innerWidth and many more etc 

// ----------///practice problem
 // get data from object from user choice

// var obj ={
//     name :"fasih",
//     email :"ff1"
// }
// var val = prompt("ENter value");
// console.log(obj[val]);

// vaar asfkajsjoij



