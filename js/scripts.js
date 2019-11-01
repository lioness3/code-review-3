//Business Logic









//User Logic
$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();
    var inputValue = $("input#userInput").val();
    console.log(inputValue);
    $("#visual").text(inputValue);



  });
})
