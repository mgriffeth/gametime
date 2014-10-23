console.log("Let's get ready for some D&D style shennanigans!");



// :::::CONSTRUCTORS::::://

var Hero = function (options) {
  options = options || {};
  this.class = options.class;
  this.name = options.name;
  this.health = options.health;
  this.isAlive = options.isAlive;
  this.mana = options.mana || 0;
  this.attackMax = options.attackMax;
  this.specialMax = options.specialMax;
  /*this.isDead = function(){
    if(this.health <= 0){
      this.isAlive = false;
      console.log(this.name + " is dead.")
    }
  }*/

  //this.isAlive = options.isAlive
  this.attack = function(target){
    hit = Math.floor(Math.random() * 2);
    if(hit){
      target.health -= (_.random(5, options.attackMax));
      console.log('Hit!');
    }else{
      console.log('Miss!');
    }
    /*  if (target.health <= 0){
        console.log(target.name +" is dead...")
      }*/
    };
  this.special = function(target){
    hit = Math.floor(Math.random() * 2);
    if((this.mana > 0) && (hit)){
      target.health = target.health - (_.random(10, options.specialMax));
      this.mana = (this.mana -= 1);
      console.log('Hit!');
    }else if(this.mana > 0){
      this.mana = (this.mana -= 1);
      console.log('Miss!');
    }else if (this.mana <= 0){
        console.log(this.name + " is out of mana");
    }
  };
};



var Enemy = function (options)  {
  options = options || {};
  this.class = options.class;
  this.name = options.name;
  this.health = options.health;
  this.isAlive = options.isAlive;
  this.mana = options.mana || 0;
  this.attackMax = options.attackMax;
  this.specialMax= options.specialMax;
  this.attack = options.attack;
  this.special = options.special;
//  this.isAlive = options.isAlive;
  this.attackMax = options.attackMax;
  this.specialMax= options.specialMax;
  this.attack = function(target){
    hit = Math.floor(Math.random() * 2);
    if(hit){
      target.health -= (_.random(5, options.attackMax));
      console.log('Hit!');
    }else{
      console.log('Miss!');
    }
    /*  if (target.health <= 0){
        console.log(target.name +" is dead...")
      }*/
    };
  this.special = function(target){
  hit = Math.floor(Math.random() * 2);
  if((this.mana > 0) && (hit)){
    target.health = target.health - (_.random(10, options.specialMax));
    this.mana = (this.mana -= 1);
    console.log('Hit!');
  }else if(this.mana > 0){
    this.mana = (this.mana -= 1);
    console.log('Miss!');
  }else if (this.mana <= 0){
      console.log(this.name + " is out of mana");
    }
  };
};
//::::::Instances::::::://


//----heros----//
var hero = new Hero({health:100,attackMax:100, specialMax: 1000});

var heroMage = new Hero({
class: 'cleric',
 name: 'Omniscient Bob',
 health:100,
 mana: 10,
 attackMax:15,
 specialMax: 1000,
 isAlive: true
});

var heroFighter = new Hero({
class: 'paladin',
 name: 'Simon Buttkicker',
 health:200,
 mana: 5,
 attackMax:35,
 specialMax: 1000,
 isAlive: true
});

var heroStealth = new Hero({
  class: 'theif',
  name: 'Yolanda er..just Yolanda',
  health:150,
  mana:6,
  attackMax:25,
  specialMax: 1000,
  isAlive: true
});



var heros = [ heroMage, heroFighter, heroStealth];

var heroic_template =$('#heroTemplate').html();
var rendered_heroic_template = _.template(heroic_template);



var renderHeros = function(heros) {
  $('.aList').empty();
  heros.forEach(function(hero){
  console.log(hero);
  $('.aList').append(rendered_heroic_template(hero));
});};

renderHeros(heros);


//---enemies---//
var enemy = new Enemy({health:100,attackMax:100, specialMax: 1000});

var enemyMage = new Enemy({
  class: 'necromancer',
  name: 'Rotten Bob',
  health:100,
  mana: 10,
  attackMax:15,
  specialMax: 1000,
  isAlive: true
});

var enemyFighter = new Enemy({
  class: 'marauder',
  name: 'Crotch Kicker',
  health:200,
  mana: 5,
  attackMax:35,
  specialMax: 1000,
  isAlive: true
});

var enemyStealth = new Enemy({
  class:'assassin',
  name: 'Puppy Puncher',
  health:150,
  mana:6,
  attackMax:25,
  specialMax: 1000,
  isAlive: true
});



var enemies = [enemyMage, enemyFighter, enemyStealth];

var enemy_template =$('#enemyTemplate').html();
var rendered_enemy_template = _.template(enemy_template);



var renderEnemies = function(enemies) {
  $('.bList').empty();
  enemies.forEach(function(enemy){
  console.log(enemy);
  $('.bList').append(rendered_enemy_template(enemy));
});};

renderEnemies(enemies);

var refresh = function(){
  renderHeros(heros);
  renderEnemies(enemies);
};
