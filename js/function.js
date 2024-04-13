//===== A. printGreeting ======

function printGreeting(yourName) {
    console.log('Hello there, ' + yourName + '!');
    return;
}

printGreeting("Slimer");

//====  B. printCool =======

function printCool(Name) {
    console.log("Captain Reynolds is " + Name +'!') ;
    return;
}

printCool("Cool");

//=====C. calculateCube ======

function calculateCube(number) {
    console.log(number*number*number) ;
    return;
}
calculateCube(6);

//==== D. isVowel =====

function isVowel(vowel)
{
    vowel = vowel.toLowerCase();
        if(vowel == "a" || vowel == "e" || vowel == "i" ||  vowel == "i" || vowel == "u" ) 
        {
            return (true);
        }
        else
        {
            return false;
        }
}
console.log(isVowel("c"));
//=== E. getTwoLengths ===

function getTwoLengths(x,y){
 let a =x.length
 let b =y.length
 console.log(a);
 console.log(b);
}
getTwoLengths("Hank", "Hippopopalous");

//=== F.getMultipleLengths===

function getMultipleLengths(array){
    const result =[];
  for (let str of array) 
  {
    console.log(str.length);
    result.push(str.length);
  }

console.log(result);
}

getMultipleLengths(["hello", "what", "is", "up", "dude"]);
//==== G. maxOfThree ====

let a = Math.max(6, 9, 1);
console.log(a);

//==== H. printLongestWord =======

let arr = [
    "BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"];

function printLongestWord() {
    return arr.sort(function (a, b) {
        return b.length - a.length;
    })[0];
}
 
// Display output
console.log(printLongestWord());

