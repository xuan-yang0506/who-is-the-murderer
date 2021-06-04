var trackedItems;

class ItemTrackingModel extends Croquet.Model {
  init() {
    // entityId => {
    //   user: u,
    //   state: s,
    //   detail: {
    //     position: p,
    //     quaternion: q,
    //     velocity: v
    //     angularVelocity: av
    //   }
    // }
    this.possessionMap = new Map();
    
    this.subscribe(this.id, "itemPossesionChanged", this.handleChange);
    this.subscribe(this.id, "updateCoordinate", this.handleUpdate);
    
    this.removeUnnecessaryFree();
  }
  
  // data = {entityId: eId, user: u, state: s, detail: {
  //   position: p,
  //   quaternion: q,
  //   velocity: v,
  //   angularVelocity: av,
  // }
  handleChange(data) {
    if (data.state === "free") {
      this.possessionMap.get(data.entityId).state = "free";
    } else if (data.state === "grabbed") {
      if (this.possessionMap.has(data.entityId)) {
        // probably someone tries to snatch the item from others
        // or take it out from their own inventory
        if (this.possessionMap.get(data.entityId).state === "grabbed") {
          // prevent player from snatching items from others' hand
          return;
        } else {
          this.publish(this.id, "setNewOwner", data);
        }
      }
      this.possessionMap.set(data.entityId, {
        user: data.user,
        state: data.state,
        detail: data.detail
      });
      this.publish(this.id, "reflectPossessionChange", data);
    }
  }
  
  // data = {entityId: eId, detail: {
  //     position: p,
  //     quaternion: q,
  //     velocity: v
  //     angularVelocity: av
  //   }
  // }
  handleUpdate(data) {
    if (this.possessionMap.has(data.entityId)) {
      this.possessionMap.get(data.entityId).detail = data.detail;
    }
  }
  
  removeUnnecessaryFree() {
    for (let eId of this.possessionMap.keys()) {
      let value = this.possessionMap.get(eId);
      if (value.state === "free") {
        let v = value.detail.velocity;
        let av = value.detail.angularVelocity;
        if (v.x**2 + v.y**2 + v.z**2 < 10**-3 && av.x**2 + av.y**2 + av.z**2 < 10**-3) {
          this.possessionMap.delete(eId);
          value.entityId = eId;
          this.publish(this.id, "trulyFree", value);
        }
      }
    }
    this.future(20).removeUnnecessaryFree();
  }
}

ItemTrackingModel.register("ItemTrackingModel");

class ItemTrackingView extends Croquet.View {
  constructor(model) {
    super(model);
    trackedItems = document.getElementsByClassName("movable");
    this.model = model;
    
    this.onGrabStart = this.onGrabStart.bind(this);
    this.onGrabEnd = this.onGrabEnd.bind(this);
    
    this.init();
    
    this.subscribe(model.id, "reflectPossessionChange", this.reflectChange);
    this.subscribe(model.id, "trulyFree", this.reflectTruelyFree);
    this.subscribe(model.id, "setNewOwner", this.reflectNewOwner);
  }
  
  init() {
    for (let el of trackedItems) {
      el.addEventListener("grab-start", this.onGrabStart);
      el.addEventListener("grab-end", this.onGrabEnd);
    }
    
    let map = this.model.possessionMap;
    for (let eId of map.keys()) {
      let value = map.get(eId);
      
      if (value.user === this.viewId) {
        continue;
      }
      
      let el = document.getElementById(eId);
      if (value.state === "grabbed") {
        el.pause();
        this.updateVector(el, value.detail, false);
      }
    }
  }
  
  onGrabStart(evt) {
    let el = evt.target;
    this.publish(this.model.id, "itemPossesionChanged", {
      entityId: el.id,
      user: this.viewId,
      state: "grabbed",
      detail: this.generateVectorDetail(el, false)
    });
  }
  
  onGrabEnd(evt) {
    let el = evt.target;
    
    this.publish(this.model.id, "itemPossesionChanged", {
      entityId: el.id,
      user: this.viewId,
      state: "free",
      detail: this.generateVectorDetail(el, true)
    });
  }
  
  // data = {entityId: eId, user: u, state: s, detail: {
  //   position: p,
  //   quaternion: q,
  //   velocity: v,
  //   angularVelocity: av,
  // }
  reflectChange(data) {
    if (data.user === this.viewId) {
      return;
    }
    
    let el = document.getElementById(data.entityId);
    if (data.state === "grabbed") {
      el.pause();
      this.updateVector(el, data.detail, false);
    }
  }
  
  reflectTruelyFree(data) {
    if (data.user !== this.viewId) {
      let el = document.getElementById(data.entityId);
      this.updateVector(el, data.detail, true);
      el.play();
    }
  }
  
  reflectNewOwner(data) {
    let el = document.getElementById(data.entityId);
    if (data.user === this.viewId) {
      this.updateVector(el, data.detail, false);
      el.play();
    } else {
      el.pause();
      this.updateVector(el, data.detail, false);
    }
  }
  
  // this function is automatically called by Croquet once every main loop
  update(t) {
    let map = this.model.possessionMap;
    for (let eId of map.keys()) {
      let value = map.get(eId);
      
      let el = document.getElementById(eId);
      if (value.user === this.viewId) {
        this.publish(this.model.id, "updateCoordinate", {
          entityId: eId,
          detail: this.generateVectorDetail(el, true)
        });
      } else {
        this.updateVector(el, value.detail, false);
      }
    }
  }
  
  updateVector(el, detail, complete) {
    el.object3D.position.copy(detail.position);
    el.object3D.quaternion.copy(detail.quaternion);
    if (complete) {
      el.body.velocity.copy(detail.velocity);
      el.body.angularVelocity.copy(detail.angularVelocity);
    } 
  }
  
  generateVectorDetail(el, complete) {
    let detail = {};
    
    let position = el.object3D.position;
    let quaternion = el.object3D.quaternion;
    
    detail.position = {x: position.x, y: position.y, z: position.z};
    detail.quaternion = {x: quaternion.x, y: quaternion.y, z: quaternion.z, w: quaternion.w};
    
    if (complete) {
      let velocity = el.body.velocity;
      let angularVelocity = el.body.angularVelocity;
      
      detail.velocity = {x: velocity.x, y: velocity.y, z: velocity.z};
      detail.angularVelocity = {x: angularVelocity.x, y: angularVelocity.y, z: angularVelocity.z};
    }
    
    return detail;
  }
  
  detach() {
    for (let el of trackedItems) {
      el.removeEventListener("grab-start", this.onGrabStart);
      el.removeEventListener("grab-end", this.onGrabEnd);
    }
    super.detach();
  }
}

Croquet.Session.join({
  appId: "com.netaizzzz",
  name: "netaizzz",
  password: "zz",
  model: ItemTrackingModel,
  view: ItemTrackingView,
});
