AFRAME.registerComponent("manipulate-grabbing-state", {
  init: function() {
    this.rig = document.getElementById("rig");
    
    this.onGrabStart = this.onGrabStart.bind(this);
    this.onGrabEnd = this.onGrabEnd.bind(this);
    
    this.el.addEventListener("grab-start", this.onGrabStart);
    this.el.addEventListener("grab-end", this.onGrabEnd);
  },
  
  remove: function() {
    this.el.removeEventListener("grab-start", this.onGrabStart);
    this.el.removeEventListener("grab-end", this.onGrabEnd);
  },
  
  onGrabStart: function(evt) {
    if (evt.detail.hand.id === HANDS.left) {
      this.rig.addState("lGrabbing");
      grabbedByLHand = evt.target;
    } else if (evt.detail.hand.id === HANDS.right) {
      this.rig.addState("rGrabbing");
      grabbedByRHand = evt.target;
    }
  },
  
  onGrabEnd: function(evt) {
    if (evt.detail.hand.id === HANDS.left) {
      this.rig.removeState("lGrabbing");
      grabbedByLHand = null;
    } else if (evt.detail.hand.id === HANDS.right) {
      this.rig.removeState("rGrabbing");
      grabbedByRHand = null;
    }
  }
})



AFRAME.registerComponent("add-showing-script-state", {
  init: function() {
    this.rig = document.getElementById("rig");
    
    this.onGrabEnd = this.onGrabEnd.bind(this);
    
    this.el.addEventListener("grab-end", this.onGrabEnd);
  },
  
  remove: function() {
    this.el.removeEventListener("grab-end", this.onGrabEnd);
  },
  
  onGrabEnd: function() {
    this.rig.addState("showing-script");
  }
})