var COLLIDER = {
  // entityId: {bodyPropertyString: "", shapePropertyString: ""}
  // exampleId: {bodyPropertyString: "shape: none", shapePropertyString: ["shape: box; halfExtents: 2.5 2.5 2.5; offset: -2 1.5 -4.5"]},
  // exampleId2: {bodyPropertyString: "shape: auto", shapePropertyString: []},
  // exampleId3: {bodyPropertyString: "shape: hull", shapePropertyString: []},
  house: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 40 1 40; offset: 0 -0.72 0;",
      "shape: box; halfExtents: 0.3 3 9.1; offset: 3.8 3.1 -10.8;",
      "shape: box; halfExtents: 0.3 1 2; offset: 3.8 5.1 0;",
      
      "shape: box; halfExtents: 0.3 3 3.6; offset: 3.8 3.2 4.4;",
      
      "shape: box; halfExtents: 0.3 1 2; offset: 3.8 5.1 10;",
      
      "shape: box; halfExtents: 0.3 3 3.6; offset: 3.8 3.2 14.3;",
      
      "shape: box; halfExtents: 0.3 3 18.9; offset: 17.2 3.1 -1.7;",
      
      "shape: box; halfExtents: 6.6 3 0.3; offset: 10.5 3.1 -6.2;",
      
      "shape: box; halfExtents: 6.6 3 0.3; offset: 10.5 3.1 4.25;",
      
      
      
      "shape: box; halfExtents: 17 3 0.3; offset: 0 3.1 17.3;",
      
      "shape: box; halfExtents: 0.3 3 18.9; offset: -17.25 3.1 -1.7;",
      
      "shape: box; halfExtents: 6.6 3 0.3; offset: -10.7 3.1 -1.3;",
      
      "shape: box; halfExtents: 6.6 3 0.3; offset: -10.7 3.1 8.4;",
      
      "shape: box; halfExtents: 6.6 3 0.3; offset: -10.7 3.1 -10.3;",
      
      
      
      "shape: box; halfExtents: 0.3 3 1.5; offset: -4.5 3.2 -9;",
      "shape: box; halfExtents: 0.3 3 3.3; offset: -4.5 3.2 -1.2;",
      "shape: box; halfExtents: 0.3 3 3.5; offset: -4.5 3.2 8.4;",
      "shape: box; halfExtents: 0.3 3 1.5; offset: -4.5 3.2 15.8;",
      
      "shape: box; halfExtents: 0.3 1 14; offset: -4.5 5.1 3.5",
      
      "shape: box; halfExtents: 17 1 0.3; offset: 0 5.2 -20.1;",
      
      "shape: box; halfExtents: 3.1 3 0.3; offset: 13.6 3.2 -20.1;",
      
      "shape: box; halfExtents: 1.05 3 0.3; offset: 4.5 3.2 -20.1;",
      
      "shape: box; halfExtents: 1.05 3 0.3; offset: -16.6 3.2 -20.1;",
    ]
  },
  // Meeting room
  meetingRoomColliderId: {
    bodyPropertyString: "shape: none", 
    shapePropertyString: [
      // sofa
      "shape: box; halfExtents: 1.3 0.27 0.48; offset: -3.4 0.45 -6.25", 
      "shape: box; halfExtents: 1.3 0.4 0.14; offset: -3.4 0.55 -5.75", 
      "shape: box; halfExtents: 0.48 0.27 1.3; offset: -2.4 0.45 -7.25",
      "shape: box; halfExtents: 0.14 0.4 1.3; offset: -2.4 0.55 -7.25", 
      // coffee table
      "shape: cylinder; height: 0.55; radiusTop: 0.35; radiusBottom: 0.8; offset: -4.1 0.45 -8; numSegments: 16",
      // libray shelf
      "shape: box; halfExtents: 0.8 1 0.2; offset: -6.4 1.1 -6", 
      // twist shelf
      "shape: box; halfExtents: 0.3 0.8 0.2; offset: -8.25 0.9 -7.75", 
      // bookshelf
      "shape: box; halfExtents: 0.2 1.0 1.1; offset: 1.5 1.1 -7", 
    ]
  },
  // lucas room
  lucasRoomColliderId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      // bathtub
      "shape: box; halfExtents: 0.4 0.18 0.7; offset: 7.5 0.3 6.75",
      "shape: box; halfExtents: 0.3 0.35 0.1; offset: 7.5 0.5 6",
      "shape: box; halfExtents: 0.3 0.45 0.1; offset: 7.5 0.6 7.5",
      "shape: box; halfExtents: 0.05 0.35 0.7; offset: 7.15 0.55 6.75",
      "shape: box; halfExtents: 0.05 0.35 0.7; offset: 7.85 0.55 6.75",
      // hamper
      "shape: box; halfExtents: 0.2 0.25 0.02; offset: 5.85 0.4 8.35",
      "shape: box; halfExtents: 0.2 0.25 0.02; offset: 5.85 0.4 8.05",
      "shape: box; halfExtents: 0.02 0.25 0.2; offset: 5.75 0.4 8.2",
      "shape: box; halfExtents: 0.02 0.25 0.2; offset: 6.00 0.4 8.2",
      "shape: box; halfExtents: 0.2 0.08 0.2; offset: 5.85 0.23 8.2",
      // bed
      "shape: box; halfExtents: 0.9 0.25 1.1; offset: 4 0.32 3.45",
      "shape: box; halfExtents: 0.7 0.15 0.25; offset: 4 0.62 2.75",
      "shape: box; halfExtents: 0.9 0.55 0.1; offset: 4 0.575 2.35",
      // bedside table
      "shape: box; halfExtents: 0.22 0.01 0.22; offset: 2.75 0.6 2.55",
      "shape: box; halfExtents: 0.22 0.025 0.22; offset: 2.75 0.15 2.55",
      "shape: box; halfExtents: 0.22 0.01 0.22; offset: 2.75 0.78 2.55",
      // desk
      "shape: box; halfExtents: 0.75 0.06 0.35; offset: 3.75 0.7 8.15",
      "shape: box; halfExtents: 0.05 0.3 0.05; offset: 3.05 0.38 8.45",
      "shape: box; halfExtents: 0.05 0.3 0.05; offset: 4.45 0.38 8.45",
      "shape: box; halfExtents: 0.05 0.3 0.05; offset: 3.05 0.38 7.85",
      "shape: box; halfExtents: 0.05 0.3 0.05; offset: 4.45 0.38 7.85",
      // shelf
      "shape: box; halfExtents: 0.52 0.01 0.2; offset: 5.05 1.7 8.15",
      "shape: box; halfExtents: 0.52 0.01 0.2; offset: 5.05 1.25 8.15",
      "shape: box; halfExtents: 0.52 0.01 0.2; offset: 5.05 0.45 8.15",
      "shape: box; halfExtents: 0.52 0.01 0.2; offset: 5.05 0.9 8.15",
      // sofa set
      "shape: box; halfExtents: 0.6 0.25 0.45; offset: 6.75 0.35 3.85",
      "shape: box; halfExtents: 0.45 0.25 0.4; offset: 6.1 0.3 2.75",
      "shape: box; halfExtents: 0.45 0.25 0.4; offset: 7.4 0.3 2.75",
      "shape: box; halfExtents: 0.45 0.4 0.1; offset: 6.1 0.45 2.5",
      "shape: box; halfExtents: 0.45 0.4 0.1; offset: 7.4 0.45 2.5",
      // chair
      "shape: box; halfExtents: 0.28 0.25 0.2; offset: 4 0.35 7.5",
      // plant
      "shape: box; halfExtents: 0.1 0.18 0.1; offset: 2.8 0.3 8",
      // rug
      "shape: box; halfExtents: 0.8 0.02 1.2; offset: 4 0.2 6",
    ]
  },
  lucasDoll: {
    bodyPropertyString: "shape: box",
    shapePropertyString: [
      "shape: box; halfExtents: 1 1 1; offset: 0 0 0; orientation: 0.1 0 0.2 0.2",
    ]
  },
  lucasKey: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.08 0.03 0.25; offset: 0 0 0;",
    ]
  },
  lucasPhoneOne: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1 1.5 0.2; offset: 0 0 0;",
    ]
  },
  
  lucasNoteOne: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 60 13 80; offset: 0 0 0;",
    ]
  },
  lucasBookTwo: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1.8 1 1.5; offset: -1.5 1.2 -1;",
    ]
  },
  lucasBoxOne: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1.5 1.2 1.5; offset: 0 0.2 0;",
    ]
  },
  lucasPhoneTwo: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1 1.5 0.2; offset: 0 0 0;",
    ]
  },
  lucasBag: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1 1.1 0.5; offset: 0 0.35 0;",
    ]
  },
  lucasNoteThree: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 270 420 50; offset: 10 10 10;",
    ]
  },
  lucasLaptop: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.8 0.6 0.2; offset: -0.1 0 -0.3",
    ]
  },
  lucasNoteTwo: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 60 13 80; offset: 0 0 0;",
    ]
  },
  lucasBookOne: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1.8 1 1.5; offset: -1.5 1.2 -1;",
    ]
  },
  lucasMonalisa: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 33 45 3; offset: -8 50 -12;",
    ]
  },
  // Benny room
  bennyRoomColliderId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      // desk
      "shape: box; halfExtents: 0.6 0.35 0.4; offset: -3.5 0.45 8;",
      // chair
      "shape: box; halfExtents: 0.2 0.26 0.2; offset: -3.5 0.3 7.35;",
      // plant
      "shape: box; halfExtents: 0.1 0.26 0.1; offset: -2.6 0.35 7.8;",
      // tv stand
      "shape: box; halfExtents: 1.0 0.1 0.2; offset: -5.4 0.2 8.1;",
      "shape: box; halfExtents: 1.0 0.015 0.2; offset: -5.4 0.65 8.1;",
      "shape: box; halfExtents: 0.015 0.28 0.2; offset: -5.15 0.36 8.1;",
      "shape: box; halfExtents: 0.015 0.28 0.2; offset: -4.45 0.36 8.1;",
      "shape: box; halfExtents: 0.015 0.28 0.2; offset: -6.35 0.36 8.1;",
      // tv
      "shape: box; halfExtents: 0.55 0.4 0.1; offset: -5.7 1.0 8.1;",
      // books beside tv
      "shape: box; halfExtents: 0.25 0.12 0.1; offset: -4.75 0.78 8.1;",
      // suitcase
      "shape: box; halfExtents: 0.1 0.35 0.2; offset: -6.6 0.43 8;",
      // waredrobe
      "shape: box; halfExtents: 0.75 1.1 0.35; offset: -7.5 1.2 8.1;",
      // bed
      "shape: box; halfExtents: 0.8 0.35 1.1; offset: -7 0.4 5.5;",
      "shape: box; halfExtents: 0.8 0.6 0.2; offset: -7 0.6 4.5;",
      // floor lamp
      "shape: box; halfExtents: 0.2 1.0 0.2; offset: -8.2 1.1 4.5;",
      // bedside table
      "shape: box; halfExtents: 0.35 0.35 0.35; offset: -5.7 0.45 4.65;",
      // coffee table
      "shape: box; halfExtents: 0.48 0.32 0.25; offset: -4.2 0.41 4.7;",
      // rug
      "shape: box; halfExtents: 0.7 0.02 1.2; offset: -5.2 0.12 5.6;",
      // sofa
      "shape: box; halfExtents: 0.4 0.3 0.4; offset: -3.1 0.41 4.8"
    ]
  },
  // Peter room
  peterRoomColliderId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.5 0.65 0.03; offset: -4 2.1 -0.55",

      "shape: box; halfExtents: 1.2 0.2 0.45; offset: -4 0.32 -0.065",
      "shape: box; halfExtents: 1.2 0.4 0.07; offset: -4 0.55 -0.3",
      "shape: box; halfExtents: 0.07 0.2 0.45; offset: -5.15 0.45 -0.065",
      "shape: box; halfExtents: 0.07 0.2 0.45; offset: -2.85 0.45 -0.065",

      "shape: box; halfExtents: 0.6 0.04 0.25; offset: -4 0.55 0.85",
      "shape: box; halfExtents: 0.02 0.2 0.02; offset: -4.565 0.3 1.055",
      "shape: box; halfExtents: 0.02 0.2 0.02; offset: -3.435 0.3 0.645",
      "shape: box; halfExtents: 0.02 0.2 0.02; offset: -4.565 0.3 0.645",
      "shape: box; halfExtents: 0.02 0.2 0.02; offset: -3.435 0.3 1.055",

      "shape: box; halfExtents: 0.1 0.3 0.1; offset: -2.575 0.4 -0.05",

      "shape: box; halfExtents: 0.8 0.04 0.34; offset: -7 0.87 -0.18",
      "shape: box; halfExtents: 0.025 0.18 0.025; offset: -7.6 1.1 -0.29",
      "shape: box; halfExtents: 0.18 0.02 0.05; offset: -7.52 1.265 -0.29",

      "shape: box; halfExtents: 0.04 0.4 0.04; offset: -7.75 0.5 0.1",
      "shape: box; halfExtents: 0.04 0.4 0.04; offset: -7.75 0.5 -0.5",

      "shape: box; halfExtents: 0.04 0.4 0.04; offset: -6.25 0.5 0.1",
      "shape: box; halfExtents: 0.04 0.4 0.04; offset: -6.25 0.5 -0.5",

      "shape: box; halfExtents: 0.25 0.04 0.25; offset: -7 0.4 0.35",
      "shape: box; halfExtents: 0.25 0.3 0.05; offset: -7 0.65 0.55",
      "shape: box; halfExtents: 0.04 0.2 0.04; offset: -7 0.2 0.35",

      "shape: box; halfExtents: 0.25 1 0.25; offset: -8.23 1.1 3.5",

      "shape: box; halfExtents: 0.98 0.25 1.4; offset: -6.5 0.36 2.4",
      "shape: box; halfExtents: 0.98 0.6 0.06; offset: -6.5 0.63 3.85",

      "shape: box; halfExtents: 0.32 0.08 0.27; offset: -6.9 0.67 3.55",
      "shape: box; halfExtents: 0.32 0.08 0.27; offset: -6.1 0.67 3.55",

      "shape: box; halfExtents: 1.12 0.37 0.27; offset: -3.95 0.48 3.5"
    ]
  },
}

AFRAME.registerComponent("define-collider", {
  init: function() {
    let el = this.el;
    
    let bodyType = "";
    if (el.getAttribute("dynamic-body")) {
      bodyType = "dynamic-body";
    } else {
      bodyType = "static-body";
    }
    el.setAttribute(bodyType, COLLIDER[el.id].bodyPropertyString);
    
    let shapePropertyString = COLLIDER[el.id].shapePropertyString;
    if (shapePropertyString.length != 0) {
      for (let i = 0; i < shapePropertyString.length; i++) {
        el.setAttribute("shape"+"__"+i, shapePropertyString[i]);
      }
    }
  }
})