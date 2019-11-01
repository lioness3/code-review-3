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
for (var index=inputValue; index >=0 ; index-=1){

  (returnDisplay).push(index + ",");
if(returnDisplay.includes("3")){
 returnDisplay.replace(/"3"/g, "I'm sorry, Dave. I'm afraid I can't do that.");
 console.log(returnDisplay);
}
// else if(userAnswer === "2"){
// var answer2=userAnswer.replace(/2/g,"Boop!")
// }else if(userAnswer === "1"){
// true;
// }
else{
  console.log("ooops!");
};
};






// "I'm sorry, Dave. I'm afraid I can't do that."

//User Logic


});

  });
