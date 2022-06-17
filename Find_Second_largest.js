const find = (arr)=>{
    let slarnum
    let flarnum = ( slarnum = Math.min(...arr));

for(let i=0;i<arr.length;i++) {

if(arr[i]>flarnum){
    slarnum = flarnum
    flarnum = arr[i];
}else if(arr[i] > slarnum && arr[i] !== flarnum){

    slarnum = arr[i];

}

    }
    return slarnum;
}

console.log(find([12, 35, 1, 10, 34, 1]))