// for loop
// for(let i=1; i<=5; i++) {
//     console.log(i);
// }

////////////////////////////////////////////////////////////////
//print odd no

// for(let i=1; i<=15; i=i+2) {
//     console.log(i);
// }

//////////////////////////////////////////
//even number

// for(let i=2; i<=15; i=i+2) {
//     console.log(i);
// }

/////////////////////////////////////////////
// print multiple of 5
// for (let n=5; n<=50; n=n+5) {
//     console.log(n);
// }

//////////////////////////////////////////////////
/// make table

// let n = prompt("enter your number")
// n = parseInt(n)

// for(let i=n; i<=n*10; i=i+n) {
//     console.log(i);
// }

//////////////////////////////////////////////////////////
//Nexted loop 

// for(let i=1; i<=3; i++) {
//     console.log(`outer loop ${i}`)
//     for(let j=1; j<=3; j++) {
//         console.log(j);
//     }
// }

//////////////////////////////////
//while loop

// let i = 0;

// while (i<=20) {
//     console.log(i);
//     i++
// }
////////////////////////////////////////
//favorite movie

// const Fmovie = "avatar";

// let guess = prompt("guess my favorite movie");

// while((guess != Fmovie)) {
//  if(guess == "quit") {
//     console.log("You Quit")
//     break;
//  }
//  guess = prompt("wrong guess. pls try again");
// }

// if(guess == Fmovie) {
//     console.log("congrats")
// }

/////////////////////////////////////////////
//break keyword

// let i=1;
// while (i<=5) {
//     if(i == 3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

////////////////////////////////////////////////////////////
//loops with Arrays

// let fruits = ["mango","apple", "banana", "litchi", "orange"];

// for (let i=0; i<fruits.length; i=i+2) {
//     console.log(i, fruits[i]);
// }


// for (let i=fruits.length-1; i>=0; i--) {
//     console.log(i, fruits[i]);
// }

////////////////////////////////////////////////////////
//loops with Arrays  nested loop

// let heroes =  [
//     ["ironman","spiderman","thor"],["superman","wonder woman","flash"]
// ];

// for(let i = 0; i<heroes.length; i++){
//     console.log(`list #${i}`);
//     for(let j = 0; j<heroes[i].length; j++) {
//         console.log(`j=${j} ,eroes[i][j]`);
//     }
// }

//////////////////////////////////////////////////////////

// let member = [  ["aman", 95], ["shradha", 94.5], ["karan", 100]];

// for(let i=0; i<member.length; i++) {
//     console.log(`member no # ${i}`);
//     for(n=0; n<member[i].length; n++) {
//         console.log(member[i][n]);
//     }
// }

////////////////////////////////////////////////////////////////////////
//for of loop

//  let fruits = ["mango", "apple", "banana", "orange", "litchi"];

//  for(fruit of fruits ) {
//     console.log(fruit)
//  }

//  for(char of "apnacollage") {
//     console.log(char)
//  }

////////////////////////////////////////////////////////////////////////////////////
////for of loop nexted

// let heroes =  [ ["ironman","spiderman","thor"],["superman","wonder woman","flash"]
//  ];

//  for(list of heroes) {
//     // console.log(list);
//     for(hero of list) {
//         console.log(hero)
//     }
//  }
