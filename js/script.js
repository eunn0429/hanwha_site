$(document).ready(function(){
  var slideCase = $("#main .slider ul");
  var slides = $("#main .slider ul li");
  var prev = $("#main .slider .slide_btn .prev");
  var next = $("#main .slider .slide_btn .next");
  var stop = $("#main .slider .slide_btn .stop");

  
  var lastSlide = slides.last();
  slideCase.prepend(lastSlide);




  setInterval(function(){
    var stopActive = $("#main .slider .slide_btn .stop").hasClass("active");

    if(stopActive == true){

    }else{
      var firstSlide = $("#main .slider ul li").first();
      slideCase.stop().animate({"margin-left":"-200%"}, 1000, function(){
        slideCase.append(firstSlide).css("margin-left", "-100%");
      });
      
    }
    return false;


  }, 4000);
  
  
  stop.click(function(){
    var stopActive = $("#main .slider .slide_btn .stop").hasClass("active");
  
    
    if(stopActive == true){
      stop.removeClass("active");
    }else{
      stop.addClass("active");
    }
    return false;
  });



  next.click(function(){
    var firstSlide = $("#main .slider ul li").first();
    slideCase.stop().animate({"margin-left":"-200%"}, 1000, function(){
      slideCase.append(firstSlide);
      slideCase.css("margin-left", "-100%");
    });
    return false;
  });

  prev.click(function(){
    var lastSlide = $("#main .slider ul li").last();
    slideCase.stop().animate({"margin-left":"0%"}, 1000, function(){
      slideCase.prepend(lastSlide).css("margin-left", "-100%");
    });
    return false;
  });


});








var cont2 = document.querySelector("#cont2 .wrap ul");

var article = [
  ["story_img01.jpg", "한화건설, 수원 컨벤션센터 복합개발사업 민관협업 위한 업무협력 약정 체결", "한화건설(대표이사 최광호)은 11일 수원시청 상황실에서 수원 컨벤션센터 복합개발사업의 민관협업을 강화하기 위해..."],
  ["story_img02.jpg", "한화건설, 수도권 내 집 마련의 이상형‘김포 풍무 꿈에그린 2차’ 9월 분양", "한화건설(대표 최광호)은 오는 9월 경기도 김포시 풍무5지구 3~5 블록 일원에 총 1,070세대 신축아파트..."],
  ["story_img03.jpg", "한화건설, 서울~세종고속도로 안성~구리 건설공사 제10공구 수주", "서울~세종고속도로 건설공사는 수도권 고속도로망 계획 중 남북의 5축을 완성하는 대규모 국책사업으로..."]
];

var insert = "";

for(v of article){
  insert += `
  <li>
    <img src="./img/${v[0]}" alt="">
    <div class="txt">
      <h5>${v[1]}</h5>
      <p>${v[2]}</p>
    </div>
  </li>
  `;
}

cont2.innerHTML = insert;

