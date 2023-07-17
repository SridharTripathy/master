let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length; //? returns length of string

//? slice() extracts a part of a string and returns the extracted part in a new string.
let slicetext = "Apple, Banana, Kiwi";
let part = slicetext.slice(7, 13); //? O/P=> "Banana"
let lastpart = text.slice(7); //? O/P=> "Banana, Kiwi"
let negativepart = text.slice(-12); //? O/P=> "Banana, Kiwi" for negative index counting starts from last
let newText = text.replace("Apple", "W3Schools"); //? O/P=> W3Schools, Banana, Kiwi (will replace 1st occurance)
let alltext = text.replaceAll("cats","dogs"); //? replace all occurance
let globalnewText = text.replace(/Microsoft/g, "W3Schools"); //? will replace all occurance
let smallnewText = text.replace(/MICROSOFT/i, "W3Schools"); //? "/i" is used for case sensitive
let upper = text.toUpperCase();
let lower = text.toLowerCase();
let text2 = text.trim(); //? to trim space
let char = text.charAt(0);//? returns character at that index.
let charat = text[0]//? returns char at that index
let splited = text.split(",") //? returns array splitted by separator