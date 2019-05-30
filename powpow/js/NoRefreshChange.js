
$(".questionChange ul li").on("click", function () {
   //console.log($(this).data("page"));
   var liDataPage = $(this);
   changeDataPage(liDataPage.data("page"));
});

$(".question button.next , .question button.last").on("click", function () {
   //console.log($(this).data("page"));
   var liDataPage = $(this);
   changeDataPage(liDataPage.data("page"));
});

$(".question button.go").on("click", function () {
   //檢查所有欄位
   var question1From = false;
   $("input[name='question1']").each(function () {
      if ($(this).prop("checked")) { question1From = true; }
   });
   if(!question1From){ changeDataPage(1);return false;}

   var question2From = false ;
   $("input[name='question2']").each(function () {
      if ($(this).prop("checked")) { question2From = true; }
   });
   if(!question2From){ changeDataPage(2);return false;}

   var question3From = false ;
   $("input[name='question3']").each(function () {
      if ($(this).prop("checked")) { question3From = true; }
   });
   if(!question3From){ changeDataPage(3);return false;}

   //判斷有無勾選
   //inputChkTf("question1",1);
   
});

//判斷input radio checkbox 有無勾選funtcion
function inputChkTf(inputName,pageValue){
   var questionFrom = false;
   $("input[name="+inputName+"]").each(function () {
      if ($(this).prop("checked")) { questionFrom = true; }
   });
   if(!questionFrom){ changeDataPage(pageValue);return false;}
}

//改變頁數funtcion
function changeDataPage(liDataNum) {
   $(".question").each(function () {
      if ($(this).data("page") === liDataNum) {
         $(this).addClass("appear");
      }
      else {
         $(this).removeClass("appear");
      }
   });
   $(".questionChange ul li").each(function () {
      if ($(this).data("page") === liDataNum) {
         $(this).addClass("active");
      }
      else {
         $(this).removeClass("active");
      }
   });
}

