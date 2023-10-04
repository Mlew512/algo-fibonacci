function fibonacci(num) {
  if (num===0){
    return 0;
  }
  let index=2;
  let fib1=1
  let fib2=1
  while (index < num){
    let newfib = fib1 +fib2;
    fib1 = fib2
    fib2=newfib
    index ++
  }
return fib2
}

module.exports = fibonacci;
console.log(fibonacci(2)); // 2
console.log(fibonacci(7)); // 13
