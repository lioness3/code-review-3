//Business Logic


$(document).ready(function(){
  $(".form-group").submit(function(event){

    event.preventDefault();

    var inputValue = $("input#userInput").val();
    console.log(typeof inputValue);
    var returnDisplay = [];

    for (index=0;index < parseInt(inputValue)+1;index++){

      if (index === 3){
        returnDisplay.push("I'm sorry, Dave. I'm afraid I can't do that.");
      }else if (index === 2) {
        returnDisplay.push("Boop!");
      }else if (index === 1) {
        returnDisplay.push("Beep!");
      }else {
        returnDisplay.push(index);
      }
    }

    console.log(returnDisplay);



  });

});
