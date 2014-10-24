//on click hero attack enemy
//then enemy retaliate
//  refreshes chacter info

$('.heroContainer').on('click','heroCards',function(){
  $(this).addClass('activeHero');
  console.log("i'm here")
})


$('.attackBtn').click(function(){
  console.log('ATTK');
});


$('.specialBtn').click(function(){
  console.log('SP.ATTK');
})
