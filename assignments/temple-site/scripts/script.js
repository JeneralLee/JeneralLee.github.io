$(document).ready(function() {
	$("body").on('click', '.top', function() {
		$("nav.menu").toggleClass("menu_show");
	});
});

var urlString, urlArray, pageHREF, menu, i, currentURL;
urlString = document.location.href;
urlArray = urlString.split('/');
pageHREF = urlArray[urlArray.length - 1];

if (pageHREF !== "") {
	menu = document.querySelectorAll('ul#mainmenu li a');
	for (i = 0; i < menu.length; i++) {
		currentURL = (menu[i].getAttribute('href'));
		menu[i].parentNode.className = '';
		if (currentURL === pageHREF) {
			menu[i].parentNode.className += 'active';
		}
	}
}

function openRes() {
	window.location = "reservation.html";
}

var d = new Date(),
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct',
    'Nov','Dec'],
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var n = days[d.getDay()]+', '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()
document.getElementById("footerdate").innerHTML = n;

function goBack() {
    window.history.back();
}

function goHome() {
	window.open("index.html", "_self");
}
