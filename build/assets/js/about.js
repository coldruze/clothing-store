var text1=document.querySelector('.about__serv__block-text1');
var text2=document.querySelector('.about__serv__block-text2');
var text3=document.querySelector('.about__serv__block-text3');
var text4=document.querySelector('.about__serv__block-text4');
var text5=document.querySelector('.about__serv__block-text5');
var btn1=document.querySelector('#about__serv-btn1');
var btn2=document.querySelector('#about__serv-btn2');
var btn3=document.querySelector('#about__serv-btn3');
var btn4=document.querySelector('#about__serv-btn4');
var btn5=document.querySelector('#about__serv-btn5');

btn1.addEventListener("click", function(){
	if(text1.style.display == 'none'){
		text1.style.display = 'flex'
	}
    else {
		text1.style.display = 'none'
	}
});

btn2.addEventListener("click", function(){
	if(text2.style.display == 'none'){
		text2.style.display = 'flex'
	}
    else {
		text2.style.display = 'none'
	}
});

btn3.addEventListener("click", function(){
	if(text3.style.display == 'none'){
		text3.style.display = 'flex'
	}
    else {
		text3.style.display = 'none'
	}
});

btn4.addEventListener("click", function(){
	if(text4.style.display == 'none'){
		text4.style.display = 'flex'
	}
    else {
		text4.style.display = 'none'
	}
});

btn5.addEventListener("click", function(){
	if(text5.style.display == 'none'){
		text5.style.display = 'flex'
	}
    else {
		text5.style.display = 'none'
	}
});



var info_teammate1=document.querySelector('.about__teammate1');
var show_teammate1=document.querySelector('#teammate__btn1');
var info_teammate2=document.querySelector('.about__teammate2');
var show_teammate2=document.querySelector('#teammate__btn2');
var info_teammate3=document.querySelector('.about__teammate3');
var show_teammate3=document.querySelector('#teammate__btn3');

show_teammate1.addEventListener("click", function(){
	if(info_teammate1.style.display == 'none'){
		info_teammate1.style.display = 'block'
		show_teammate1.style.opacity == "1"
		info_teammate2.style.display = 'none'
		info_teammate3.style.display = 'none'
	}
    else {
		info_teammate1.style.display = 'none'
	}
});

show_teammate2.addEventListener("click", function(){
	if(info_teammate2.style.display == 'none'){
		info_teammate1.style.display = 'none'
		info_teammate2.style.display = 'block'
		show_teammate2.style.opacity == "1"
		info_teammate3.style.display = 'none'
	}
    else {
		info_teammate2.style.display = 'none'
	}
});

show_teammate3.addEventListener("click", function(){
	if(info_teammate3.style.display == 'none'){
		info_teammate1.style.display = 'none'
		info_teammate2.style.display = 'none'
		info_teammate3.style.display = 'block'
		show_teammate3.style.opacity == "1"
	}
    else {
		info_teammate3.style.display = 'none'
	}
});
