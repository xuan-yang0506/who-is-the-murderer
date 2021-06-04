var HANDS = { left: "leftHand", right: "rightHand" };
var ballot = null;
var submit = false;
let reset = true;
let hidden = false;

AFRAME.registerComponent("controller-input", {
  init: function() {
    this.rig = document.getElementById("rig");

    this.onAButtonClick = this.onAButtonClick.bind(this);
    this.onBButtonClick = this.onBButtonClick.bind(this);

    this.el.addEventListener("abuttonup", this.onAButtonClick);
    this.el.addEventListener("bbuttonup", this.onBButtonClick);
    this.el.addEventListener("thumbstickmoved", this.onThumbStickMove);
    this.el.addEventListener("ybuttondown", this.onYButtonDown);
    this.el.addEventListener("thumbstickdown", this.onThumbStickDown);
  },

  remove: function() {
    this.el.removeEventListener("abuttonup", this.onAButtonClick);
    this.el.removeEventListener("bbuttonup", this.onBButtonClick);
  },
  
  onThumbStickDown: function() {
    if (!hidden) {
      document.getElementById("aod").setAttribute("visible", "false");
      document.getElementById("textDisplay").setAttribute("visible", "false");
    } else {
      document.getElementById("aod").setAttribute("visible", "true");
      document.getElementById("textDisplay").setAttribute("visible", "true");
    }
    hidden = !hidden;
  },
  
  onThumbStickMove: function(evt) {
    if (ballot != null && !submit) {
      if (evt.detail.x < -0.95) { 
        if (reset) {
          reset = false;
          if (ballot > 0) {
            ballot--;
          }
        }
      } else if (evt.detail.x > 0.95) {
        if (reset) {
          reset = false;
          if (ballot < ROLES.length - 2) {
            ballot++;
          }
        }
      } else {
        reset = true;
      }
    }
  },
  
  onYButtonDown: function(evt) {
    if (ballot != null) {
      submit = true;
    }
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
