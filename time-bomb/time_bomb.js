const lib = require("say");
let count = 5;
let sec = new Date().getSeconds();

while(count>0){
  if(sec != new Date().getSeconds()){
    console.log(count);
    lib.speak(count);
    sec = new Date().getSeconds();
    count--;
  }
}
setTimeout( function (){
  lib.speak("hello");
  console.log("hello");
}, 1000);
