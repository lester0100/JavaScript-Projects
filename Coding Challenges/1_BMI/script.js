let massMark = 78;    //in kg
let heigtMark = 1.69   //in m
let massJohn = 95;    //in kg
let heightJohn = 1.88;  //in m

let BMIMark = massMark / (heigtMark * heigtMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

let markHigherBMI = BMIMark > BMIMark;
console.log(markHigherBMI);