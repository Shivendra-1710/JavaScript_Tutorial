// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 1);

// console.log("2" > 1);         //here js automatically convert the datatypes for comparsion 
// console.log(2 > "1");         // Instead, try every time to compare same variable


console.log(null > 0);    // 1 
console.log(null == 0);   // 2 
console.log(null >= 0);   // 3

/*

In Js , equality check and comparsion operator both works differently

Here above the reason is that an equality check == and comparsion > < >= <= work differently .
Comparsion convert null to a number , treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false

*/

console.log(undefined == 0);     //false
console.log(undefined >= 0);     //false
console.log(undefined > 0);      //false

// ===      // check equality & it basically check the datatype also

console.log("2" === 2);           //different datatype as give false 
console.log( 2 === 2);            //same datatype as give true










