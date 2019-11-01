//Business Logic


$(document).ready(function(){
  $(".form-group").submit(function(event){

    event.preventDefault();

    var inputValue = $("input#userInput").val();
    console.log(typeof inputValue);
    var returnDisplay = [];

    for (var index=0;index < parseInt(inputValue)+1;index++){
      for (var individual = 0;individual < index.toString().length;individual++){
        var digit = index.toString()[individual];
        if (digit === "3"){
          returnDisplay.push("I'm sorry, Dave. I'm afraid I can't do that.");
        }else if (digit === "2") {
          returnDisplay.push("Boop!");
        }else if (digit === "1") {
          returnDisplay.push("Beep!");
        }else {
          returnDisplay.push(index);
        }
      }
    }

    console.log(returnDisplay);



  });

});
