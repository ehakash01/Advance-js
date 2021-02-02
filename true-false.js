// Falsy:
// false
// 0
// ""
// undefined
// null
// NaN


// Truthy:
// "0" , " " , [] , {}


let name = 0;
if (name || name == 0) {
    console.log("Condition is true");
}
else {
    console.log("Condition is False");
}