$(document).ready(function(){
  
  $("#header").load("./header.html", function(){

    $("#header .header_area .main_m > li").on("mouseover", function(){
      $(this).addClass("active");
    });
    $("#header .header_area .main_m > li").on("mouseout", function(){
      $(this).removeClass("active");
    });
  
  
    $("#header .header_area .icon .ham").on("click", function(){
      var hamActive = $("#header .header_area .icon .ham").hasClass("active");
      if(hamActive == true){
        $("#header .ham_menu").slideUp();
        $("#header .header_area .icon .ham").removeClass("active");
        
        
      }else{
        $("#header .header_area .icon .ham").addClass("active");
        $("#header .ham_menu").slideDown();
      }
      
      return false;
    });
    
  
    $("#header .ham_menu .icon .close").on("click", function(){
      $("#header .ham_menu").slideUp();
      $("#header header .icon .ham").removeClass("active");
      return false;
    });



    var $sub_plus = $(".ham_menu .header_area2 nav .main_m > li > a > span");
    $sub_plus.click(function(event){
      var active2 = $(this).closest("li").hasClass("active2");

      if(active2 == true){
        $(".ham_menu .header_area2 nav .main_m > li").removeClass("active2");
        
      }else{
        $(".ham_menu .header_area2 nav .main_m > li").removeClass("active2");
        $(this).closest("li").addClass("active2");
      }
      
      event.stopPropagation();
      return false;
    })
  });


  // footer
  $("#footer").load("./footer.html", function(){
    $(".top_btn").click(function(){
      $("html, body").animate({scrollTop : 0}, 400);
      return false;
    });

    $("#footer .site a").click(function(){
      var active_f = $("footer .wrap .sns .site").hasClass("active");

      if(active_f == true){
        $("footer .wrap .sns .site").removeClass("active");
      }else{
        $("footer .wrap .sns .site").addClass("active")
      }

      return false;
    });
  });

});