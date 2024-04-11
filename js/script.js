
//=========print out all the numbers from 0 to 10====================
console.log("print out all the numbers from 0 to 10");
for (let i =0 ; i <=10; i++)
{
    console.log(i);
}



//=========print out every third number starting with 12 and going no higher than 4000=======

// //==============================
let firstVariable="Hello World";
console.log(firstVariable);
firstVariable=3;
let secondVariable =firstVariable
console.log(secondVariable);

let yourName ="Geeta";
console.log("Hello, my name is : ", yourName);


// C. Booleans
console.log("C.Boolens");
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// // FOR THE NEXT TWO, USE ONLY &amp;&amp; OR ||
console.log(true && false);
console.log(false || false || false || false || false || true);
console.log(false && false);
// console.log(e ___ &#39;Kevin&#39;);
console.log(a < b < c); // note: a < b < c is NOT CORRECT (and is not a valid
//JS expression, think about using other math operations)
console.log(a + b - d); // note: the answer is a simple arithmetic
//equation, not something &quot;weird&quot;
console.log(48 == '48');

//=Basic===== the numbers from 0 to 10===
console.log("Basic===== the numbers from 0 to 10 ");
for(let i=0;i<=10;i++)
{
console.log(i);
}
//==Basic======numbers from 10 up to and including 400====
console.log("Basic======numbers from 10 up to and including 400");
for(let a=10;a<=400;a++)
{
 console.log(a);
}

 //====every third number starting with 12===
console.log("Every third number starting with 12");

for(let b=12; b<=4000;b=b+3){
console.log(b)
}
//==Get even===Print even number from 1 to 100====

console.log("Get even===Print even number from 1 to 100");
for(let c=1;c<=100;c++)
{
 if( c%2 == 0)
 {
 console.log(c ,`is an even number`) ;
 }
}
// //======Give me five=========
console.log("Give me five");
for(let j=0;j<=100;j++)
{
if(j%5==0 && j!==0)
{
console.log(`I Found a ${j} .High Five`);
}
}

console.log("F. Biggie Smalls");
let number =prompt("Enter a number");


if (number < 5)
{
    console.log("Little number");
}
else if(number > 5 && number < 11)
{
    console.log("Big number");
}
else if(number > 50 && number < 100)
{
    console.log("Less than 100");
}
else if(number > 100)
{
    console.log("Greater than 100");
}
else
{
    console.log("Monkey");
}

//========III. Arrays & Control flow===
console.log("C. Accessing elements");
const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);
randomThings[2]= "World";
console.log(randomThings);

//====D. Change values=====
console.log("D. Change values");
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[3]);
ourClass[4] = "Octocat";
ourClass[5] ="Cloud City" ;
console.log(ourClass);

const myArray = [5, 10, 500, 20];
myArray[4] ="Aegon";
myArray.push("Randal");
console.log(myArray);
myArray.unshift("Bob Marley");  //add to the front of an array// 
let myArry1=myArray.pop();    //Remove from the front of an array 
console.log(myArry1);
console.log(myArry1.reverse());  

//==============H. What's in Your Closet=========

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

  console.log(kristynsCloset);

const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
console.log(thomsCloset);


