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
