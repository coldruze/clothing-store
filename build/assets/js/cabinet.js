var show_profile=document.querySelector('.cabinet__profile-info');
var cabinet__profile=document.querySelector('#cabinet__profile');
var show_orders=document.querySelector('.cabinet__orders-info');
var cabinet__orders=document.querySelector('#cabinet__orders');

cabinet__profile.addEventListener("click", function(){
	if(show_profile.style.display == 'none'){
		show_profile.style.display = 'block'
		show_orders.style.display = 'none'
	}
    else {
		show_profile.style.display = 'none'
	}
});

cabinet__orders.addEventListener("click", function(){
	if(show_orders.style.display == 'none'){
		show_orders.style.display = 'block'
		show_profile.style.display = 'none'
	}
    else {
		show_orders.style.display = 'none'
	}
});
