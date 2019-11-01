//Business Logic


$(document).ready(function(){
  $(".form-group").submit(function(event){

    event.preventDefault();

    var inputValue = $("input#userInput").val();
    console.log(typeof inputValue);
    var returnDisplay = [];

    for (index=0;index < parseInt(inputValue);index++){
      returnDisplay.push(index +1);

    }

    console.log(returnDisplay);



  });

});
