// Business Logic
var finalView = function(int) {
  var returnDisplay = [];

  for (var index=0;index <= int;index++){
    var newString = index.toString();
     if (newString.includes("3")){
      returnDisplay.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }else if (newString.includes("2")) {
      returnDisplay.push("Boop!");
    }else if (newString.includes("1")) {
      returnDisplay.push("Beep!");
    } else{
      returnDisplay.push(index);
    };
  };
  return returnDisplay.join(", ");
}

// User Logic.
$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();

    var inputValue = parseInt($("input#userInput").val());
    //Joins phrases in the new string and returns it to the user display.
    document.getElementById("visual").innerHTML = finalView(inputValue);
    $('input#userInput').val('');
    $("#visualDisplay").fadeIn();
    //Clears input
  });
});
