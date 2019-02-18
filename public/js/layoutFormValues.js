$(document).mouseup(function(){
	var json = convertCanvasToJson();
	$("#jsonForDatabase").val(json);
});

$(document).bind( "mouseup touchend", function(e){
	var json = convertCanvasToJson();
  $("#jsonForDatabase").val(json);
}); 

$( document ).ready(function() {
  var json = convertCanvasToJson();
  $("#jsonForDatabase").val(json);
});