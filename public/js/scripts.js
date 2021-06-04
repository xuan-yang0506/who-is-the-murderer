var SCRIPT_PANEL_POS = new THREE.Vector3(0, 0, -0.5); // relative to camera

AFRAME.registerComponent("show-script", {
  init: function() {
    this.onGrabStart = this.onGrabStart.bind(this);

    this.el.addEventListener("grab-start", this.onGrabStart);
  },

  remove: function() {
    this.el.removeEventListener("grab-start", this.onGrabStart);
  },

  onGrabStart: function(evt) {
    let scriptPanel = document.getElementById("scriptPanel");

    scriptPanel.setAttribute("text", "value", SCRIPTS[evt.target.id]);
    moveScriptPanel();
    scriptPanel.setAttribute("visible", true);
  }
});

function moveScriptPanel() {
  let scriptPanel = document.getElementById("scriptPanel");
  let camera = document.getElementById("player");

  scriptPanel.object3D.position.copy(SCRIPT_PANEL_POS);
  camera.object3D.localToWorld(scriptPanel.object3D.position);
  scriptPanel.object3D.rotation.copy(camera.object3D.rotation);
  scriptPanel.object3D.rotation.z = 0;
}

function closeScriptPanel() {
  let rig = document.getElementById("rig");
  let scriptPanel = document.getElementById("scriptPanel");

  scriptPanel.setAttribute("visible", false);
  rig.removeState("showing-script");
}
