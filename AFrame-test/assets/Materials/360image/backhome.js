 AFRAME.registerComponent('backhome', {
 
    
   init: function () {
     
      let homeworldelements = document.querySelectorAll(".homeworld");
      let sky = document.querySelector("#sky");
      // let videosphere = document.querySelector("#videosphereentity");

      
      let gobackhome = () => {
        console.log("#go back home")
        sky.setAttribute("src", "#skyTexture");
        // videosphere.setAttribute("radius", "1");
        homeworldelements.forEach((homeworldelement) => {
          homeworldelement.setAttribute("visible", true)})
    }

      this.el.addEventListener('mouseenter', gobackhome);
        
   }});