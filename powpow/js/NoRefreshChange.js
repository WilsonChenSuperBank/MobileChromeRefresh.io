
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
   //判斷有無勾選
   var question8From = inputChkTf("question8", 7);
   var question7From = inputChkTf("question7", 6);
   var question6From = inputChkTf("question6", 5);
   var question5From = inputChkTf("question5", 4);
   var question4From = inputChkTf("question4", 4);
   var question3From = inputChkTf("question3", 3);
   var question2From = inputChkTf("question2", 2);
   var question1From = inputChkTf("question1", 1);

   if (question8From && question7From && question6From && question5From && question4From && question3From && question2From && question1From) {
      console.log("go");
      Swal.fire({
         type: 'success',
         title: '恭喜您完成問卷',
         text: '可以回家睡覺ㄌ'
       })
   }
   else {
      console.log("not go");
      Swal.fire({
         type: 'error',
         title: '還有東西沒填',
         text: '可以專心一點ㄇ'
       })
   }
});

var clk = 0;

$("input[name=question6]").on("click",function(){
   clk++;
   if(clk>10){
      $("#eggClk").attr("style","display:inline-block");
   }
})

//判斷input radio checkbox 有無勾選funtcion
function inputChkTf(inputName, pageValue) {
   var questionFrom = false;
   $("input[name=" + inputName + "]").each(function () {
      if ($(this).prop("checked")) { questionFrom = true; }
   });
   if (!questionFrom) {
      $("input[name=" + inputName + "]").each(function () {
         $(this).next("label").addClass("error");
      });
      changeDataPage(pageValue);
   }
   return questionFrom;
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

