var INVENTORY_POS = new THREE.Vector3(0, 0, -0.4); // relative to camera
var INVENTORY_DEPTH = 0.2;
var HALF_INVENTORY_LIM = 5;

var gridCenters = new Array(0);

var grabbedByRHand = null;
var grabbedByLHand = null;
var numCollidingWithInventory = 0;

var itemsInInventory = new Array(HALF_INVENTORY_LIM * 2).fill(null);
var inventoryItemCount = 0;

// visual view of inventory:
// 0 1 ... HALF_INVENTORY_LIM-1
// HALF_INVENTORY_LIM HALF_INVENTORY_LIM+1 ... 2*HALF_INVENTORY_LIM-1

function moveInventory() {
  let rig = document.getElementById("rig");
  let inventory = document.getElementById("inventory");
  let camera = document.getElementById("player");

  inventory.object3D.position.copy(INVENTORY_POS);
  camera.object3D.localToWorld(inventory.object3D.position);
  rig.object3D.worldToLocal(inventory.object3D.position);
  inventory.object3D.rotation.copy(camera.object3D.rotation);
  inventory.object3D.rotation.z = 0;
}

function openInventory() {
  let rig = document.getElementById("rig");
  let inventory = document.getElementById("inventory");

  moveInventory();

  inventory.setAttribute("geometry", {
    width: HALF_INVENTORY_LIM * INVENTORY_DEPTH,
    height: 2 * INVENTORY_DEPTH,
    depth: INVENTORY_DEPTH
  });

  inventory.setAttribute("material", "opacity", 0.3);
  inventory.setAttribute("static-body", {});
  inventory.setAttribute("droppable", "accepts: .movable");
  inventory.setAttribute("visible", true);
  rig.addState("showing-inventory");
}

function closeInventory() {
  let rig = document.getElementById("rig");
  let inventory = document.getElementById("inventory");

  inventory.removeAttribute("static-body");
  inventory.removeAttribute("velocity");
  inventory.removeAttribute("droppable");
  inventory.setAttribute("visible", false);
  rig.removeState("showing-inventory");
}

function storeGrabbedByLHand() {}

function storeGrabbedByRHand() {}

AFRAME.registerComponent("interact-with-inventory", {
  init: function() {
    this.changeRatio = 1;
    this.acceptable = false;
    this.justDropped = false;  //TODO: perhaps remove this line

    this.inventory = document.getElementById("inventory");

    this.onDragOverStart = this.onDragOverStart.bind(this);
    this.onDragOverEnd = this.onDragOverEnd.bind(this);
    this.onDragDrop = this.onDragDrop.bind(this);
    this.onGrabStart = this.onGrabStart.bind(this);

    this.el.addEventListener("dragover-start", this.onDragOverStart);
    this.el.addEventListener("dragover-end", this.onDragOverEnd);
    this.el.addEventListener("drag-drop", this.onDragDrop);
    this.el.addEventListener("grab-start", this.onGrabStart);
  },

  remove: function() {
    this.el.removeEventListener("dragover-start", this.onDragOverStart);
    this.el.removeEventListener("dragover-end", this.onDragOverEnd);
    this.el.removeEventListener("drag-drop", this.onDragDrop);
    this.el.removeEventListener("grab-start", this.onGrabStart);
  },

  onDragOverStart: function() {
    if (!this.inventory.is("dragover")) {
      // technically, here should never be reached because all entities that this
      // component attachs to should be acceptable by the inventory
      return;
    }

    this.acceptable = true;

    let collidingItem = this.el;
    let mbb = MIN_BOUNDING_BOX[collidingItem.id];
    let scale = collidingItem.object3D.scale;
    let maxSide = Math.max(
      mbb[0] * scale.x,
      mbb[1] * scale.y,
      mbb[2] * scale.z
    );
    let maxAcceptable = (INVENTORY_DEPTH / 2) * Math.sqrt(2);
    this.changeRatio = maxAcceptable / maxSide;
    scale.multiplyScalar(this.changeRatio);
    collidingItem.setAttribute("scale", scale); // TODO: though seems unnecessary, have to do this for potential re-parenting

    numCollidingWithInventory += 1;
    this.inventory.setAttribute("material", "opacity", 0.8);
  },

  onDragOverEnd: function() {
    if (!this.acceptable) {
      // Again, here should never be reached
      return;
    }
    this.acceptable = false;
    
    numCollidingWithInventory -= 1;
    if (numCollidingWithInventory === 0) {
      this.inventory.setAttribute("material", "opacity", 0.3);
    }

    if (this.justDropped) {
      // re-parenting
      this.justDropped = false;
      let el = this.el;
      el.flushToDOM(true);
      el.parentElement.removeChild(el);
console.log(el);
console.log(el.components);
      let reparented = el.cloneNode();
console.log(reparented);
console.log(reparented.components);
      this.inventory.appendChild(reparented);
    } else {
      this.el.object3D.scale.divideScalar(this.changeRatio);
      this.changeRatio = 1;
    }    
  },
  
  onDragDrop: function(evt) {
    if (inventoryItemCount === HALF_INVENTORY_LIM * 2) {
      inventoryFullWarning();
      return;
    }
    
    let droppedEntity = this.el;  // technically, "this.el" should always be "evt.target"
    
    let gridIndex = nearestEmptyGridIndex(evt.detail.hand.object3D.position);
    let targetPos = gridCenters[gridIndex];
    
    inventoryItemCount += 1;
    itemsInInventory[gridIndex] = this.el.id;
    
    droppedEntity.setAttribute("dynamic-body", "type", "static");  // to perserve collider
    droppedEntity.setAttribute("collision-filter", "collisionForces", false);
    droppedEntity.removeAttribute("draggable");
    droppedEntity.setAttribute("in-inventory", {});
    droppedEntity.setAttribute("position", targetPos);
    
    this.justDropped = true;  // see onDragOverEnd for usage
  },
  
  onGrabStart: function() {
    // check if inside inventory
    // TODO: re-centering entity
  }
});

