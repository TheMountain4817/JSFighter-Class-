const START_HP = 20;
const START_SP = 10;
const DEAFULT_ATK = 5;
const DEAFULT_DEF = 5
const DEAFULT_TEK = 5

class Fighter {
  constructor(name, charaName) {
    //'contructor' is in all JS classes
    // It gets run immediately when a new object is created from a class

    // Set all of our deafult values for this new fighter here
    this.name = name;
    this.hp = START_HP;
    this.sp = START_SP;
    this.atk = DEAFULT_ATK;
    this.def = DEAFULT_DEF;
    this.tek = DEAFULT_TEK;
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

function startup(){
 Player0 = newFighter("Crash", "crashr");

console.log("My name is "   + Player0.name + " and my ATK is ");
}
