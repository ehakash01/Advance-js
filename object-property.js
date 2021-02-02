const students = [
    {id: 21, name: "Omor sunny"},
    {id: 31, name: "Maannaaaa"},
    {id: 41, name: "Moyuri"},
    {id: 71, name: "Dipjol"},
]

// const nameArray = [];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     nameArray.push(element.name)
// }

// console.log(nameArray);

const names = students.map(s => s.name);   //jehetu map array dibe so auto array er moddhe dhukbe
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);