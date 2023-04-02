var img_id = 1;
AFRAME.registerComponent("vr-controller", {
	dependencies: ["raycaster"],// Important
	init: function(){
		console.log("vr-controller");
		this.el.addEventListener("triggerdown", function(e) {
			const my_img = document.getElementById("my_img");
			const box = document.getElementById("next_button");
			const box_prev = document.getElementById("prev_button");

			if(box.getAttribute("color") == "#F1C40F"){
				switch(img_id){
					case 1:
						my_img.setAttribute("src", "#paint_2");
						img_id = img_id + 1;
						break;

					case 2:
						my_img.setAttribute("src", "#paint_3");
						img_id = img_id + 1;
						break;
				
					case 3:
						my_img.setAttribute("src", "#paint_4");
						img_id = img_id + 1;
						break;

					case 4:
						my_img.setAttribute("src", "#paint_1");
						img_id = 1;
						break;
				}	

			}

			if(box_prev.getAttribute("color") == "#F1C40F"){
				switch(img_id){
					case 1:
						my_img.setAttribute("src", "#paint_4");
						img_id = 4;
						break;

					case 2:
						my_img.setAttribute("src", "#paint_1");
						img_id = img_id - 1;
						break;
				
					case 3:
						my_img.setAttribute("src", "#paint_2");
						img_id = img_id - 1;
						break;

					case 4:
						my_img.setAttribute("src", "#paint_3");
						img_id = img_id - 1;
						break;
				}	

			}
		});
	}
	});