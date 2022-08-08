/*Using dot operator*/

const circle = {};

circle.radius = 5;

circle.diameter = circle.radius * 2;

/*using bracket notation*/

console.log(circle);


circle["area"]= Math.PI * circle["radius"] * circle["radius"];

/*console.log(circle);

console.log(`The area of a circle radius ${circle["radius"]}  is ${circle["area"]}`);*/


/*Modify an object destructively*/
let meal1 = "breakfast";
let meal2 = "lunch";
let meal3 = "dinner";



const meals = {
    [meal1] :"Bacon",
       [meal2] : "Beef",
    [meal3]: "Pizza",
};


const feedMe = {
breakfast : "Bacon",
lunch : "Beef",
supper : "Pizza",

};

console.log(`meals object  before destructive modification `,meals);

console.log(`feedMe object before destructive modification `,feedMe);


function destructivelyUpdateObject (obj , key, value){
    obj[key] = value;
    return  obj;
}
destructivelyUpdateObject( meals,meal3, "Eggs");

console.log(`Meals object  after destructive modification `,meals);

destructivelyUpdateObject( feedMe,"supper", "Chapati",);

console.log(`FeedMe object after destructive modification `,feedMe);











