let oper: string = process.argv[2];
let num1: number = +process.argv[3];
let num2: number = +process.argv[4];
let operToLow: string = oper.toLowerCase()

if (process.argv[2] === "" || process.argv[3] === "" || process.argv[1] === "") {
    console.log('Invalid input');
    process.exit();
}

if (process.argv[2] === undefined || process.argv[3] === undefined || process.argv[1] === undefined) {
    console.log('Invalid input');
    process.exit();
}

if(Number.isNaN(num1) || Number.isNaN(num2)){
    console.log('Invalid input');
    process.exit();
}

if(operToLow !== 'add' && operToLow !== 'sub' && operToLow !== 'div' && operToLow !== 'mul'){
    console.log('Invalid operator');
    process.exit();
}

let result: number

if(operToLow == 'add'){
    result = num1 + num2;
    console.log(`${result}`)
}else if(operToLow == 'sub'){
    result = num1 - num2;
    console.log(`${result}`)
}else if(operToLow == 'div'){
    result = num1 / num2;
    console.log(`${result}`)
}else if(operToLow == 'mul'){
    result = num1 * num2;
    console.log(`${result}`)
}

