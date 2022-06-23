function sumOfZero(arr){
  
    for(let number of arr) {
        console.log('outer loop')
     for(let j = 1; j<arr.length; j++) {
        console.log('innerloop');
       if(number + arr[j] === 0 ){
        return [number, arr[j]]
       }
        }
    }

}  
let result = sumOfZero([-5,-4,-2,-1,0,2,3,4,8,9]);
console.log(result);

// function sumOfZero(arr){
// let left = 0;
// let right = arr.length-1;
// while (left < right){
//  let sum = arr[left]+arr[right];
//    if(sum === 0){
//   return  [arr[left], arr[right]];
//    }else if(sum > 0){
//    right--;
//    }else{
//     left++
//    }
// }
// }
// let result = sumOfZero([-5,-4,-2,-1,0,2,3,4,8,9]);
// console.log(result);