export{}
let result: number = 0;
let number: number

for (let i = 2; i < process.argv.length; i++) {
    
    let input: number = (+process.argv[i]);
    if (!input) {
        console.log('Invalid Input');
        process.exit();
    }
    if (Number.isNaN(input) || input <= 0){
        console.log('Invalid Input');
        process.exit();
    }
    if (!isNaN(Number(input))) {
      number = Number(input);
      result = result + number;
    }
}

console.log(`Sum: ${result}`);