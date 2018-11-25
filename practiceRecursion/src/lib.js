const getFactorial = function(number,ans=1){
  if( number<2 ){
    return ans;
  }

  ans = ans*(number);
  ans = getFactorial((number-1),ans);
  return ans;
}

const getFibo = function(n){
  if(n<=1){
    return n;
  }
  return getFibo(n-1)+getFibo(n-2);
}

console.log(getFibo(process.argv[2]));
