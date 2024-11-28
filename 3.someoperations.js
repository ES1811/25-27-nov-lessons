//eksponenter
/*
let result=2**3; //2*2*2

console.log(result);

// 3rd power of 8

let result2=8**3;

console.log(result2);
*/


//modus
//let number=239857%7
//console.log(number);


// create a number variable check if this number is odd or even

//let myNumber=2342148756%3;
// not divisible by 5(answer is 1), neither by 7 (answer is 3)
// it is divisible by 12, answer is 0

// can this number be divisible by 12?
//console.log(myNumber);




let friendList = [
    "Alice",
    "Bob",
    "Charlie",
    "Dravid",
    "Eva",
    "Frank",
    "Grace",
    "Hannah",
    "Ian",
    "Jack",
]

console.log(friendList);

// new friend George and Maria
friendList.push("George");
friendList.push("Maria");

console.log(friendList);

// Frank is not a friend anymore so remove using splice
friendList.splice(5, 3); //takes away the index number then 2 more after (3 included with Frank)
console.log(friendList);

friendList.push("Daniel");
console.log(friendList);

// remove last person in friendlist with pop

friendList.pop("Daniel");
console.log(friendList);

friendList.pop();
console.log(friendList);

//CRUD

