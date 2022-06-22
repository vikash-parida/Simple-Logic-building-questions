function sumOfOne(arr){
  
    for(let number of arr) {
     for(let j = 0; j<arr.length; j++) {
       if(number + arr[j] === 0 ){
        return [number, arr[j]]
       }
        }
    }

}

 let result = sumOfOne([-1,-2,-4,-5,0,9,5,8,2]);
 console.log(result);