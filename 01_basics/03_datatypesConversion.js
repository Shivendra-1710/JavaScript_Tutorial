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












