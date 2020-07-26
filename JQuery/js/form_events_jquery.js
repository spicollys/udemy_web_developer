$(document).ready(function(){
	//focus - shoot an event when the element receive focus
	//blur - shoot an event when the element loose focus
	//change - shoot an event when the element anyway changes 
	$('.field1').change(function(){
		alert('element has changed');
	});
});