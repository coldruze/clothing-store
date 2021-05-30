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

btn1.addEventListener("click", function(e){
	e.preventDefault();
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
var show_teammate1=document.querySelector('.teammate__btn1');
var info_teammate2=document.querySelector('.about__teammate2');
var show_teammate2=document.querySelector('.teammate__btn2');
var info_teammate3=document.querySelector('.about__teammate3');
var show_teammate3=document.querySelector('.teammate__btn3');

show_teammate1.addEventListener("click", function(e){
	e.preventDefault();
	if(info_teammate1.style.display == 'none'){
		info_teammate1.style.display = 'block'
		info_teammate2.style.display = 'none'
		info_teammate3.style.display = 'none'
		show_teammate1.classList.remove("teammate__btn1")
		show_teammate1.classList.add("teammate__btn1--active")
	}
    else {
		info_teammate1.style.display = 'none'
		show_teammate1.classList.remove("teammate__btn1--active")
		show_teammate1.classList.add("teammate__btn1")
	}
});

show_teammate2.addEventListener("click", function(){
	if(info_teammate2.style.display == 'none'){
		info_teammate1.style.display = 'none'
		info_teammate2.style.display = 'block'
		info_teammate3.style.display = 'none'
		show_teammate2.classList.remove("teammate__btn2")
		show_teammate2.classList.add("teammate__btn2--active")
	}
    else {
		info_teammate2.style.display = 'none'
		show_teammate2.classList.remove("teammate__btn2--active")
		show_teammate2.classList.add("teammate__btn2")
	}
});

show_teammate3.addEventListener("click", function(){
	if(info_teammate3.style.display == 'none'){
		info_teammate1.style.display = 'none'
		info_teammate2.style.display = 'none'
		info_teammate3.style.display = 'block'
		show_teammate3.classList.remove("teammate__btn3")
		show_teammate3.classList.add("teammate__btn3--active")
	}
    else {
		info_teammate3.style.display = 'none'
		show_teammate3.classList.remove("teammate__btn3--active")
		show_teammate3.classList.add("teammate__btn3")
	}
});

// function contact_send(){
// 	alert("Thanks!");
// }

var menu_btn=document.querySelector('.about__mobile-btn');
var menu_nav=document.querySelector('.about__mobile-nav');

menu_btn.addEventListener("click", function(e){
	e.preventDefault();
	if (menu_nav.style.display == 'none'){
		menu_nav.style.display = 'flex'
	}
	else{
		menu_nav.style.display = 'none'
	}
});
