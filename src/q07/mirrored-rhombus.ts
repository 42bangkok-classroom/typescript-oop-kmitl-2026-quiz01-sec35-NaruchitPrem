export{}
let input = +process.argv[2];
if (!input) {
    console.log('Invalid Input');
    process.exit();
}
if (Number.isNaN(input) || input <= 0){
    console.log('Invalid input');
    process.exit()
}

for (let i = 0; i < input; i++){
  let result = ''
  for (let x = i; x > 0; x --){
    result += ' '
  }
  for (let j = 0; j < input; j++){
    result += '*'
  }
  console.log(result)
}