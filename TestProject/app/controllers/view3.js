console.log("test 1");
var slided = false;
$.timap.touchEnabled = false;
console.log("test 2");
$.view3.addEventListener("swipe", function(_event) {
    console.log("swipe");
    if(_event.direction == "right") {
    	console.log("right");
        slided = false;
    } else if(_event.direction == "left") {
    	console.log("left");
        slided = true;
    }
    if(slided == false){
    	console.log("touchDisabled");
    	$.timap.touchEnabled = false;
    }else{   	
    	console.log("touchEnabled");
    	$.timap.touchEnabled = true;
    }
});

Ti.App.addEventListener("sliderToggled", function(e) {
	console.log("sliderToggled");
	if (e.hasSlided) {
		console.log("touchDisabled");
		$.timap.touchEnabled = false;
	}
	else {
		console.log("touchEnabled");
		$.timap.touchEnabled = true;
	}
});
console.log("test 3");