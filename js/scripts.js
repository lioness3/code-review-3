//Business Logic









//User Logic
$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();
    var inputValue = $(parseInt("input#userInput")).val();

    $("h1#visual").text(inputValue);



  });
})
