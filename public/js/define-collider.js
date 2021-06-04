var COLLIDER = {
  // entityId: {bodyPropertyString: "", shapePropertyString: ""}
  // exampleId: {bodyPropertyString: "shape: none", shapePropertyString: ["shape: box; halfExtents: 2.5 2.5 2.5; offset: -2 1.5 -4.5"]},
  // exampleId2: {bodyPropertyString: "shape: auto", shapePropertyString: []},
  // exampleId3: {bodyPropertyString: "shape: hull", shapePropertyString: []},
  house: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 25 1 25; offset: 0 -0.72 0;",
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
      "shape: box; halfExtents: 0.4 0.3 0.4; offset: -3.1 0.41 4.8",
    ]
  },
  bennyBook1Id: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 75 20 75; offset: 0 0 0;",
    ]
  },
  bennyKeyId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 6 6 30; offset: 0 0 20;",
    ]
  },
  bennyWalletId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 12 2 7; offset: 0 0 0;",
    ]
  },
  bennyPhoneId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1 1.4 0.3; offset: 0 0 0;",
    ]
  },
  bennyLaptopId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.5 0.4 0.14; offset: 0 0.42 0.4;",
      "shape: box; halfExtents: 0.5 0.02 0.4; offset: 0 0 0.2;",
    ]
  },
  bennyBook2Id: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.25 0.13 0.1; offset: 0.15 0.13 0;",
    ]
  },
  bennyCameraId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 200 150 150; offset: 0 0 0;",
    ]
  },
  bennyNotebookId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 10 1 15; offset: -10 2 11;",
    ]
  },
  bennyBox: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 22 4 15; offset: 0 4 0;",
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
      
      "shape: box; halfExtents: 1.12 0.37 0.27; offset: -3.95 0.48 3.5",
    ]
  },
  peterMonitorId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1 0.7 0.33; offset: 0 -0.05 0",
    ]
  },
  peterMedicineId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1 1.5 1; offset: 0 0.4 0",
    ]
  },
  peterPensId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.06 0.1 0.06; offset: 1.6 0.1 0.36",
    ]
  },
  peterPhotoId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 15 25 3; offset: 0 0 0",
    ]
  },
  peterLetterId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 100 160 10; offset: 90 130 0",
    ]
  },
  peterFishId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1 0.8 1; offset: 0 0 0",
    ]
  },
  // Sonia room
  soniaRoomColliderId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.05 0.65 0.49; offset: 8.4 2.1 0.98;",
      
      "shape: box; halfExtents: 0.34 0.45 0.82; offset: 8 0.55 -2;",
      
      "shape: box; halfExtents: 1 0.22 0.56; offset: 4 0.3 -2.4;",
      "shape: box; halfExtents: 1 0.5 0.08; offset: 4 0.6 -2.7;",
      "shape: box; halfExtents: 0.07 0.3 0.56; offset: 3.05 0.4 -2.4;",
      "shape: box; halfExtents: 0.07 0.3 0.56; offset: 4.95 0.4 -2.4;",
      
      "shape: box; halfExtents: 0.75 0.02 0.33; offset: 4 0.53 -1.2;",
      "shape: box; halfExtents: 0.75 0.02 0.33; offset: 4 0.15 -1.2;",
      "shape: box; halfExtents: 0.02 0.22 0.02; offset: 3.35 0.34 -1.53;",
      "shape: box; halfExtents: 0.02 0.22 0.02; offset: 3.35 0.34 -0.87;",
      "shape: box; halfExtents: 0.02 0.22 0.02; offset: 4.65 0.34 -1.53;",
      "shape: box; halfExtents: 0.02 0.22 0.02; offset: 4.65 0.34 -0.87;",
      
      "shape: box; halfExtents: 1 0.03 0.33; offset: 4 0.92 1.5;",
      "shape: box; halfExtents: 0.09 0.4 0.35; offset: 4.9 0.52 1.5;",
      "shape: box; halfExtents: 0.09 0.4 0.35; offset: 3.1 0.52 1.5;",
      "shape: box; halfExtents: 0.09 0.2 0.09; offset: 4.8 1.15 1.5;",
      
      "shape: box; halfExtents: 0.8 0.35 1.5; offset: 6.5 0.45 0.51;",
      "shape: box; halfExtents: 0.4 0.12 0.3; offset: 6.5 0.9 1.6;",
      "shape: box; halfExtents: 0.4 0.3 0.12; offset: 6.5 0.9 1.8;",
      
      "shape: box; halfExtents: 0.37 0.34 0.37; offset: 7.73 0.44 1.65;",
      "shape: box; halfExtents: 0.15 0.35 0.15; offset: 7.85 1.1 1.65;",
      
      "shape: box; halfExtents: 0.15 0.4 0.15; offset: 2.5 0.5 1.5;",
    ]
  },
  soniaChairId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 350 400 350; offset: 0 400 -300;",
      "shape: box; halfExtents: 350 900 90; offset: 0 900 -750;",
    ]
  },
  soniaBookId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 3 0.8 5; offset: 0 0 0;",
    ]
  },
  soniaPhotoId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 80 50 1; offset: 0 70 0.5;",
      "shape: box; halfExtents: 40 50 1; offset: 165 50 0.5;",
      "shape: box; halfExtents: 40 50 1; offset: -160 50 0.5;",
    ]
  },
  soniaLaptopId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.5 0.4 0.14; offset: 0 0.42 0.4;",
      "shape: box; halfExtents: 0.5 0.02 0.4; offset: 0 0 0.2;",
    ]
  },
  soniaPerfumeId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.5 1 0.5; offset: 0 0 0;"
    ]
  },
  soniaPhoneId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1 1.5 0.2; offset: 0 0 0;"
    ]
  },
  soniaNotepadId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1.1 0.07 0.7; offset: 0 0 0;"
    ]
  },
  // Wendy Room
  wendyRoomColliderId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 2 0.1 1.2; offset: 5 0.2 -4.5;",
      "shape: box; halfExtents: 1.8 0.1 1; offset: 5 2.3 -4.5;",
      
      "shape: box; halfExtents: 1.6 1.2 0.1; offset: 5 1.3 -3.6;",
      "shape: box; halfExtents: 0.1 1.4 0.1; offset: 3.2 1.4 -3.7;",
      "shape: box; halfExtents: 0.1 1.4 0.1; offset: 3.2 1.4 -5.5;",
      "shape: box; halfExtents: 0.1 1.4 0.1; offset: 6.8 1.4 -3.7;",
      "shape: box; halfExtents: 0.1 1.4 0.1; offset: 6.8 1.4 -5.5;",
      
      "shape: box; halfExtents: 0.6 0.2 0.1; offset: 3.9 0.4 -4;",
      "shape: box; halfExtents: 0.24 0.3 0.1; offset: 4 0.5 -4;",
      
      "shape: box; halfExtents: 0.4 0.2 0.1; offset: 5 0.3 -3.9;",
      
      "shape: box; halfExtents: 0.4 0.2 0.1; offset: 5.9 0.4 -4.1;",
      
      "shape: box; halfExtents: 0.1 0.2 0.1; offset: 6 0.6 -4.1;",
      
      "shape: box; halfExtents: 0.08 0.22 0.18; offset: 2.1 0.4 -4;",
      "shape: box; halfExtents: 0.05 0.24 0.05; offset: 2.15 0.85 -4;",
      
      "shape: box; halfExtents: 0.43 0.1 0.35; offset: 5 0.35 -4.46;",
      
      "shape: box; halfExtents: 0.12 0.12 0.12; offset: 6.53 0.35 -5.6;",
      
      "shape: box; halfExtents: 0.12 0.12 0.12; offset: 5.65 0.35 -5.6;",
      
      "shape: box; halfExtents: 0.12 0.12 0.12; offset: 4.32 0.35 -5.6;",
      
      "shape: box; halfExtents: 0.12 0.12 0.12; offset: 3.45 0.35 -5.6;",
      
      "shape: box; halfExtents: 0.5 0.5 0.18; offset: 5.32 0.7 -5.45;",
      "shape: box; halfExtents: 0.24 0.3 0.2; offset: 4.72 0.45 -5.2;",
      "shape: box; halfExtents: 0.24 0.3 0.2; offset: 5.72 0.45 -5;",
      
      "shape: box; halfExtents: 0.2 0.95 0.01; offset: 2.47 1.05 -6.34;",
      "shape: box; halfExtents: 0.2 0.95 0.01; offset: 2.47 1.05 -7.5;",
      
      "shape: box; halfExtents: 0.2 0.01 0.6; offset: 2.47 0.35 -6.9;",
      "shape: box; halfExtents: 0.2 0.01 0.6; offset: 2.47 0.88 -6.9;",
      "shape: box; halfExtents: 0.2 0.01 0.6; offset: 2.47 1.35 -6.9;",
      
      "shape: box; halfExtents: 0.15 0.35 0.15; offset: 2.47 0.45 -7.8;",
      
      "shape: box; halfExtents: 0.015 0.76 0.56; offset: 2.05 1.7 -9;",
      
      "shape: box; halfExtents: 0.2 0.2 0.6; offset: 5.7 0.34 -9.35;",
      "shape: box; halfExtents: 0.05 0.4 0.6; offset: 5.55 0.68 -9.35;",
      
      "shape: box; halfExtents: 0.04 0.33 0.04; offset: 6.235 0.44 -9.32;",
      "shape: box; halfExtents: 0.3 0.02 0.54; offset: 6.235 0.82 -9.3;",
      
      "shape: box; halfExtents: 0.2 0.2 0.57; offset: 6.75 0.34 -9.35;",
      "shape: box; halfExtents: 0.05 0.4 0.6; offset: 6.93 0.68 -9.35;",
      
      "shape: box; halfExtents: 0.04 0.33 0.04; offset: 7.74 0.44 -9.32;",
      "shape: box; halfExtents: 0.3 0.02 0.54; offset: 7.74 0.82 -9.3;",
      
      
      "shape: box; halfExtents: 0.2 0.2 0.57; offset: 7.25 0.34 -9.35;",
      "shape: box; halfExtents: 0.05 0.4 0.6; offset: 7.07 0.68 -9.35;",
      
      "shape: box; halfExtents: 0.05 0.4 0.6; offset: 8.4 0.68 -9.35;",
      "shape: box; halfExtents: 0.2 0.2 0.57; offset: 8.2 0.34 -9.35;",
      
      "shape: box; halfExtents: 0.05 0.33 0.05; offset: 6.7 0.44 -6.99;",
      "shape: box; halfExtents: 0.28 0.02 0.28; offset: 6.7 0.82 -6.99;",
      
      "shape: box; halfExtents: 0.19 0.19 0.19; offset: 6.1 0.3 -7.3; rotation: 0 45 0",
    ]
  },
  wendyPhoneId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.7 1.4 0.1; offset: 0 0 0;",
    ]
  },
  wendyLetterId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 100 150 20; offset: 100 150 0;",
    ]
  },
  wendyNotepadId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1 0.1 0.8; offset: 0 0 0;",
    ]
  },
  wendyTowelId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 150 45 130; offset: -40 20 0;",
    ]
  },
  wendyBoardId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 300 75 5; offset: 290 75 10;",
    ]
  },
  wendyDiamondId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 100 100 100; offset: 0 90 0;",
    ]
  },
  // Jane room
  janeRoomColliderId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.75 0.012 0.37; offset: -4 0.8 -4.6;",
      "shape: box; halfExtents: 0.012 0.35 0.37; offset: -4.68 0.45 -4.6;",
      "shape: box; halfExtents: 0.012 0.35 0.37; offset: -4.22 0.45 -4.6;",
      "shape: box; halfExtents: 0.012 0.35 0.37; offset: -3.32 0.45 -4.6;",
      
      "shape: box; halfExtents: 0.17 0.35 0.17; offset: -2.9 0.45 -4.55;",
      
      "shape: box; halfExtents: 0.17 0.17 0.17; offset: -3.95 0.3 -4.04;",
      "shape: box; halfExtents: 0.17 0.36 0.015; offset: -3.95 0.52 -3.9;",
      
      "shape: box; halfExtents: 0.07 0.012 0.07; offset: -3.58 0.82 -4.9;",
      "shape: box; halfExtents: 0.012 0.06 0.06; offset: -3.64 0.9 -4.9;",
      "shape: box; halfExtents: 0.06 0.06 0.012; offset: -3.58 0.9 -4.97;",
      "shape: box; halfExtents: 0.012 0.06 0.06; offset: -3.52 0.9 -4.9;",
      "shape: box; halfExtents: 0.06 0.06 0.012; offset: -3.58 0.9 -4.82;",
      
      "shape: box; halfExtents: 0.85 0.19 1.05; offset: -7 0.365 -3.9;",
      "shape: box; halfExtents: 0.89 0.4 0.04; offset: -7 0.56 -2.8;",
      "shape: box; halfExtents: 0.89 0.54 0.04; offset: -7 0.68 -4.85;",
      
      "shape: box; halfExtents: 0.05 0.3 0.57; offset: -8.53 0.44 -1.69;",
      
      "shape: box; halfExtents: 0.15 0.15 0.15; offset: -6.8 0.25 -1.15;",
      
      "shape: box; halfExtents: 0.023 1.09 0.26; offset: -6.18 1.19 -1.152;",
      "shape: box; halfExtents: 0.023 1.09 0.26; offset: -4.6 1.19 -1.152;",
      
      "shape: box; halfExtents: 0.8 0.08 0.28; offset: -5.4 0.19 -1.152;",
      "shape: box; halfExtents: 0.8 0.02 0.28; offset: -5.4 0.9 -1.152;",
      "shape: box; halfExtents: 0.8 0.02 0.28; offset: -5.4 1.54 -1.152;",
      "shape: box; halfExtents: 0.8 0.02 0.28; offset: -5.4 1.88 -1.152;",
      
      "shape: box; halfExtents: 0.38 0.015 0.38; offset: -3 0.85 -1.5;",
      "shape: box; halfExtents: 0.05 0.37 0.05; offset: -3 0.47 -1.5;",
      "shape: box; halfExtents: 0.25 0.015 0.25; offset: -3 0.14 -1.5;",
      
      "shape: box; halfExtents: 0.15 0.15 0.15; offset: -3.53 0.25 -1.9; orientation: 0 0 1 0",
      
      "shape: box; halfExtents: 0.15 0.6 0.09; offset: -2.53 1.625 -1.2;",
    ]
  },
  janeLaptopId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.5 0.4 0.14; offset: 0 0.42 0.4;",
      "shape: box; halfExtents: 0.4 0.02 0.4; offset: 0 0 0.2;",
    ]
  },
  janeBookFiveId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.1 0.1 0.1; offset: 0 0.16 0",
      "shape: box; halfExtents: 0.1 0.04 0.1; offset: 0.3 0.12 0",
    ]
  },
  janeBoxId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1.7 1.7 1.7; offset: 0 0 0",
    ]
  },
  janeBookOneId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 60 18 85; offset: 0 0 0",
    ]
  },
  janePillowOneId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1 0.3 1; offset: 0 0 0",
    ]
  },
  janePillowTwoId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1 0.3 1; offset: 0 0 0",
    ]
  },
  janePhoneId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1 1.5 0.2; offset: 0 0 0",
    ]
  },
  janeKeyId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 5 10 30; offset: 0 0 15",
    ]
  },
  janeBookSetId: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 15 3 20; offset: 0 0 0",
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