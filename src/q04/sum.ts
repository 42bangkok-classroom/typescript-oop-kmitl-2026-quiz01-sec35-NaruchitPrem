let result: number = 0;
let number: number

if (Number.isNaN(+process.argv[1]) || +process.argv[1] <= 0 || !Number.isInteger(+process.argv[1])) {
    console.log('Invalid Input');
    process.exit();
}

if (process.argv[1] === "") {
    console.log('Invalid Input');
    process.exit();
}

for (let i = 1; i < process.argv.length; i++) {
    
    let input: number = (+process.argv[i]);
    if (!input && input != 0) {
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