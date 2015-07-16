// Handle the click event on a node
function doClick(_event) {
	console.log("Do click");
};

Ti.App.addEventListener("sliderToggled", function(e) {
	if (e.hasSlided) {
		$.scrollView.touchEnabled = false;
	}
	else {
		$.scrollView.touchEnabled = true;
	}
});