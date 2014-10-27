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
