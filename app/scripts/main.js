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
      if (target.health <= 0){
        console.log(target.name +" is dead...")
      }
    };
  this.special = function(target){
    while(this.mana >0){
      target.health = target.health - (_.random(specialMax))
      this.mana = (this.mana -= 1);
    }
  };
};



var Enemy = function (options)  {
  options = options || {};
  this.name = options.name;
  this.health = options.health;
  this.attackMax = options.attackMax;
  this.specialMax= options.specialMax;
  this.attack = options.attack;
  this.special = options.special;
//  this.isAlive = options.isAlive;
  var attackMax = this.attackMax = options.attackMax;
  var specialMax = this.specialMax= options.specialMax;
  this.attack = function(target){
    target.health = target.health - (_.random(attackMax))
    if (target.health <= 0){
       target.isAlive = false;
    }
  };
  this.mana = options.mana || 0;
  this.special = function(target){
  while(this.mana >0){
      target.health = target.health - (_.random(specialMax))
      this.mana = (this.mana -= 1);
    }
  };
};


//::::::Instances::::::://


//----heros----//
var hero = new Hero({health:100,attackMax:100, specialMax: 1000});

var mage = new Hero({name: 'Omniscent Bob', health:100, mana: 10, attackMax:15, specialMax: 1000, isAlive: true});

var fighter = new Hero({name: 'Simon Buttkicker', health:200, mana: 5, attackMax:35, specialMax: 1000, isAlive: true});

var rouge = new Hero({name: 'Yolanda er..just Yolanda', health:150, mana:6, attackMax:25, specialMax: 1000, isAlive: true});


//---enemies---//
var enemy = new Enemy({health:100,attackMax:100, specialMax: 1000});

var necromancer = new Enemy({name: 'Rotten Bob', health:100, mana: 10, attackMax:15, specialMax: 1000, isAlive: true});

var marauder = new Enemy({name: 'Throat Cutter', health:200, mana: 5, attackMax:35, specialMax: 1000, isAlive: true});

var assassin = new Enemy({name: 'Death Bringer', health:150, mana:6, attackMax:25, specialMax: 1000, isAlive: true});
