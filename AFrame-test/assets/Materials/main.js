AFRAME.registerComponent("vr-controller", {
dependencies: ["raycaster"],// Important
init: function(){
	console.log("vr-controller");
	this.el.addEventListener("triggerdown", function(e) {
		const box = document.getElementById("my_box");
		const text = document.getElementById("my_text");
		if(box.getAttribute("color") == "#F1C40F"){
			if(text.getAttribute("value") == "")
				text.setAttribute("value", "he elements of painting are the basic components or building blocks of a painting. In Western art, they are generally considered to be color, tone, line, shape, space, and texture. In general, we tend to agree that there are seven formal elements of art.");
			else
				text.setAttribute("value", "");
		
		}
	});
}
});