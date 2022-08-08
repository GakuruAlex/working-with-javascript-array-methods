const superHeroes = [
"Superman",
"Supergirl",
"Arrow",
"Flash",

];

/* Using the .push() method  to add  element to end of  array*/

function addElementsWithPush(customArray,elementToAdd){

    console.log(`Array before using push() method   ${customArray}`);

    console.log(`The size of array before push method is : ${customArray.length}`)

    console.log(`Push method returns size of new array : in this case : ${customArray.push(elementToAdd)}`);

    console.log(`Array after array.push() ${customArray}`);

}

/*using the unshift operator to add element to start of array
destructive */

function addElementsWithUnshift(customArray,elementToAdd){

    console.log(`Array before using unshift method: ${customArray}` );

    console.log(`performing "console.log(array.unshift(someElement))" yields : ${customArray.unshift(elementToAdd)}`);

    console.log(`Array after unshift: ${customArray}`);

}

/*using the spread operator to add element to start of array
non destructive */

console.log(`Array before using spread operator: ${superHeroes}` );

const newSuperheroesSpreadOperator=["CatWoman", ...superHeroes];



console.log(`New superheroes array using spread operator ["CatWoman", ...superHeroes] is ${newSuperheroesSpreadOperator} `);

/* Using the  spread operator to add an element to end of array*/
const newSuperheroesSprdOprtr=[ ...superHeroes , "CatWoman"];


console.log(`New superheroes array using spread operator [ ...superHeroes, "CatWoman"] is ${ newSuperheroesSprdOprtr} `);
