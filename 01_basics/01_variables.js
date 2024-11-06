const account_id = 1234
let account_email = "abhi83514@gmail.account"
var account_pass = "232323"
account_city = "Bijnor"

// account_id = 4321  // not allowed to change constant variable



account_email = "Rajput83514@gmail.account"
account_pass = "121212"
account_city = "Noida"
let account_state;      // if we define a variable in js with no value in it then it shows "undefined"


console.log(account_id);

/*
Prefer not to use var
because of block scope and functional scope 
*/

console.table([account_id,account_email,account_pass,account_city,account_state])
