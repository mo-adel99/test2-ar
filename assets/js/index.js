
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
  
AFRAME.registerComponent("visibility-changer", {
  init: function () {
      this.el.setAttribute("visible", false)
      this.el.sceneEl.addEventListener('zappar-visible', () => this.el.setAttribute("visible", true));
  }
});