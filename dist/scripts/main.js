//on click hero attack enemy
//then enemy retaliate
//  refreshes chacter info
var name1,
    name2,
    fightingHero,
    fightingEnemy;

$('.heroContainer').on('click','.heroCards',function(){
  $('.heroCards').removeClass('activeHero');
  $(this).addClass('activeHero');
  name1 = this.getAttribute('data-name');
  console.log(name1);
  //console.log(document.getElementById(heroName.html));
  //alert( $( ".heroCards" ).data( "name" ) );
});

$('.enemyContainer').on('click','.enemyCards',function(){
  $('.enemyCards').removeClass('activeEnemy');
  $(this).addClass('activeEnemy');
  name2 = this.getAttribute('data-name');
  console.log(name2);

});
var getActive = function(){
  heros.forEach(function(hero){
    if(hero.name == name1){
      fightingHero = hero;
      console.log(fightingHero);
    }
  });
  enemies.forEach(function(enemy){
    if(enemy.name == name2){
      fightingEnemy = enemy;
      console.log(fightingEnemy);
    }
  });
};



$('.attackBtn').click(function(){
  console.log('ATTK');
  getActive();
  fightingHero.attack(fightingEnemy);
  fightingEnemy.attack(fightingHero);
});


$('.specialBtn').click(function(){
  console.log('SP.ATTK');
  getActive();
  fightingHero.special(fightingEnemy);
  fightingEnemy.special(fightingHero);
});

//activeHero.attack(activeEnemy);
//define activeHero

//$( ".activeHero" ).data( "name", choosenHeroName );

console.log("Let's get ready for some D&D style shennanigans!");



// :::::CONSTRUCTORS::::://

var Hero = function (options) {
  options = options || {};
  this.class = options.class;
  this.name = options.name;
  this.avatar = options.avatar;
  this.health = options.health;
  this.isDead = options.isDead;
  this.mana = options.mana || 0;
  this.attackMax = options.attackMax;
  this.specialMax = options.specialMax;

  this.attack = function(target){
    hit = Math.floor(Math.random() * 2);
    if(hit){
      target.health -= (_.random(5, options.attackMax));
      console.log('Hit!');
    }else{
      console.log('Miss!');
    }
    refresh();
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
    refresh();
  };
};



var Enemy = function (options)  {
  options = options || {};
  this.class = options.class;
  this.name = options.name;
  this.avatar = options.avatar;
  this.health = options.health;
  this.isDead = options.isDead;
  this.mana = options.mana || 0;
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
    refresh();
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
    refresh();
  };
};
//::::::Instances::::::://


//----heros----//


var heroMage = new Hero({

class: 'Sorceror',
 name: 'Omniscient Bob',
 avatar: 'http://fenrir.finalfantasyq.com/battleground/ss3/ss3aniamakusa1.gif',
 health:100,
 isDead: false,
 mana: 10,
 attackMax:15,
 specialMax: 1000,
});

var heroFighter = new Hero({
class: 'Brawler',
 name: 'Simon Buttkicker',
 avatar: 'http://fenrir.finalfantasyq.com/battleground/ss3/ss3anigaira1.gif',
 health:200,
 isDead: false,
 mana: 5,
 attackMax:35,
 specialMax: 1000,
});

var heroStealth = new Hero({
  class: 'Theif',
  name: 'Jackie',
  avatar:'http://fenrir.finalfantasyq.com/battleground/ss3/ss3aninakoruru1.gif',
  health:150,
  isDead: false,
  mana:6,
  attackMax:25,
  specialMax: 1000,
});



var heros = [ heroMage, heroFighter, heroStealth];

var heroic_template =$('#heroTemplate').html();
var rendered_heroic_template = _.template(heroic_template);
var renderHeros = function(heros) {
  $('.aList').empty();
  heros.forEach(function(hero){
    console.log(hero);
  if(hero.isDead){
    console.log( hero.name + " isDead");}
  $('.aList').append(rendered_heroic_template(hero));
});};

renderHeros(heros);


//---enemies---//


var enemyMage = new Enemy({
  class: 'Necromancer',
  name: 'Morgana',
  avatar:'http://fenrir.finalfantasyq.com/battleground/ss5/ss5animizukikick1.gif',
  health:100,
  isDead: false,
  mana: 10,
  attackMax:15,
  specialMax: 1000,
});

var enemyFighter = new Enemy({
  class: 'Marauder',
  name: 'Crotch Kicker',
  avatar:'http://fenrir.finalfantasyq.com/battleground/ss3/ss3anizankuro1.gif',
  health:200,
  isDead: false,
  mana: 5,
  attackMax:35,
  specialMax: 1000,
});

var enemyStealth = new Enemy({
  class:'Assassin',
  name: 'Puppy Puncher',
  avatar: 'http://fenrir.finalfantasyq.com/battleground/ss3/ss3anihanzo1.gif',
  health:150,
  isDead: false,
  mana:6,
  attackMax:25,
  specialMax: 1000,
});

//$( ".enemyCards" ).data( "name", enemy.name );

var enemies = [enemyMage, enemyFighter, enemyStealth];

var enemy_template =$('#enemyTemplate').html();
var rendered_enemy_template = _.template(enemy_template);
var renderEnemies = function(enemies) {
  $('.bList').empty();
  enemies.forEach(function(enemy){
  console.log(enemy);
  if(enemy.isDead){
    console.log( enemy.name + " isDead");}
  $('.bList').append(rendered_enemy_template(enemy));
});};

renderEnemies(enemies);

var deadHeros,
    deadEnemies;


var findDead =function(heros, enemies){
  //find dead heros
  heros.forEach(function(hero){
    if(hero.health <= 0){
     hero.isDead = true;
     //heros = _.without(heros, deadHeros);
     console.log("hero " + hero.name + " died");
   }
 });
  //find dead enemies
    enemies.forEach(function(enemy){
      if(enemy.health <= 0){
        enemy.isDead = true;
      //  enemies = _.without(enemies,enemy)
     //deadEnemies = enemies.indexOf(enemy);
     console.log("enemy " + enemy.name + " died");
      }
    });

};
var evalWinner = function(){
  if((heros.length > 0) && (enemies.length === 0)){
    $('.good').removeClass('hide');
    console.log('YOU WIN!');
  }else if((enemies.length > 0) && (heros.length === 0)){
    $('.bad').removeClass('hide');
    console.log('YOU LOSE.');
  }
};





var cleanDead = function(){
  heros = _.reject(heros,function(hero){return hero.health <= 0 });
  enemies = _.reject(enemies,function(enemy){return enemy.health <= 0});
};

var refresh = function(){
  cleanDead();
  renderHeros(heros);
  renderEnemies(enemies);
  evalWinner();
};
