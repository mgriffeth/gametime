//on click hero attack enemy
//then enemy retaliate
//  refreshes chacter info

$('.heroContainer').on('click','.heroCards',function(){
  $('.heroCards').removeClass('activeHero')
  $(this).addClass('activeHero');
})

$('.enemyContainer').on('click','.enemyCards',function(){
  $('.enemyCards').removeClass('activeEnemy')
  $(this).addClass('activeEnemy');
})

$('.attackBtn').click(function(){
  console.log('ATTK');
});


$('.specialBtn').click(function(){
  console.log('SP.ATTK');
})
