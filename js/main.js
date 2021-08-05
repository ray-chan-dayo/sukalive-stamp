$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});
var pageTop = document.getElementById("page-top");
var yws_pagetop = function() {
    if (window.pageYOffset > 400) {
		pageTop.classList.add("fixed")
    } else {
		pageTop.classList.remove("fixed")
    }
};

window.addEventListener("load", yws_pagetop);
window.addEventListener("scroll", yws_pagetop);

scrollTop('page-top', 500);

function scrollTop(elem, duration) {
	let target = document.getElementById(elem);
	target.addEventListener('click', function() {
		let currentY = window.pageYOffset; 
		let step = duration/currentY > 1 ? 10 : 100;
		let timeStep = duration/currentY * step;
		let intervalID = setInterval(scrollUp, timeStep);
	
		function scrollUp(){
			currentY = window.pageYOffset;
			if(currentY === 0) {
				clearInterval(intervalID);
			} else {
				scrollBy( 0, -step );
			}
		}
	});
}
/*
document.getElementsByClassName('ray-yumeaka-link').forEach(rayYumeakaLink => rayYumeakaLink.href='https://yumeaka.jp/')
*/
