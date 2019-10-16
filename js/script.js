// ******************************* 
// Module 4 Solution
// *******************************

(function(window) {


  var names = ["Hasan", "Joud", "Jad", "Jina", "Ahmad", "Tarek", "Layla", "Mostafa", "Dima", "Jyana"];

var i = 0;
for (var name in names) {

  
   var firstLetter = names[name].charAt(0);
   var result=firstLetter.toLowerCase();


  if (result ==='j') {
     byeSpeaker.speak(names[name]);
  } else {
     helloSpeaker.speak(names[name]);
  }
}

})(window);