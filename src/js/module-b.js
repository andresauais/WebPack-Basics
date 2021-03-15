$(document).ready(function(){
  $("#demo").mouseover(function(){
    $("#demo").css("background-color", "yellow");
  });
  $("#demo").mouseout(function(){
    $("#demo").css("background-color", "white");
  });
});