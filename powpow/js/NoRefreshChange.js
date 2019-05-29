
$(".questionChange ul li").on("click",function(){
   //console.log($(this).data("page"));

   var liDataPage = $(this);
   
   $(".question").each(function () {
      if($(this).data("page") === liDataPage.data("page")){
         $(this).addClass("appear");
      }
      else{
         $(this).removeClass("appear");
      }
   });
   $(".questionChange ul li").each(function(){
      $(this).removeClass("active");
   })
   $(this).addClass("active");

})