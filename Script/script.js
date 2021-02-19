
// $('.burger').click(function() {
//     console.log();
//     $('.transform').toggleClass('transform-active');
  
//   });
// const toggle = document.querySelector(".burger");

// toggle.addEventListener("click", (ev) => {
//   toggle.classList.toggle("active");
// });


$(".button").click(function() {
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
})