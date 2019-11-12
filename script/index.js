class object fighter() {
  constructor(name, charaName){
    //'constructor' is in all JS classes
    // It gets run immediately

    // Set all of our default values for this new fighter here
     name = name;
    this.hp = 20;
    this.sp = 10;
    this.atk = 5;
    this.def = 5;
    this.tek = 5;
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
