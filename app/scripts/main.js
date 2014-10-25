//on click hero attack enemy
//then enemy retaliate
//  refreshes chacter info
var name1;
$('.heroContainer').on('click','.heroCards',function(){
  $('.heroCards').removeClass('activeHero')
  $(this).addClass('activeHero');
  name1 = this.getAttribute('data-name');
  console.log(name1);



  //console.log(document.getElementById(heroName.html));
  //alert( $( ".heroCards" ).data( "name" ) );
})

$('.enemyContainer').on('click','.enemyCards',function(){
  $('.enemyCards').removeClass('activeEnemy')
  $(this).addClass('activeEnemy');
  name2 = this.getAttribute('data-name');
  console.log(name2);

})

$('.attackBtn').click(function(){
  console.log('ATTK');
});


$('.specialBtn').click(function(){
  console.log('SP.ATTK');
})

//activeHero.attack(activeEnemy);
//define activeHero

//$( ".activeHero" ).data( "name", choosenHeroName );
