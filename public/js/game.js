let PHASES = ["INTRODUCTION_TIME", "SCRIPT_READ_TIME", "DISCUSSION_TIME1", "EXAMINATION_TIME", "DISCUSSION_TIME2", "VOTE_TIME"];
let phases = ["Introduction", "Script reading", "Discussion", "Room examination", "Discussion", "Voting"]
let INTRODUCTION_PHASE = 0;
let SCRIPT_READ_PHASE = 1
let DISCUSSION_PHASE1 = 2;
let EXAMINATION_PHASE = 3;
let DISCUSSION_PHASE2 = 4;
let VOTE_PHASE = 5;
let PHASE_TIME_PERIODS = [60, 60, 60, 60, 60, 200];
var ROLES = ["player1", "player2", "player3"];
let MURDERER = 0;
var scripts;

// for debug purpose only
let INITIAL_TIME = 0;

// only start game when there are TOTAL_PLAYER_READY players ready
let TOTAL_PLAYER_READY = ROLES.length;

function getPhase(time) {
  let total = 0;
  for (let i = 0; i < PHASES.length; i++) {
    total += PHASE_TIME_PERIODS[i];
    if (total >= time) {
      return i;
    }
  }
  return PHASES.length;
}

function realTimeToPhaseTime(time) {
  for (let i = 0; i < PHASES.length; i++) {
    if (time <= PHASE_TIME_PERIODS[i]) {
      break;
    } else {
      time -= PHASE_TIME_PERIODS[i];
    }
  }
  return time;
}

class GameModel extends Croquet.Model {
  init() {
    // game model
    this.phase = 0;
    this.timePlayed = INITIAL_TIME;
    this.playersReady = new Set();
    this.subscribe(this.id, "join", this.playersJoin);
    this.playerArr = [];
    this.subscribe(this.id, "vote", this.processVote);
    this.voteMap = new Map();
    this.secondTick();
    
    this.subscribe(this.sessionId, "view-exit", this.deleteUser);
  }
  
  // viewID=viewId
  processVote(ballot) {
    if (this.playersReady.size == TOTAL_PLAYER_READY) {
      let arr = ballot.split("=");
      let voter = arr[0];
      let result = arr[1];
      this.voteMap.set(voter, result);
      this.publish(this.id, "voteResult", this.voteMap);
    }
  }
  
  deleteUser(viewId) {
    this.playersReady.delete(viewId);
    this.publish(this.id, "playersReady", this.playersReady.size);
  }
  
  playersJoin(viewId) {
    if (!this.playersReady.has(viewId)) {
      this.playersReady.add(viewId);
    }
    this.publish(this.id, "playersReady", this.playersReady.size);
    if (this.playersReady.size == TOTAL_PLAYER_READY) {
      this.startGame();
    }
  }
  
  startGame() {
    let i = 0;
    for (let player of this.playersReady) {
      this.playerArr[i] = player;
      i++;
    }
  }
  
  secondTick() {
    if (this.playersReady.size == TOTAL_PLAYER_READY) {
      this.timePlayed++;
      let data = new Map();
      data.set("timePlayed", this.timePlayed);
      data.set("playersArr", this.playerArr);
      this.publish(this.id, "time", data);
    } else if (this.playersReady.size == 1) {
      this.timePlayed = INITIAL_TIME;
      this.voteMap.clear();
      this.playersArr = [];
    } 
    this.future(1000).secondTick(); 
  }
}

GameModel.register("GameModel");

class GameView extends Croquet.View {
  constructor(model) {
    super(model);
    this.model = model;
    
    fetch('scripts.json')
      .then(response => response.json())
      .then(jsonResponse => this.processJson(jsonResponse))
  }
  
  processJson(json) {
    this.scripts = json;
    this.subscribe(this.model.id, "time", this.updateTime);
    this.subscribe(this.model.id, "playersReady", this.displayPlayersReady);
    this.publish(this.model.id, "join", this.viewId);
    this.voted = false;
  }   
  
  getPlayerID() {
    let myIndex = this.playersArr.indexOf(this.viewId);
    let myRole = ROLES[myIndex];
    return myRole;
  }
  
  displayPlayersReady(num) {
    this.setText(this.scripts["introduction"] + "\nplayers ready: " + num);
  }
  
