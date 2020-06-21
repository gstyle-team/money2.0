$(function(){
    // nav-link 滾動效果
    $('#header').find('.nav-link:not(.goLink)').on('click', function(e){
        e.preventDefault();
		var $href = $(this).attr('href');
		var $origin = window.location.origin + window.location.pathname;
        window.location.href = $origin + '/index.html' + $href;
    });
    $('#footer').find('.footer__nav-link:not(.goLink)').on('click', function(e){
        e.preventDefault();
        var $href = $(this).attr('href');
        window.location.href = $origin + '/index.html' + $href;
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

	//scroll
	$("html").easeScroll();
})