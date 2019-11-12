const START_HP = 20;
const START_SP = 10;
const DEFAULT_ATK = 5;
const DEFAULT_DEF = 5;
const DEFAULT_TEK = 5;

const P0NAME = "Crash"
const P0CHARA = "crashr"
const P1NAME = "Sam"
const P1CHARA = "saml"

let playerTurn = false;
let logging = true;

class Fighter {
  constructor(name, charaName) {
    //'contructor' is in all JS classes
    // It gets run immediately when a new object is created from a class

    // Set all of our default values for this new fighter here
    this.name = name;
    this.hp = START_HP;
    this.sp = START_SP;
    this.atk = DEFAULT_ATK;
    this.def = DEFAULT_DEF;
    this.tek = DEFAULT_TEK;
    this.charaName = charaName;
  }

  attack(target) {
    console.log("Attacked!");
  }
  single(){
    this.attack();
  }
  double(){
    this.attack()
    this.attack();
  }
  recover(){
    console.log("Recovered!");

  }
}

let Player0;

<<<<<<< HEAD
function startup(){
 Player0 = newFighter("Crash", "crashr");
=======
function startup() {
  Player0 = new Fighter(P0NAME, P0CHARA);
  Player1 = new Fighter(P1NAME, P1CHARA);
>>>>>>> upstream/Release-Candidate

console.log("My name is "   + Player0.name + " and my ATK is ");
}
