// Numbers:
/*let firstNumber = 25
let secondNumber = 30
let result = firstNumber * secondNumber;

console.log(result)
console.log(12/0)*/

/* whole numbers are integers, -10, 100, 10000, 456456456 */
// 99.99 9088.9676967 double or float
// 675.0 is double 

//integers


//booleans
/*let isSnowing= false;
console.log(isSnowing);

let isRaining=false;
let isSunny=false;
let isCloudy=true;

console.log(isRaining, isSunny, isCloudy);
*/

//array
/*
let teamMembers=["Jane","Magnus","John","Miller","Steve"];
let statistics=[1,6,89,55,34,66,2];

console.log(teamMembers[4]);
result=statistics[3]+statistics[5];
console.log(result);

//get a random member between 0 and teamMemberSize
let teamMembersSize=teamMembers.length;
console.log("team members: "+teamMembersSize);
//get the member
let anyMember=Math.floor(Math.random()*teamMembersSize);
console.log(teamMembers[anyMember]);

let y=100;
console.log("the first defined y is "+y);

y=340;
console.log("new defined y is "+y);

const myBirthYear=1991;
console.log(myBirthYear);

//let us create a random number
let randomNumber=Math.floor(Math.random()*1000);
console.log("------------",randomNumber);
*/

let randomNumber=Math.ceil(Math.random()*100000000)
console.log("-----",randomNumber);

//Object:
/*
let car= {
    "wheels": 4,
    "color": "red",
    "model": "bmw",
    "year": 2000
}

let house= {
    "windows": 6,
    "door": 1,
    "color":"white",
    "roof":"red",
    "floors":1,
    "rooms":4,
    "bathrooms":2,

}
    

//show me your object's name

console.log("The house has",house.windows, "windows and has",house.door, "door with",house.rooms ,"rooms and",house.bathrooms, "bathrooms");
*/

//create a person, name, birthday and hobbies

let person= {
    "name":"John",
    "birthday":"26th March 1990",
    "hobbies": ["reading books", "playing games", "watching Netflix"],
}
let hobbyText=person.hobbies.join(", ");
console.log(hobbyText);

console.log("This is",person.name,"his birthday is on",person.birthday, "and he enjoys",hobbyText);