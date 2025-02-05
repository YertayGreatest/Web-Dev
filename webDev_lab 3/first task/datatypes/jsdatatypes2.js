//map and set
function unique(arr) {
    return Array.from(new Set(arr));
}



function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split("").sort().join("");
        obj[sorted] = arr[i];
    }
  
    return Object.values(obj);
  }
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );




let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");

alert(keys); // name, more





let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

alert("Read message 0: " + readMessages.has(messages[0])); // true
messages.shift();




let amessages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
let readMap = new WeakMap();

readMap.set(amessages[0], new Date(2017, 1, 1));



//objects key values
function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }  
    return sum;
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
alert( sumSalaries(salaries) );


function count(obj) {
return Object.keys(obj).length;
}



//destructuring-assignment
let user = {
    name: "John",
    years: 30
  };
  
let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false


function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
      }
    }
  
    return maxName;
}


// ---date---

let d2 = new Date("2012-02-20T03:12");
alert( d2 );



function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
let date = new Date(2014, 0, 3); //3 Jan 2014
alert( getWeekDay(date) ); //FR




function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
  
    return day;
}



function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
  
let sdate = new Date(2015, 0, 2);
 


function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}



function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}



function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
}



function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
      return 'right now';
    }
  
    let sec = Math.floor(diff / 1000);
    if (sec < 60) {
      return sec + ' sec. ago';
    }
  
    let min = Math.floor(diff / 60000);
    if (min < 60) {
      return min + ' min. ago';
    }
  
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2));
  
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}



// json

let auser = {
    name: "John Smith",
    age: 35
};
  
let user2 = JSON.parse(JSON.stringify(user));



let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    lace: room
  };
  
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
return (key != "" && value == meetup) ? undefined : value;
}));

