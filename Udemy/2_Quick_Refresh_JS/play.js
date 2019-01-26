// const & let
const name = 'Lovro'
let age = 26
const hasHobbies = true

age = 27

// functions
function summarizeUser1(userName, userAge, userHasHobby)  {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies ' + userHasHobby);
}

const summarizeUser2 = function(userName, userAge, userHasHobby) {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies ' + userHasHobby);
}

const summarizeUser3 = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies ' + userHasHobby);
}

console.log(summarizeUser1(name, age, hasHobbies));
console.log(summarizeUser2(name, age, hasHobbies));
console.log(summarizeUser3(name, age, hasHobbies));

const add1 = (a, b) => {
    return a + b;
}

const add2 = (a, b) => a + b;
console.log(add1(1,2));
console.log(add2(1,2));

const addOne1 = (a) => a + 1;
const addOne2 = a => a + 1;     // to lahko naredis samo ce imas en parameter

console.log(addOne1(1));
console.log(addOne2(1));

// Objects
const person = {
    name: 'Lovro',
    age: 26,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

console.log(person);
person.greet();
const copiedObject = {...person};
console.log(copiedObject);

// Arrays
const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

hobbies.push('Programming');
console.log(hobbies);

const copiedArray = [...hobbies];
console.log(copiedArray);

// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// };
// console.log(toArray(1,2,3));

const toArray = (...args) => {
    return args;
};

console.log(toArray(1));
console.log(toArray(1,2,3));
console.log(toArray(1,2,3,1,2,3));