function currentGridIndex(pos) {
  pos = new THREE.Vector3().copy(pos);
  let rig = document.getElementById("rig");
  rig.object3D.localToWorld(pos);
  let inventory = document.getElementById("inventory");
  inventory.object3D.worldToLocal(pos);

  let index = 0;

  // decide "upper floor" or "lower floor"
  if (pos.y < 0) {
    index += HALF_INVENTORY_LIM;  // if y > 0, then the starting index is still 0
  }

  let xMin = -inventory.getAttribute("geometry").width / 2;

  if (pos.x < xMin) {
    return index;
  }

  if (pos.x > -xMin) {
    return index + HALF_INVENTORY_LIM - 1;
  }

  return index + Math.floor((pos.x - xMin) / INVENTORY_DEPTH);
}

function nearestEmptyGridIndex(pos) {
  pos = new THREE.Vector3().copy(pos);
  let rig = document.getElementById("rig");
  rig.object3D.localToWorld(pos);
  let inventory = document.getElementById("inventory");
  inventory.object3D.worldToLocal(pos);
  
  let totalLim = HALF_INVENTORY_LIM * 2;
  
  if (gridCenters.length !== totalLim) {
    gridCenters = new Array(totalLim);
    for (let i = 0; i < totalLim; i++) {
      gridCenters[i] = centerOfGrid(i);
    }
  }

  let distArray = new Array(totalLim);
  for (let i = 0; i < totalLim; i++) {
    distArray[i] = [pos.distanceTo(gridCenters[i]), i];
  }
  
  distArray.sort((a, b) => a[0] - b[0]);
  
  for (let i = 0; i < totalLim; i++) {
    if (itemsInInventory[distArray[i][1]] == null) {
      return distArray[i][1];
    }
  }
}

// returns a Vector3
// in local coordinate
function centerOfGrid(index) {
  let halfDepth = INVENTORY_DEPTH / 2;
  let y = 0;
  if (index < HALF_INVENTORY_LIM) {
    y = halfDepth;
  } else {
    y = -halfDepth;
    index -= HALF_INVENTORY_LIM;
  }

  let xMin = -(HALF_INVENTORY_LIM * INVENTORY_DEPTH) / 2;
  let x = xMin + index * INVENTORY_DEPTH + halfDepth;

  return new THREE.Vector3(x, y, 0);
}

function inventoryFullWarning() {
  // TODO
}

AFRAME.registerComponent("in-inventory", {
  init: function() {
    
  },
  
  remove: function() {
    
  },
  
  tick: function() {
  },
})
