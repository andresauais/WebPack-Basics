//arrow function
export const hello = () => {
  return "Hello World!";
}

//javascript class
export class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";


//template string
var a = 10;
var b = 10;
console.log(`JavaScript first appeared ${a+b} years ago. Wow!`);

//=> JavaScript first appeared 20 years ago. Wow!

console.log(`The number of JS MVC frameworks is ${2 * (a + b)} and not ${10 * (a + b)}.`);
//=> The number of JS frameworks is 40 and not 200.

const user = {name: 'Caitlin Potter'};
console.log(`Thanks for getting this into V8, ${user.name.toUpperCase()}.`);