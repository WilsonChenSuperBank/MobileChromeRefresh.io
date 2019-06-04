$(".buttonVal").on("click",function(){
   $(".buttonVal").removeClass("active");
   $(this).addClass("active");
})

$(document).ready(function() {
   $('.has-animation').each(function(index) {
     $(this).delay($(this).data('delay')).queue(function(){
       $(this).addClass('animate-in');
     });
   });
 });
 