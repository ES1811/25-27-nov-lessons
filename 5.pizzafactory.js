// Array of pizza types
const pizzaTypes = [
    "Margherita",
    "Pepperoni",
    "BBQ Chicken",
    "Hawaiian",
    "Vegetarian",
    "Meat Lover's",
    "Buffalo Chicken",
    "Supreme",
    "Four Cheese",
    "Mushroom Delight",
  ];
  
  // Array of pizza toppings
  const toppings = [
    "Extra Cheese",
    "Pepperoni",
    "Olives",
    "Mushrooms",
    "Onions",
    "Bell Peppers",
    "Pineapple",
    "Bacon",
    "Chicken",
    "Sausage",
  ];

  //

  //step 1 let is print out pizza and toppings

  //console.log(pizzaTypes+toppings);

  //step 2 get the array sizes and assign them to variables

  let pizzaSizeArray=pizzaTypes.length;
  let sizeToppingsArray=toppings.length;

  //step 3 print out array sizes to the console

  console.log(`the pizza array size is: ${pizzaSizeArray} and toppings size is ${sizeToppingsArray}`);

//manipulate the arrays add one new pizza type, type a new topping with push

/*

pizzaTypes.push("Chef's Special");
toppings.push("HolaMexico");

console.log(pizzaTypes[10],""+toppings[10]);
console.log("New",pizzaTypes[10],"pizza with special",toppings[10],"topping");

*/

//remove first pizza type and remove sausage

pizzaTypes.splice(0,1);
toppings.pop("Suasage");
console.log(pizzaTypes);
console.log(toppings);

let randomPizzaIndex=Math.floor(Math.random() * pizzaTypes.length)
let randomToppingIndex=Math.floor(Math.random() * toppings.length);
let randomPizza=pizzaTypes[randomPizzaIndex];
let randomToppings=toppings[randomToppingIndex];
console.log(`Your random pizza is ${randomPizza} with ${randomToppings}`);

//create and order pizza object with pizza and toppings properties

/*

const newPizzas = {
  "size": ["large" ,"medium", "small"],
  "crust": ["thick", "thin"],
  "newToppings": toppings,
  "price": 200,
}

const randomSize = newPizzas.size[Math.floor(Math.random()*newPizzas.size.length)];

const randomTopping = newPizzas.newToppings[Math.floor(Math.random()*toppings.length)];

console.log(`Randomly picked size: ${randomSize}`);
console.log(`Randomly picked toppings: ${randomTopping}`);

*/

const newNewPizza = {
  newPizzaType: randomPizza,
  newToppingsType: randomToppings,
}

console.log(newNewPizza.newToppingsType);