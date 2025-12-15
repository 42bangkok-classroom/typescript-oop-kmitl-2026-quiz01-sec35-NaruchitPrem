export{}
let input = +process.argv[2];

if (!input) {
  console.log('Invalid Input');
  process.exit();
}

if (Number.isNaN(input) || input <= 0){
  process.exit()
}
for (let i = 1; i <= input; i++){
  if (i % 5 === 0 && i % 3 === 0){
    console.log('FooBar');
  }else if (i % 3 === 0){
    console.log('Foo');
  }else if (i % 7 === 0){
    console.log('Bar');
  }else if (!(i % 3 === 0 || i % 7 === 0)){
    console.log(i);
  }
}