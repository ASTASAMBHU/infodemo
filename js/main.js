$(document).ready(function () {
  var btn = $("#top-button");


  
  let modifyBtn = $("#modify-btn");
  // let filterSection = $('#filter-section');

  // $("div.filter").click(function(){
  //   console.log('Filter Section Selected');
  // })

  
  modifyBtn.click(function(){
    console.log('click');
    $("div.filter").toggle(600);    
  });



  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

 
});
