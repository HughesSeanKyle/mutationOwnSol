/* 
Basic Algorithm Scripting: MutationsPassed
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

//Solution Own

function mutation(arr) {
 
    //Make both words in array same case then split   
    const splitIdxZero = arr[0].toLowerCase().split("");                        //1
    const splitIdxOne = arr[1].toLowerCase().split("");                         //2

    //Check if each val in second word present in first
    const foundAll = splitIdxOne.every(val=> splitIdxZero.includes(...val))     //3
    return foundAll;                                                            //4
}
  
console.log(mutation(["Alien", "line"]));


//Notes
/*
//1 && //2
The toLowerCase() method returns the calling string value converted to lower case.
Source-[https://devdocs.io/javascript/global_objects/string/tolowercase]

The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
Source-[https://devdocs.io/javascript/global_objects/string/split]

Convert the first and second word in the the array to lowercase and split each letter into an array. 
    splitIdxZero = [ 'a', 'l', 'i', 'e', 'n' ]
    splitIdxOne  = [ 'l', 'i', 'n', 'e' ]

//3 && //4
The every() method tests whether all elements in the array pass the test implemented by the provided function.
Source-[https://devdocs.io/javascript/global_objects/array/every]

The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
Source-[https://devdocs.io/javascript/global_objects/array/includes]

The every method in this case will check if every value in the second word(splitIdxOne) is present in the first word (splitIdxZero) by using the includes method. The spread operator ("...") will make sure that each letter in the splitIdxOne array is seen as an argument to check for. 

Finally true or false is returned based on the tests performed by the every method. 

*/