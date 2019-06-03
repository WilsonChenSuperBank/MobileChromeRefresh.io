
$(".questionChange ul li").on("click", function () {
   var liDataPage = $(this);
   changeDataPage(liDataPage.data("page"));
});

$(".question button.next , .question button.last").on("click", function () {
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
      Swal.fire({
         type: 'success',
         title: '恭喜您完成問卷',
         text: '三秒後回家睡覺',
         onOpen:dododo("onClose"),
         showConfirmButton:false,
         allowOutsideClick:false,	
         allowEscapeKey:false	
      })
   }
   else {
      Swal.fire({
         type: 'error',
         title: '還有東西沒填',
         text: '可以專心一點ㄇ'
      });
   }
});


//Easter Egg
var clk = 0;
$("input[name=question6]").on("click", function () {
   clk++;
   (clk > 10)
      ? $("#eggClk").attr("style", "display:inline-block")
      : $("#eggClk").attr("style", "display:none");
});

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
      ($(this).data("page") === liDataNum)
         ? $(this).addClass("appear")
         : $(this).removeClass("appear")
   });
   $(".questionChange ul li").each(function () {
      ($(this).data("page") === liDataNum)
         ? $(this).addClass("active")
         : $(this).removeClass("active")
   });
}

// 繁寫
function opIf(booleanNum) {
   if (booleanNum === 0) {
      return 'if1';
   } else if (booleanNum === 1) {
      return 'if2';
   } else {
      return 'if3';
   }
}
// 簡寫
function ezIf(booleanNum) {
   return (booleanNum === 0) ? 'if1' : (booleanNum === 1) ? 'if2' : 'if3';
}

function dododo(doString){
   console.log(doString);
   setTimeout(function(){
      window.location = "./PersonalPut.html";
   },3000)
}  