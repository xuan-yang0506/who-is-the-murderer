var ITEMS_BY_ROOM = {
  "lucas": {
    "entity__0": {
      "gltf-model": "#lucasRoomCollider",
      "id": "lucasRoomColliderId",
      "class": "decorative",
      "mixin": "decorative"
    },
    "entity__1": {
      "id": "lucasRoom",
      "entity__0": {
        "gltf-model": "#lucasRoomStatic"
      },
      "entity__1": {
        "position": "5 0.15 5", 
        "rotation": "0 180 0", 
        "scale": "0.25 0.25 0.25",
        "entity__0": {
          "position": "-8 0 -8", 
          "entity__0": {
            "position": "-2 1 1", 
            "gltf-model": "#lucasDoll1", 
            "id": "lucasDoll", 
            "scale": "0.1 0.1 0.1", 
            "rotation": "0 0 0", 
            "class": "interactable movable", 
            "mixin": "interactable movable"
          },
          "entity__1": {
            "position": "4.5 0.7 -5", 
            "gltf-model": "#lucasKey1", 
            "id": "lucasKey", 
            "scale": "1 1 1", 
            "rotation": "0 0 0", 
            "class": "interactable movable", 
            "mixin": "interactable movable"
          }
        },
        "entity__1": {
          "position": "4 0 7.25",
          "entity__0": {
            "entity__0": {
              "position": "5 2.8 2.3", 
              "gltf-model": "#lucasPhone1", 
              "id": "lucasPhoneOne", 
              "scale": "0.2 0.2 0.2", 
              "rotation": "-90 90 90", 
              "class": "interactable movable", 
              "mixin": "interactable movable"
            }
          },
          "entity__1": {
            "position": "5 0 0",
            "entity__0": {
              "position": "0 0.2 2.9",
              "gltf-model": "#lucasNote1",
              "id": "lucasNoteOne",
              "scale": "0.005 0.005 0.005",
              "rotation": "0 90 0",
              "class": "interactable movable",
              "mixin": "interactable movable"
            },
            "entity__1": {
              "position": "-0.2 0.4 2",
              "gltf-model": "#lucasBook2",
              "id": "lucasBookTwo",
              "scale": "0.2 0.2 0.2",
              "rotation": "0 180 0",
              "class": "interactable movable",
              "mixin": "interactable movable"
            },
            "entity__2": {
              "position": "0 2 2.4",
              "gltf-model": "#lucasBox1",
              "id": "lucasBoxOne",
              "scale": "0.3 0.2 0.3",
              "rotation": "0 90 0",
              "class": "interactable movable",
              "mixin": "interactable movable"
            }
          }
        },
        "entity__2": {
          "position": "-7 0 8.75",
          "entity__0": {
            "position": "-1.8 2.5 -0.5",
            "gltf-model": "#lucasBag1",
            "id": "lucasBag",
            "scale": "0.7 0.7 0.7",
            "rotation": "0 180 0",
            "class":"interactable movable",
            "mixin": "interactable movable"
          },
          "entity__1": {
            "position": "-2.5 2 0.6",
            "gltf-model": "lucasNote3",
            "id": "lucasNoteThree",
            "scale": "0.001 0.001 0.001",
            "rotation": "90 90 180",
            "class": "interactable movable",
            "mixin": "interactable movable"
          },
          "entity__2": {
            "position": "1.5 2 -3",
            "gltf-model": "lucasPhone1",
            "id": "lucasPhoneTwo",
            "scale": "0.2 0.2 0.2",
            "rotation": "90 90 180",
            "class":"interactable movable",
            "mixin": "interactable movable"
          }
        },
        "entity__3": {
          "position": "5 0 -12.5",
          "entity__0": {
            "position": "0.35 3.4 0",
            "gltf-model": "#lucasLaptop1",
            "id": "lucasLaptop",
            "scale": "1.5 1.5 1.5",
            "rotation": "0 0 0",
            "class": "interactable",
            "mixin": "interactable"
          },
          "entity__1": {
            "position": "2.5 2.5 0",
            "gltf-model": "lucasNote2",
            "id": "lucasNoteTwo",
            "scale": "0.005 0.005 0.004",
            "class": "interactable movable",
            "mixin": "interactable movable"
          },
          "entity__2": {
            "position": "-2 2.5 0",
            "gltf-model": "lucasBook2",
            "id": "lucasBookOne",
            "scale": "0.25 0.25 0.25",
            "rotation": "0 -60 0",
            "class": "interactable movable",
            "mixin": "interactable movable"
          }
        },
        "entity__4": {
          "position": "-12.75 2 7",
          "gltf-model": "#lucasMonalisa1",
          "id": "lucasMonalisa",
          "scale": "0.07 0.07 0.07",
          "rotation": "0 90 0",
          "class": "interactable",
          "mixin": "interactable"
        }
      }
    }
  },
  "meetingRoom": {
    "entity__0": {
      "id": "meetingRoomColliderId",
      "class": "decorative",
      "mixin": "decorative"
    },
    "entity__1": {
      "gltf-model": "#meetingRoomStatic",
      "id": "meetingRoom"
    }
  },
  "benny": {
    "entity__0": {
      "id": "bennyRoomColliderId",
      "class": "decorative",
      "mixin": "decorative"
    },
    "entity__1": {
      "id": "bennyRoom",
      "entity__0": {
        "gltf-model": "#bennyRoomStatic"
      },
      "entity__1": {
        "position": "-7.0 0.1 5.5",
        "entity__0": {
          "entity__0": {
            "position": "1.2 0.7 -0.75",
            "gltf-model": "#bennyBook1",
            "id": "bennyBook1Id",
            "scale": "0.0015 0.0015 0.0015",
            "rotation": "0 0 0",
            "class": "interactable movable",
            "mixin": "interactable movable"
          },
          "entity__1": {
            "position": "-1 0.1 -0.6",
            "gltf-model": "#bennyKey",
            "id": "bennyKeyId",
            "scale": "0.004 0.003 0.004",
            "rotation": "0 0 0",
            "class": "interactable movable",
            "mixin": "interactable movable"
          }
        },
        "entity__1": {
          "position": "3 0 0",
          "entity__0": {
            "position": "0.0 0.65 -0.8",
            "gltf-model": "#bennyWallet",
            "id": "bennyWalletId",
            "scale": "0.008 0.01 0.01",
            "rotation": "0 90 0",
            "class": "interactable movable",
            "mixin": "interactable movable"
          },
          "entity__1": {
            "position": "-0.5 0.65 -0.8",
            "gltf-model": "#bennyPhone",
            "id": "bennyPhoneId",
            "scale": "0.05 0.05 0.05",
            "rotation": "-90 0 0",
            "class": "interactable movable",
            "mixin": "interactable movable"
          }
        },
        "entity__2": {
          "position": "3 0 2",
          "entity__0": {
            "position": "0.5 0.7 0.3",
            "gltf-model": "#bennyLaptop",
            "id": "bennyLaptopId",
            "scale": "0.7 0.7 0.7",
            "rotation": "0 0 0",
            "class": "interactable movable",
            "mixin": "interactable movable"
          }
        },
        "entity__3": {
          "position": "0 0 2",
          "entity__0": {
            "position": "2.2 0.2 0.6",
            "gltf-model": "#bennyCamera",
            "id": "bennyCameraId",
            "scale": "0.0007 0.0007 0.0007",
            "rotation": "0 180 0",
            "class": "interactable movable",
            "mixin": "interactable movable"
          },
          "entity__1": {
            "position": "0.9 0.18 0.45",
            "gltf-model": "#bennyNotebook",
            "id": "bennyNotebookId",
            "scale": "0.01 0.01 0.01",
            "rotation": "0 0 0",
            "class": "interactable movable",
            "mixin": "interactable movable"
          },
          "entity__2": {
            "position": "1.3 0.18 0.6",
            "gltf-model": "#bennyBox",
            "id": "bennyBoxId",
            "scale": "0.01 0.01 0.01",
            "rotation": "0 180 0",
            "class": "interactable movable",
            "mixin": "interactable movable"
          }
        }
      }
    }
  },
  "wendy": {
    "entity__0": {
      "id": "wendyRoomColliderId",
      "class": "decorative",
      "mixin": "decorative"
    },
    "entity__1": {
      "id": "wendyRoom",
      "entity__0": {
        "position": "0 0 0",
        "gltf-model": "#wendyStatic",
        "id": "wendyStaticId"
      },
      "entity__1": {
        "position": "5 0 -6",
        "entity__0": {
          "position": "1.8 0.88 -1",
          "gltf-model": "#wendyPhone",
          "id": "wendyPhoneId",
          "scale": "0.08 0.08 0.08",
          "rotation": "90 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__1": {
          "position": "-2.5 0.37 -1",
          "gltf-model": "#wendyLetter",
          "id": "wendyLetterId",
          "scale": "0.001 0.001 0.001",
          "rotation": "90 180 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__2": {
          "position": "2.8 0.85 -3",
          "gltf-model": "#wendyNotepad",
          "id": "wendyNotepadId",
          "scale": "0.2 0.2 0.2",
          "rotation": "0 -90 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__3": {
          "position": "-2.5 0.9 -1",
          "gltf_model": "#wendyTowel",
          "id": "wendyTowelId",
          "scale": "0.001 0.001 0.001",
          "rotation": "0 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__4": {
          "position": "3.5 0.8 0.8",
          "gltf-model": "#wendyBoard",
          "id": "wendyBoardId",
          "scale": "0.003 0.01 0.01",
          "rotation": "0 -90 0",
          "class": "interactable",
          "mixin": "interactable"
        }, 
        "entity__5": {
          "position": "-2.9 0.1 -0.1",
          "gltf-model": "#wendyDiamond",
          "id": "wendyDiamondId",
          "scale": "0.0008 0.0008 0.0008",
          "rotation": "90 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        }
      }
    }
  },
  "jane": {
    "entity__0": {
      "id": "janeRoomColliderId",
      "class": "decorative",
      "mixin": "decorative"
    },
    "entity__1": {
      "id": "janeRoom",
      "entity__0": {
        "position": "0 0 0",
        "gltf-model": "#janeStatic",
        "id": "janeStaticId"
      },
      "entity__1": {
        "position": "-5 0 -3",
        "entity__0": {
          "position": "0.9 0.84 -1.55",
          "gltf-model": "#janeLaptop",
          "id": "janeLaptopId",
          "scale": "0.7 0.7 0.7",
          "rotation": "0 180 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__1": {
          "position": "1.41 0.99 -1.86",
          "gltf-model": "#janeKey",
          "id": "janeKeyId",
          "scale": "0.002 0.002 0.002",
          "rotation": "90 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__2": {
          "position": "0.43 0.94 -1.4",
          "gltf-model": "#janeBookSet",
          "id": "janeBookSetId",
          "scale": "0.008 0.008 0.008",
          "rotation": "0 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__3": {
          "position": "-2.2 0.55 -1.7",
          "gltf-model": "#janePhone",
          "id": "janePhoneId",
          "scale": "0.06 0.06 0.06",
          "rotation": "-90 0 90",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__4": {
          "position": "-1.5 0.6 -1.45",
          "gltf-model": "#janePillowOne",
          "id": "janePillowOneId",
          "scale": "0.4 0.3 0.4",
          "rotation": "0 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__5": {
          "position": "-2.4 0.6 -1.45",
          "gltf-model": "#janePillowTwo",
          "id": "janePillowTwoId",
          "scale": "0.4 0.2 0.4",
          "rotation": "0 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__6": {
          "position": "-1.08 1.09 1.81",
          "gltf-model": "#janeBookOne",
          "id": "janeBookOneId",
          "scale": "0.0025 0.0025 0.0025",
          "rotation": "90 0 90",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__7": {
          "position": "-0.6 0.3 1.7",
          "gltf-model": "#janeBookFive",
          "id": "janeBookFiveId",
          "scale": "1.2 1.2 1.2",
          "rotation": "0 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__8": {
          "position": "-0.6 1.65 1.7",
          "gltf-model": "#janeBox",
          "id": "janeBoxId",
          "scale": "0.08 0.08 0.08",
          "rotation": "0 360 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        }
      }
    }
  },
  "peter": {
    "entity__0": {
      "id": "peterRoomColliderId",
      "class": "decorative",
      "mixin": "decorative"
    },
    "entity__1": {
      "id": "peterRoom",
      "entity__0": {
        "gltf-model": "#peterRoomStatic",
        "id": "peterRoomStaticId"
      },
      "entity__1": {
        "position": "-7 0.0 2.5",
        "entity__0": {
          "position": "0.1 1.2 -2.9",
          "gltf-model": "#peterMonitor",
          "id": "peterMonitorId",
          "scale": "0.4 0.35 0.4",
          "rotation": "0 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__1": {
          "position": "-0.8 0.15 0.7",
          "gltf-model": "#peterMedicine",
          "id": "peterMedicineId",
          "scale": "0.05 0.05 0.05",
          "rotation": "0 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__2": {
          "position": "1.5 0.85 0.5",
          "gltf-model": "#peterPens",
          "id": "peterPensId",
          "scale": "1.5 1.5 1.5",
          "rotation": "0 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__3": {
          "position": "3 1.1 1",
          "gltf-model": "#peterPhoto",
          "id": "peterPhotoId",
          "scale": "0.01 0.01 0.01",
          "rotation": "0 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__4": {
          "position": "3 0.6 -1.5",
          "gltf-model": "#peterLetter",
          "id": "peterLetterId",
          "scale": "0.001 0.001 0.001",
          "rotation": "90 180 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__5": {
          "position": "2.5 1 1",
          "gltf-model": "#peterFish",
          "id": "peterFishId",
          "scale": ".2 .2 .2",
          "rotation": "0 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        }
      }
    }
  },
  "sonia": {
    "entity__0": {
      "id": "soniaRoomColliderId",
      "class": "decorative",
      "mixin": "decorative"
    },
    "entity__1": {
      "id": "soniaRoom",
      "entity__0": {
        "gltf-model": "#soniaStatic",
        "id": "soniaStaticId"
      },
      "entity__1": {
        "position": "5 0 0",
        "entity__0": {
          "position": "-1 0 1",
          "gltf-model": "#soniaChair",
          "id": "soniaChairId",
          "scale": "0.0008 0.0008 0.0008",
          "rotation": "0 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__1": {
          "position": "-1 0.2 -1.2",
          "gltf-model": "#soniaBook",
          "id": "soniaBookId",
          "scale": "0.05 0.05 0.05",
          "rotation": "0 180 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__2": {
          "position": "1.5 1.5 -3",
          "gltf-model": "#soniaPhoto",
          "id": "soniaPhotoId",
          "scale": "0.008 0.008 0.008",
          "rotation": "0 0 0",
          "class": "interactable",
          "mixin": "interactable"
        },
        "entity__3": {
          "position": "-1 0.95 1.3",
          "gltf-model": "#soniaLaptop",
          "id": "soniaLaptopId",
          "scale": "0.8 0.8 0.8",
          "rotation": "0 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__4": {
          "position": "2.5 0.85 1.5",
          "gltf-model": "#soniaPerfume",
          "id": "soniaPerfumeId",
          "scale": "0.1 0.1 0.1",
          "rotation": "0 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__5": {
          "position": "-1.5 0.6 -2.2",
          "gltf-model": "#soniaPhone",
          "id": "soniaPhoneId",
          "scale": "0.08 0.08 0.08",
          "rotation": "90 0 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        },
        "entity__6": {
          "position": "-1.8 0.98 1.5",
          "gltf-model": "#soniaNotepad",
          "id": "soniaNotepadId",
          "scale": "0.2 0.2 0.2",
          "rotation": "0 -90 0",
          "class": "interactable movable",
          "mixin": "interactable movable"
        }
      }
    }
  }
}

AFRAME.registerComponent("enter-room", {
  schema: {
    room: {type: 'string'},
    teleport: {type: 'vec3'}
  },
  
  init: function() {
    this.loadRoom = this.loadRoom.bind(this);
    this.teleport = this.teleport.bind(this);
    
    this.el.addEventListener("click", this.loadRoom);
  },

  remove: function() {
    this.el.removeEventListener("click", this.loadRoom);
  },
  
  // Load all items of the room and teleport the player into the room
  loadRoom: function() {
    let colliderEntity = this.makeEntity(ITEMS_BY_ROOM[this.data.room]["entity__0"]);
    let roomEntity = this.makeEntity(ITEMS_BY_ROOM[this.data.room]["entity__1"]);
    document.querySelector("a-scene").appendChild(colliderEntity);
    document.querySelector("a-scene").appendChild(roomEntity);
    // Teleport the player into the room after everything is loaded
    this.teleport();
  },
  
  teleport: function() {
    document.getElementById("rig").setAttribute("position", this.data.teleport);
  },
  
  makeEntity: function(obj) {
    let newEntity = document.createElement('a-entity');
    for (let property in obj) {
      if (property.startsWith("entity")) {
        let childEntity = this.makeEntity(obj[property]);
        newEntity.appendChild(childEntity);
      } else {
        newEntity.setAttribute(property, obj[property]);
      }
    }
    
    return newEntity;
  }
})

AFRAME.registerComponent("exit-room", {
  schema: {
    room: {type: 'string'},
    teleport: {type: 'vec3'}
  },
  
  init: function() {
    this.exitRoom = this.exitRoom.bind(this);
    this.teleport = this.teleport.bind(this);
    
    this.el.addEventListener("click", this.exitRoom);
  },
  
  remove: function() {
    this.el.removeEventListener("click", this.exitRoom);
  },
  
  exitRoom: function() {
    let roomName = this.data.room;
    let colliderEntity = document.getElementById(roomName + "RoomColliderId");
    let roomEntity = document.getElementById(roomName + "Room");
    
    colliderEntity.parentNode.removeChild(colliderEntity);
    roomEntity.parentNode.removeChild(roomEntity);
    
    this.teleport();
  },
  
  teleport: function() {
    document.getElementById("rig").setAttribute("position", this.data.teleport);
  }
})