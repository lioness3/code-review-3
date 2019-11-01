//Business Logic

$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();
    $("#visual").text(inputValue);

var inputValue = parseInt($("input#userInput").val());


  if(inputValue === 1){
    console.log(inputValue);
}else if(inputValue === 2){
  console.log("tree");
}else{
}

});







//User Logic



  });
