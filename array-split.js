const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const part = numbers.slice(1, 3);  //index 1 theke shuru kore index 3 er aag porjonto just tule ene dekhabe & ager array thiki thakbe 
const removed = numbers.splice(1, 3, 77, 78)  //index 1 theke shuru kore 3 ta element shorabe & original array theke ber kore dibe .... ebong er pore joto item chaai shob inject korte parbo oi array er moddhe jeta iccha ... like 77, 78, 79, 80 .....

console.log(part);
console.log(removed);
console.log(numbers);

const togather = numbers.join(",");
console.log(togather);
