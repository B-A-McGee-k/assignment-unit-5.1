console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Bryan',
  lastName: 'McGee',
  hasSiblings: true,
  shoeCount: 8,
  favThreeFoods: ['Ramen', 'Nachos', 'Cantaloupe'],
  // TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

let fullName = me.firstName + ' ' + me.lastName
console.log(fullName)

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log(me.favThreeFoods[0])
console.log(me.favThreeFoods[2])
//Bryan note:
//Since the array is "3 favorite foods", would it be reasonable in this case to use 2?
//The array is only going to have 3 items.

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log(me.shoeCount + ' shoes are what I currently have!');
// Do not ask why I have that many, finding size 13 Vans at a reasonable price is hard so I buy what I can when I can :(

let newValue = 0
let update = 0
function changeProperty (info, change, value) {

  if (info == 'shoeCount') {
    if (change == 'add') {
      me.shoeCount = me.shoeCount + value
    };
    if (change == 'remove') {
      me.shoeCount = me.shoeCount - value
    };
    console.log('I have ' + me.shoeCount + ' shoes now!');
  };
  //There would need to be another if and an else for any of the other info pieces to be changed
  //Something for another time I guess
}

console.log(changeProperty('shoeCount', 'add', 1))

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = "Cyan";
console.log(me);


