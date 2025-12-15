export{}
let input = +process.argv[2];

if (!input && input != 0) {
    console.log('Invalid Input');
    process.exit();
}
if (Number.isNaN(input) || input <= 0){
    console.log('Invalid input');
    process.exit()
}

let result = ''
for (let i = input; i > 0; i--){
  for (let j = i; j > 0; j--){
    result += j
  }
  result += '\n'
}console.log(result)