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

for (let i = 1; i <= input; i++){
  let result = ''
  for (let j = 1; j <= input; j++){
    if(i == 1 || i == input || j == 1 || j == input){
      result += 'x';
    }else {
      result += '0';
    }
  }

  console.log(result)
}