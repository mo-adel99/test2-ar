
document.addEventListener("DOMContentLoaded", function(){
  AFRAME.registerComponent('click-handler', {
    init: function () {
      
      this.el.addEventListener('click', e => {
        this.el.setAttribute("visible", false);
        document.querySelector("#main-video").play();
      });
    }
  });
});
  

window.addEventListener("load", setup);

function setup() {

    const myImageGroup = document.getElementById("image-group");

    let imageVisible = false;

    myImageGroup.addEventListener("zappar-visible", () => {
        // The image has appeared so show the group
        myImageGroup.setAttribute("visible", "true");
        imageVisible = true;
    });

    myImageGroup.addEventListener("zappar-notvisible", () => {
        // The image has disappeared so hide the group after a short delay
        imageVisible = false;
        setTimeout(() => {
            if (imageVisible === false) myImageGroup.setAttribute("visible", "false");
        }, 500)
    });

}
