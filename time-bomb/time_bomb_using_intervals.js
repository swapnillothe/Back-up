const lib = require("say");
const timeBomb = function(){
  let count = 5;
  const blast = function(){
    if(count == 0){
      console.log("BHOOM");
      lib.speak("bhoom");
      clearInterval(t);
      return;
    }
    console.log(count);
    lib.speak(count);
    count--;
  }
  let t = setInterval(blast, 1000); 
} 

timeBomb();
