requirejs.config({
paths:{ 
	jquery:'jquery-3.1.1.min' }

});

requirejs(['jquery'], function ($) {

//首页满屏
  $("#block-intro-one").css("height", $(window).height());
// 首页动画
  var gao=($(window).height()/2-120) +'px';
  $(".banner").css('top',gao);
//页面刷新
  $(".logo").on("click",refresh);
function refresh(){ window.location.reload(); }
	
//平滑过渡	
   $('.fstPage-down a,.fr a').on('click',next);
    function next()
    {
    	var $anchor = $(this);
		$('html, body').animate({scrollTop: $($anchor.attr('href')).offset().top}, 600);
       // attr返回属性；offset返回目标相对于dom的位置
    }

   $('.shake-vertical').on('click',bt);
   function bt(){
   	$('html, body').animate({scrollTop: $("#block-intro").offset().top}, 600);
   }
	$(".one,.two").on('click',function(){
		$(".phone,.phone-two").css('color','#F90');
	})



//返回顶部函数	
$('#backtop').on('click',move);
	function move()
	
{ if ($(window).scrollTop() !=0) 
	{
		if (!$('html,body').is('animate')) 
			{
				$('html,body').animate({scrollTop:0},500);
			}
	}
		
}



//返回顶部按钮隐藏

$(window).on('scroll',function() {
	 	checkPosition($(window).height())
	 });
	checkPosition($(window).height());

	 function checkPosition(pos) 
	 {
	 	if ($(window).scrollTop() > pos)
	 	{
	 		$('#backtop').fadeIn();
	 	}
	 else
	 	{
	 		$('#backtop').fadeOut();
	 	}
	 	
	 }

})

