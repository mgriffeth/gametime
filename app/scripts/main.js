//on click hero attack enemy
//then enemy retaliate
//  refreshes chacter info
var deadHeros,
    deadEnemies;


var findDead =function(heros, enemies){
  //find dead heros
  heros.forEach(function(hero){
    if(hero.health <= 0){
     deadHeros = heros.indexOf(hero);
     console.log("hero " + heros[deadHeros].name + " died");
      }
  //find dead enemies
    enemies.forEach(function(enemy){
      if(enemy.health <= 0){
     deadEnemies = enemies.indexOf(enemy);
     console.log("enemy " + enemies[deadEnemies].name + " died");
      }
    });
  });
};

var cleanDead = function(){
  findDead(heros,enemies);
  heros.splice(deadHeros,deadHeros);
  enemies.splice(deadEnemies,deadEnemies);
};

var refresh = function(){
  cleanDead();
  renderHeros(heros);
  renderEnemies(enemies);

};
