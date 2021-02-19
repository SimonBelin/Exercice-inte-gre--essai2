$("#button").click(function() {
    $('.transform').toggleClass('transform-active');
  });

$(document).ready(function(){
  $('.burger').click(function(e){
    e.preventDefault();
    $this = $(this);
    if($this.hasClass('is-opened')){
      $this.addClass('is-closed').removeClass('is-opened');
    }else{
      $this.removeClass('is-closed').addClass('is-opened');
    }
  })
});


//  $("li").click(function() {
//     $('.transform').toggleClass('transform-active');
//   });