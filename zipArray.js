const zip = function(array1, array2){
  for(let index=0; index<array2.length; index++){
    let element = array2[index];
    let a = array1[index];
    a[a.length] = element;
  }
  return array1;
}

const getArray = function(){
  return [];
}

let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [7,8,9];
let array4 = [10, 11, 12];
let a = [array1, array2, array3, array4];
let length = Math.max(array1.length, array2.length, array3.length);
let result = new Array(length).fill(1).map(getArray);
b = a.reduce(zip,result = result);
console.log(b);

