$(function(){
    // nav-link 滾動效果
    $('#header').find('.nav-link:not(.goLink)').on('click', function(e){
        e.preventDefault();
        var $href = $(this).attr('href');
        $('html,body').animate({scrollTop:$($href).offset().top}, 500);
	});
	$('#footer').find('.footer__nav-link:not(.goLink)').on('click', function(e){
        e.preventDefault();
        var $href = $(this).attr('href');
        $('html,body').animate({scrollTop:$($href).offset().top}, 500);
	});

	// web header 變換底色
	function showheader(){
		if($(window).width()>767){
			var headerh = $('#defaultimg').innerHeight();
			$('#header').removeClass('show');
		  	if($('html,body').scrollTop() > 1){
				$('#header').addClass('show');
			}else if($('html,body').scrollTop() < headerh){
		  		$('#header').removeClass('show');
			}
		}else{
		 	$('#header').removeClass('show');
		}
	}
	$(window).on('scroll resize',showheader);

	// 幻燈片
	$("#owl-demo, #owl-demo2").owlCarousel({
		items:1,
		loop:true,
		dots:true,
		mouseDrag:true,
		autoplay:true,
		animateOut: 'fadeOut',
	});
	$("#owl-demo3").owlCarousel({
		items:1,
		loop:true,
		dots:true,
		mouseDrag:true,
		autoplay:true,
		animateOut: 'fadeOut',
	});

	// 數字跑馬
	$('.myCounter1').waypoint(function(){
		$('.myCounter1').lemCounter({
			value_to: 50
		});
	},{offset:'95%'})
	$('.myCounter2').waypoint(function(){
		$('.myCounter2').lemCounter({
			value_to: 350000
		});
	},{offset:'95%'})
	$('.myCounter3').waypoint(function(){
		$('.myCounter3').lemCounter({
			value_to: 3000000
		});
	},{offset:'95%'})

	//scroll
	$("html").easeScroll();
	//animation	
	$('.ani').each(function(index){
		$(this).css('transition-delay',index/5+"s");
	})
	
	$('.ani1,.ani2,.ani3').css('opacity',0)

	$('.ani').waypoint(function(){
		$(this.element).addClass('zoomintype');
	},{offset:'95%'})	

	// 	$('.ani0').waypoint(function(){
	// 	$(this).addClass('slideInDown')
	// },{offset:'95%'})

	$('.ani1').waypoint(function(){
		$(this.element).addClass('fadeIn');
	},{offset:'95%'})
	// 	$('.ani6').waypoint(function(){
	// 	$(this).addClass('fadeInDown')
	// },{offset:'95%'})
	// $('.ani2').waypoint(function(){
	// 	$(this).addClass('fadeInLeft')
	// },{offset:'95%'})
	// $('.ani3').waypoint(function(){
	// 	$(this).addClass('fadeInRight')
	// },{offset:'95%'})
	// $('.ani4').waypoint(function(){
	// 	$(this).addClass('fadeIn')
	// },{offset:'95%'})
	// $('.ani5').waypoint(function(){
	// 	$(this).addClass('fadeInRight')
	// },{offset:'95%'})

	//article 文章連結
	// $('.article').on('click', function(){
	// 	var $that = $(this);
	// 	var $href = $that.data('href');
	// 	var $origin = window.location.origin + window.location.pathname;
	// 	window.location.href = $origin + $href;
	// })
})