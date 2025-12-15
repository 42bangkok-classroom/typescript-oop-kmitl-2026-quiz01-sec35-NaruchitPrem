import { wrap } from "module";

let balance: number = +process.argv[2];
let withdraw: number = +process.argv[3];

if (!balance) {
  console.log('Invalid Input');
  process.exit();
}
if (!withdraw) {
  console.log('Invalid Input');
  process.exit();
}


if(Number.isNaN(balance)){
    console.log('Invalid Input');
    process.exit();
}

if(Number.isNaN(withdraw)){
    console.log('Invalid Input');
    process.exit();
}

if(withdraw > balance && withdraw <= 5000){
    console.log('Insufficient balance');
}else if(withdraw > 5000){
    console.log('Exceeds per-withdrawal limit');
}else{
    console.log('Withdrawal approved');
}