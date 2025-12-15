let score: number = Number(process.argv[2]);


if(Number.isNaN(score)){
  console.log('Invalid Input');
}else if(score < 0 || score > 100){
  console.log('Invalid Input');
}else if(score >= 80){
  console.log('Grade is A');
}else if(score >= 70){
  console.log('Grade is B');
}else if(score >= 60){
  console.log('Grade is C');
}else if(score >= 50){
  console.log('Grade is D');
}else if(score < 50){
  console.log('Grade is F');
}