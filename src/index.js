import {hello} from '../js/module-a';
import {Car} from '../js/module-a';
import "./main.scss";

console.log(hello() + "import");

let myCar = new Car("Ford", 2014);

console.log("My car is " + myCar.age() + " years old.");
console.log("cache Working");

