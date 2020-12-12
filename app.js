// OBJECTS

const person = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'jdoe@gmail',
  isAdmin: false,
  age: 22,
  hobbies: ['Biking', 'Hiking', 'Walks on the beach', 'Watching paint dry'],
  address: {
    city: 'San Francisco',
    state: 'CA',
    zip: '949499',
    street: '123 Some St.',
  },
  favColor: null,
};


// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.address.street);
// console.log(person.hobbies[person.hobbies.length - 1]);

// const key = 'banana';

// console.log(person['address']['zip']);

// const votes = [1, 2, 1, 1 ,3, 3];

// const hashMap = {
//   2: 5
// }
// console.log(hashMap[1 + 1])

// Change favColor
person.favColor = 'Blue';

// console.log(person.favColor)
person.address.street = '123 Other St.'

person.hobbies[0] = 'Bike Riding';
person.hobbies.pop();


// Add New Property
person.favFood = 'Pizza';

// Delete a Property
// delete person.favFood;

// if (person.favFood) {
// }

person.favFood.type;

console.log(person)
console.log(person.favFood)

function sayName() {
  console.log(this);
  console.log(`Hi, my name is ${this.name}. Have nice`);
  return 'Abra Cadabra';
}

const person2 = {
  name: 'John Doe',
  // Method: Function an object
  sayName: sayName(),
}

const person3 = {
  name: 'Jane Doe',
  // Method: Function an object
  sayName: sayName(),
}

// person2.sayName()

console.log(person2.sayName)
// console.log(person3.sayName())
