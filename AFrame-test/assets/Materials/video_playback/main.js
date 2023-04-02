AFRAME.registerComponent("vr-controller", {
	dependencies: ["raycaster"],// Important
	init: function(){
		console.log("vr-controller");
		this.el.addEventListener("triggerdown", function(e) {
			const video01 = document.getElementById("video_namahage");
			const box = document.getElementById("play_button");
			if(box.getAttribute("color") == "#F1C40F"){

				if(video01.paused){
					video01.play();
					box.setAttribute("src", "#img_play");
				}else{
					video01.pause();
					box.setAttribute("src", "#img_pause");
				}
			
			}
		});
	}
});