  updateTime(map) {
    if (!this.voted) {
      let time = map.get("timePlayed");
      let playersArr = map.get("playersArr");
      this.playersArr = playersArr;
      
      let phase = getPhase(time);
      let phaseTime = realTimeToPhaseTime(time);
      let phaseTimeLeft = PHASE_TIME_PERIODS[phase] - phaseTime;
      this.setAod("Your name is " + this.getPlayerID() + "\n Current phase: " + phases[phase] + "\nTotal game time: " + time + "\nPhase time = " + phaseTime + "\nTime left in this phase: " + phaseTimeLeft);
      if (phaseTime == 1) {
        document.getElementById("aod").setAttribute("visible", "true");
        document.getElementById("textDisplay").setAttribute("visible", "true");
      }
      if (phase == INTRODUCTION_PHASE) {
        this.introduction();
      } else if (phase == SCRIPT_READ_PHASE) {
        this.readScript();
      } else if (phase == DISCUSSION_PHASE1) {
        this.discuss(time, phaseTime, phaseTimeLeft);
      } else if (phase == EXAMINATION_PHASE) {
        this.exam(time, phaseTime, phaseTimeLeft);
      } else if (phase == DISCUSSION_PHASE2) {
        this.discuss(time, phaseTime, phaseTimeLeft);
      } else {
        this.startVote();
      }
    }
  }
  
  introduction() {
    this.setText("Introduce yourself");
  }
  
  exam(time, phaseTime, phaseTimeLeft) {
    this.setText("");
    this.setAod("Your name is " + this.getPlayerID() + "\n Current phase: " + phases[EXAMINATION_PHASE] + "\nTotal game time: " + time + "\nPhase time = " + phaseTime + "\nTime left in this phase: " + phaseTimeLeft + "\nGo exam the room!");
  }
  
  discuss(time, phaseTime, phaseTimeLeft) {
    this.setText("");
    this.setAod("Your name is " + this.getPlayerID() + "\n Current phase: " + phases[3] + "\nTotal game time: " + time + "\nPhase time = " + phaseTime + "\nTime left in this phase: " + phaseTimeLeft + "\nDiscuss!");
  }
  
  startVote() {
    this.subscribe(this.model.id, "voteResult", this.updateVoteResult);
    
    let voteArr = [];
    for (let i = 0; i < this.playersArr.length; i++) {
      if (this.playersArr[i] != this.viewId) {
        voteArr.push(i);
      }
    }
    
    this.voteArr = voteArr;
    
    if (ballot == null) {
      ballot = 0;      
    }
    this.setVote();
    
    this.future(100).checkVote();
  }
  
  checkVote() {
    if (ballot != null) {
      this.setVote();
      if (submit) {
        this.publish(this.model.id, "vote", this.viewId + "=" + this.voteArr[ballot]);
      } else {
        this.future(100).checkVote();
      }
    }      
  }
 
  
  setVote() {
    if (!submit) {
      let text = this.scripts["voteInstruction"];
      for (let i = 0; i < this.voteArr.length; i++) {
        let name = ROLES[this.voteArr[i]];
        if (i == ballot) {
          name = name.toUpperCase();
        }
        text += name + " ";
      }
      this.setText(text);
    }
  }
  
  // map: {viewId => viewId}
  updateVoteResult(map) {
    if (!this.voted) {
      if (map.size < this.playersArr.length) {
        this.setText(map.size + " players have voted\n You voted " + ROLES[this.voteArr[ballot]]);
      } else {
        let result = "";
        let count = [];
        for (let i = 0; i < ROLES.length; i++) {
          count[i] = 0;
        }
        for (let voter of map.keys()) {
          result += this.getRoleName(voter) + " voted " + ROLES[map.get(voter)] + "\n";
          count[map.get(voter)]++;
        }
        
        let max = -1;
        let maxIndex = -1;
        for (let i = 0; i < count.length; i++) {
          if (count[i] > max) {
            max = count[i];
            maxIndex = i;
          }
        }
        if (maxIndex == MURDERER) {
          result += this.win();
        } else {
          result += this.lose();
        }
        
        this.setText(result);
        this.voted = true;
      } 
    }
  }
  
  win() {
    let murderer = this.playersArr[MURDERER];
    if (murderer == this.viewId) {
      // return "You are the murderer, you lose";
      return this.scripts["murderLose"];
    } else {
      return "The murderer is " + this.getRoleName(this.playersArr[MURDERER]) + ", you win!";
    }
  }
  
  lose() {
    let murderer = this.playersArr[MURDERER];
    if (murderer == this.viewId) {
      // return "You are the murderer, you win";
      return this.scripts["murderWin"];
    } else {
      return "The murderer is " + this.getRoleName(this.playersArr[MURDERER]) + ", you lose!";
    }
  }
  
  getRoleName(id) {
    return ROLES[this.playersArr.indexOf(id)];
  }
  
  readScript() {
      let myId = this.getPlayerID();
      let myScript = this.scripts[this.getPlayerID()];
      this.setText("You are " + myId + ", here is your story:\n" + myScript);
  }
  
  setText(text) {
    let textDisplay = document.getElementById("textDisplay");
    textDisplay.setAttribute("text", "value: " + text + "; color: red; width: 2");
  }
  
  setAod(text) {
    let aod = document.getElementById("aod");
    aod.setAttribute("text", "value: " + text);
  }
  
}

Croquet.Session.join({
  appId: "com.seanyang",
  name: "netaizzz",
  password: "zz",
  model: GameModel,
  view: GameView,
});