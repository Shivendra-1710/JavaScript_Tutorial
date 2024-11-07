// datatypes_conversion

let score = "17"

// Ways to check type of 
console.log(typeof score);
console.log(typeof(score));

//Conversion String to Number 

let value_in_number = Number(score)         //convert string to number
console.log(typeof value_in_number);
console.log(value_in_number);        //NaN Output in case of score is "Abhi" or "17abc"

/*

"17" = 17
"17abc" = NaN
true => 1 , false => 0

*/

// Conversion Number to Boolean

let isLoggedin = 1
let BooleanisLoggedin = Boolean (isLoggedin)     //Conversion Here
console.log(typeof BooleanisLoggedin);
console.log(BooleanisLoggedin);

// 1 => true , 0 => false 
// "" => false 
// "Abhi" => true


//Conversion Number to String 

let someNumber = 2002
let stringNumber = String (someNumber)      //conversion here 
console.log(typeof stringNumber);
console.log(stringNumber);



//*********************************Operations**********************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);


//Ensures to not use these type of code format for enhances code readability


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);         
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion








