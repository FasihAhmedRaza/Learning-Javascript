// // 1 to 100 counting

//  for( var a= 1 ; a <=100 ; a= a+10){
//      document.write(a +"<br>")
//  }


// Q : Display only 280 characters of a string like the one used
//     in Twitter ?

let myTweets ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let myActualTweet =myTweets.slice(0,280);

console.log(myActualTweet);

// for checking  its length
console.log(myActualTweet.length)