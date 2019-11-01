//Business Logic


$(document).ready(function(){
  $(".form-group").submit(function(event){

    event.preventDefault();

    var inputValue = $("input#userInput").val();
    var userAnswer = (inputValue).toString();
    var returnDisplay = [];

// for(index 0;index<userAnswer.length;index++){
// function generateRange(min,max,step){
// for (index=min; index<=max index=index+step){
//   console.log(.push(index));
for (var index=inputValue; index >=0 ; index-=1)
$("#visual").prepend(index + ",");

//   if(userAnswer === "3"){
//  true;
// }else if(userAnswer === "2"){
// true;
// }else if(userAnswer === "1"){
// true;
// }else{
//   console.log("ooops!");
// };







// "I'm sorry, Dave. I'm afraid I can't do that."

//User Logic


});

  });
