/*Using dot operator*/

const circle = {};

circle.radius = 5;

circle.diameter = circle.radius * 2;

/*using bracket notation*/

console.log(circle);

const pi=3.142;

circle["area"]= pi * circle["radius"] * circle["radius"];

console.log(circle);

console.log(`The area of a circle radius ${circle["radius"]}  is ${circle["area"]}`);



