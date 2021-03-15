import {hello} from './module-a';
import {Car} from './module-a';
import './module-b';
import "../css/main.scss";

console.log(hello() + "import");

let myCar = new Car("Ford", 2014);

console.log("My car is " + myCar.age() + " years old.");
console.log("cache Working");

