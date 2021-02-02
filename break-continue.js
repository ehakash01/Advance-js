const numbers = [1, -2, 3, 4, -5, -6, 7, -8, 9];
for (let i = 0; i < numbers.length; i++) {
    // const element = numbers[i];
    if (numbers[i] > 1) {
        break;
    }
    // console.log(numbers[i]);
}

// break deya mane hosse shorto match korle code oikhanei stop 


for (let i = 0; i < numbers.length; i++) {
    // const element = numbers[i];
    if (numbers[i] < 0) {
        continue;
    }
    console.log(numbers[i]);
}

// continue mane hosse ek kothay shorto match hole jeita match hobe oitare skip kore bakigulare dekhabe