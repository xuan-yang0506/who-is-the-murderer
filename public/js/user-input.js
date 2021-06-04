var HANDS = { left: "leftHand", right: "rightHand" };

AFRAME.registerComponent("controller-input", {
  init: function() {
    this.rig = document.getElementById("rig");

    this.onAButtonClick = this.onAButtonClick.bind(this);
    this.onBButtonClick = this.onBButtonClick.bind(this);

    this.el.addEventListener("abuttonup", this.onAButtonClick);
    this.el.addEventListener("bbuttonup", this.onBButtonClick);
  },

  remove: function() {
    this.el.removeEventListener("abuttonup", this.onAButtonClick);
    this.el.removeEventListener("bbuttonup", this.onBButtonClick);
  },

  onAButtonClick: function() {
    if (this.rig.is("rGrabbing")) {
      // try storing the objects currently grabbed by the right hand
      storeGrabbedByRHand();
    } else if (this.rig.is("lGrabbing")) {
      // try storing the objects currently grabbed by the left hand
      storeGrabbedByLHand();
    } else if (this.rig.is("showing-script")) {
      // move the script in front of the camera
      moveScriptPanel();
    } else if (this.rig.is("showing-inventory")) {
      // move the inventory in front of the camera
      moveInventory();
    } else {
      // open inventory
      openInventory();
    }
  },

  onBButtonClick: function() {
    if (this.rig.is("showing-script")) {
      // close script panel
      closeScriptPanel();
    } else if (this.rig.is("showing-inventory")) {
      // close inventory
      closeInventory();
    } else {
      // open inventory
      openInventory();
    }
  }
});

// AFRAME.registerComponent("sync-pos-with-cam", {
//   init: function() {
//     this.cam = document.getElementById("player");
//   },

//   tick: function() {
//     // make sure that camera has no x and z offset with rig at any time
//     this.el.object3D.position.x += this.cam.object3D.position.x;
//     this.el.object3D.position.z += this.cam.object3D.position.z;
//     this.cam.object3D.position.x = 0;
//     this.cam.object3D.position.z = 0;
//   }
// })
