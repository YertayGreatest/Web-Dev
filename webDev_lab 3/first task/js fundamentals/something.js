// datatypes:
let name = 'Ilya'

alert(`hello ${1}`); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}`); // hello Ilya


// interaction: alert, prompt, confirm

let yourname = prompt(`what's your name?`, 'Josh')

alert(yourname);

// basic operatos
//a.
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

//b.
let ab = 2;

let x = 1 + (ab *= 2);

// a = 4, x = 5

// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)

let abc = +prompt("First number?", 1);
let bca = +prompt("Second number?", 2);

alert(abc + bca); // 3

// comparisons

// 5 > 4 → true
// "apple" > "pineapple" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false

let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

let result = (a+b>4 ? 'Below' : 'Over');

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

//logical operatos

alert( null || 2 || undefined ); // 2

alert( alert(1) || 2 || alert(3) ); //1 2

alert( 1 && null && 2 ); //null

alert( alert(1) && alert(2) ); // 1 undefined

alert( null || 2 && 3 || 4 ); // 3


if (age >= 14 && age <= 90);

if (age < 14 || age > 90);

if (-1 || 0) alert( 'first' ); //first
if (-1 && 0) alert( 'second' ); //nothing will be output
if (null || -1 && 1) alert( 'third' ); //third

//login
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert('Welcome!');
  } else if (pass === '' || pass === null) {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }

} else if (userName === '' || userName === null) {
  alert('Canceled');
} else {
  alert("I don't know you");
}

//loops
//last value
let i = 3;

while (i) {
  alert(i--); //1
}

let e = 0;
while (++e < 5) alert(e); //from 1to4

let r = 0;
while (i++ < 5) alert( i ); //from 1 to 5


//both from 0 to 4
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );

//from 2 to 10
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
}

let t = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//repeat until the input is correct
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//output prime numbers

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
        continue nextPrime;
    }
  }

  alert( i ); // a prime
}

//switch
if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
}

let vg = +prompt('a?', '');

switch (vg) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}

//functions
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
}
// no difference

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
let rgn = prompt("x?", '');
let pol = prompt("n?", '');

if (pol < 1) {
alert(`Power ${pol} is not supported, use a positive integer`);
} else {
alert( pow(rgn, pol) );
}

//functions more
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

