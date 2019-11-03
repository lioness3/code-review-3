
//User Logic

$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();


    $("#visualDisplay").toggle();


//business Logic
    var inputValue = $("input#userInput").val();
    $('input#userInput').val('');
    var returnDisplay = [];

    for (var index=0;index <= parseInt(inputValue);index++){
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

    document.getElementById("visual").innerHTML = returnDisplay.join(", ");
    $(inputValue).hide();
  });
});
