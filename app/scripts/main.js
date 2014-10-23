//on click hero attack enemy
//then enemy retaliate
//  refreshes chacter info
var cleanDead =function(heros, enemies){
  heros.forEach(function(hero){
    if(hero.health <= 0){
     x = heros.indexOf(hero);
     heros.splice(x, x)
     console.log("hero " + heros[x].name + " died");
      }
    enemies.forEach(function(enemy){
      if(enemy.health <= 0){
     y = enemies.indexOf(enemy);
     enemies.splice(y, y)
     console.log("enemy " + enemies[y].name + " died");
      }
    });
  });
};
var refresh = function(){
  cleanDead(heros,enemies);
  renderHeros(heros);
  renderEnemies(enemies);
};
