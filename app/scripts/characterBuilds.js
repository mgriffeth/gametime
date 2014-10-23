console.log("Let's get ready for some D&D style shennanigans!");



// :::::CONSTRUCTORS::::://

var Hero = function (options) {
  options = options || {};
  this.class = options.class;
  this.name = options.name;
  this.health = options.health;
  this.mana = options.mana || 0;
  this.attackMax = options.attackMax;
  this.specialMax= options.specialMax;

  //this.isAlive = options.isAlive
  this.attack = function(target){
    hit = Math.floor(Math.random() * 2);
    if(hit){
      target.health -= (_.random(options.attackMax));
      console.log('Hit!');
    }else{
      console.log('Miss!');
    }
    /*  if (target.health <= 0){
        console.log(target.name +" is dead...")
      }*/
    };
  this.special = function(target){
    while(this.mana > 0){
      target.health = target.health - (_.random(options.specialMax));
      this.mana = (this.mana -= 1);
    }
  };
};



var Enemy = function (options)  {
  options = options || {};
  this.class = options.class;
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

var heroMage = new Hero({class: 'cleric', name: 'Omniscent Bob', health:100, mana: 10, attackMax:15, specialMax: 1000, isAlive: true});

var heroFighter = new Hero({class: 'paladin', name: 'Simon Buttkicker', health:200, mana: 5, attackMax:35, specialMax: 1000, isAlive: true});

var heroStealth = new Hero({class: 'theif', name: 'Yolanda er..just Yolanda', health:150, mana:6, attackMax:25, specialMax: 1000, isAlive: true});



var heros = [ heroMage, heroFighter, heroStealth]



//---enemies---//
var enemy = new Enemy({health:100,attackMax:100, specialMax: 1000});

var enemyMage = new Enemy({class: 'necromancer',name: 'Rotten Bob', health:100, mana: 10, attackMax:15, specialMax: 1000, isAlive: true});

var enemyFighter = new Enemy({class: 'marauder', name: 'Crotch Kicker', health:200, mana: 5, attackMax:35, specialMax: 1000, isAlive: true});

var enemyStealth = new Enemy({class:'assassin', name: 'Puppy Kicker', health:150, mana:6, attackMax:25, specialMax: 1000, isAlive: true});



var enemies = [enemyMage, enemyFighter, enemyStealth]
