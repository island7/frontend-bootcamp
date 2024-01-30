// Creating an array
let superhero = ['Spiderman', 'Sailor Moon', 'Scarlet Witch', 'Homelander', 'Batman'];

// Accessing array elements
console.log('Hero 1:', superhero[0]);
console.log('Hero 2:', superhero[1]);
console.log('The last hero:', superhero[superhero.length - 1]);

// Array Methods

// length
console.log('Array length:', superhero.length);

// indexOf
console.log('Index of a value:', superhero.indexOf('Sailor Moon'));

// includes
console.log('Includes a value:', superhero.includes('Hulk'));

// join
console.log('Joined array:', superhero.join(' - '));

// slice
let slicedArray = superhero.slice(1, 4);
console.log('Sliced Array:', slicedArray);

console.log(superhero);

// splice
let removedElements = superhero.splice(2, 3);
console.log('Removed elements:', removedElements);

console.log(superhero);