function sumOfZero(arr){
  
    for(let number of arr) {
     for(let j = 0; j<arr.length; j++) {
       if(number + arr[j] === 0 ){
        return [number, arr[j]]
       }else{
        return 'not a num in array this is sum of zero';
       }
        }
    }

}

 let result = sumOfOne([-1,-4,-5,0,9,5,8,2]);
 console.log(result);