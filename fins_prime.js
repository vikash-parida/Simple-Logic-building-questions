let num = [[1,[2,3]],[1,2,3,4,[5,[6,7],8],9,10,[11,12,13],14,],[15,[16,[17,18],19],20]];
 let num2 = num.flat(3);
console.log(num2);
let result = [];
function isPrime(num) {
  if(num < 2) return false

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num2.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);