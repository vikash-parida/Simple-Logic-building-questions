//chack  string anagram
// hello -> lleho

// condition
//first check if string length are equal of both strings
// strings 'hello' 
//{h:1,e:1,l:2,o:1}

//check firststring  and secondstring count letters are same  is anagrame


function isAnagram(string1,string2){
    if(string1.length !== string2.length){
        return false;
    }
    let counter = {};
    
    for (let letters of string1){
      counter[letters] = (counter[letters] || 0)+1
      
    }

    for (let item of string2){
        if(!counter[item]){
            return false;
        }
        counter[item] -= 1;
     
    }
   
    return true;
    
}

let result  = isAnagram('vikashhh','ashivkhh');
console.log(result);