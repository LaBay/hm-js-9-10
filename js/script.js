'use strict'

var direction = 0;		//global variable (programmers start counting from zero)
var imgQuantity = 9;	//global variable (set images quantity)
var n;

function counting() {
	n = Math.abs((imgQuantity+direction) % imgQuantity);
};

	/* CODE OF FIRST CAROUSEL */
function variator2(){
	document.getElementById('imgMyCarousel2').setAttribute("src", "img/img" + n + ".jpg");
};

	/* CODE OF SECOND CAROUSEL */
var myCarousel1 = document.getElementById('JSCarousel').children;

function variator1(){
	for (var i = 0; i < myCarousel1.length; i++) {
		myCarousel1[i].classList.remove("show"); 
	};
myCarousel1[n].classList.add("show");
}

	/* CODE OF THIRD CAROUSEL */


var $pic = $('#jQueryCarousel img');

function variator3(){
	for (var i = $pic.length; i >= 0; i--) {
		$pic.eq(n-i).animate({left: 170 * i});
	};	
};	

$(function(){
	for (var i = $pic.length; i >= -0; i--) {
		$pic.eq(i).css("left", 170 * i);
	};		
});


	/* BUTTONS FOR FIRST, SECOND & THIRD CAROUSELS*/

function left(){
	direction--;
	counting();
	variator1();
	variator2();
	variator3()
};

function right(){
	direction++;
	counting();
	variator1();
	variator2();
	variator3()
};

document.getElementById('goLeft').addEventListener("click", left);
document.getElementById('goRight').addEventListener('click', right);



/* CODE FOR CHECKBOX */

var $chbx = $('.forCheckbox2');

$chbx.click(function(){
	var $chbxchkd = $('#checkbox2:checked');
	if ($chbxchkd.length) { $('.forCheckbox2 span').css("background-position", "0px -44px")}
	else { $('.forCheckbox2 span').css("background-position", "0px 0px")}
})