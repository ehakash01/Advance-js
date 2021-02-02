let bonus = 20;
const sum = (first, second) => {
    let result = first + second + bonus;
    // console.log(result);
    if (bonus > 9) {
        const mood = "Happy";
        console.log(mood);
    }
    return result;
}
const output = sum(3, 7);
// console.log(bonus);
// console.log(output);



// Main summury: Let & const hosse scope variable jeta bracket er vitore thakle er baire declare kora jayna & er ager position jekhane declare kora ase tar upore jayna.
// var shobkhan thekei accessable hobe but jodi tar position er age declare kora hoy tahole just undefine dekhabe but error dibena.