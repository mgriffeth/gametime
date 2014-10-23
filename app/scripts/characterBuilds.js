console.log("Let's get ready for some D&D style shennanigans!");



// :::::CONSTRUCTORS::::://

var Hero = function (options) {
  options = options || {};
  this.name = options.name;
  this.health = options.health;
  this.mana = options.mana || 0;
  this.attackMax = options.attackMax;
  this.specialMax= options.specialMax;
  //this.isAlive = options.isAlive
  this.attack = function(target){
    target.health -= (_.random(options.attackMax));
    /*  if (target.health <= 0){
        console.log(target.name +" is dead...")
      }*/
    };
  this.special = function(target){
    while(this.mana > 0){
      target.health = target.health - (_.random(specialMax));
      this.mana = (this.mana -= 1);
    }
  };
};



var Enemy = function (options)  {
  options = options || {};
  this.name = options.name;
  this.health = options.health;
  this.mana = options.mana || 0;
  this.attackMax = options.attackMax;
  this.specialMax= options.specialMax;
  this.attack = options.attack;
  this.special = options.special;
//  this.isAlive = options.isAlive;
  this.attackMax = options.attackMax;
  this.specialMax= options.specialMax;
  this.attack = function(target){
    target.health = target.health - (_.random(attackMax));
  /*  if (target.health <= 0){
       target.isAlive = false;
    }*/
  };
  this.special = function(target){
  while(this.mana > 0){
      target.health = target.health - (_.random(specialMax));
      this.mana = (this.mana -= 1);
    }
  };
};


//::::::Instances::::::://


//----heros----//
var hero = new Hero({health:100,attackMax:100, specialMax: 1000});

var cleric = new Hero({name: 'Omniscent Bob', health:100, mana: 10, attackMax:15, specialMax: 1000, isAlive: true});

var paladin = new Hero({name: 'Simon Buttkicker', health:200, mana: 5, attackMax:35, specialMax: 1000, isAlive: true});

var theif = new Hero({name: 'Yolanda er..just Yolanda', health:150, mana:6, attackMax:25, specialMax: 1000, isAlive: true});



var heros = {mage: cleric, warrior: paladin, rouge: theif}



//---enemies---//
var enemy = new Enemy({health:100,attackMax:100, specialMax: 1000});

var necromancer = new Enemy({name: 'Rotten Bob', health:100, mana: 10, attackMax:15, specialMax: 1000, isAlive: true});

var marauder = new Enemy({name: 'Throat Cutter', health:200, mana: 5, attackMax:35, specialMax: 1000, isAlive: true});

var assassin = new Enemy({name: 'Death Bringer', health:150, mana:6, attackMax:25, specialMax: 1000, isAlive: true});



var enemies = {mage: necromancer, warrior: marauder, rouge: assassin}
