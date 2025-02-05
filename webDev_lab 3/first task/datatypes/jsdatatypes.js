let str = "Hello";

str.test = 5;

alert(str.test); //undefined and error if strict mode


let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );


alert( Math.round(6.35 * 10) / 10 );


//input until number
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);



let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}



function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );



function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
  
alert( randomInteger(1, 3) );


// string

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}


function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );


function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}


function extractCurrencyValue(str) {
    return +str.slice(1);
}

//arrays
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

alert( fruits.length ); // 4



let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");


// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll


let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // [ 'a', 'b', [Function (anonymous)] ]


function sumInput() {
    let numbers = [];

    while (true) {
      let value = prompt("A number please?", 0);
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
alert( sumInput() );


function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
}
  
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0



//array methods

function camelize(str) {
    return str
      .split('-')
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';


function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }
  
let barr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)



function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
}
  

let carr = [5, 3, 8, 1];
filterRangeInPlace(carr, 1, 4);

alert( carr ); //[3, 1]


//sort in decreasing order
let darr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( arr );


function copySorted(arr) {
    return arr.slice().sort();
  }
  
let earr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted );
alert( arr );
  

//simple calculator
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}



let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary



let myers = { name: "John", surname: "Smith", id: 1 };
let james = { name: "Pete", surname: "Hunt", id: 2 };
let anna = { name: "Mary", surname: "Key", id: 3 };

let people = [ john, pete, mary ];

let usersMapped = people.map(user => ({
  fullName: `${people.name} ${people.surname}`,
  id: people.id
}));


alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName );



function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
let madison = { name: "John", age: 25 };
let alexander = { name: "Pete", age: 30 };
let louis = { name: "Mary", age: 28 };

let sarr = [ pete, john, mary ];

sortByAge(sarr);

alert(sarr[0].name); 
alert(sarr[1].name);
alert(sarr[2].name);



function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
  
let harr = [1, 2, 3];
shuffle(harr);
alert(harr);



function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
let johnpork = { name: "John", age: 25 };
let griff = { name: "Pete", age: 30 };
let denis = { name: "Mary", age: 29 };

let parr = [ johnpork, griff, denis];

alert( getAverageAge(parr) );



function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
        result.push(str);
        }
    }
  
    return result;
  }
  
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O



function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}