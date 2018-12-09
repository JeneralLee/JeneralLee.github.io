/*----- Hamburger Menu -----*/
$(document).ready(function() {
	$("body").on('click', '.top', function() {
		$("nav.menu").toggleClass("menu_show");
	});
});

/*----- Wayfaring (NOT WORKING) -----*/
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

/*----- Make Reservation Button ----*/
function openRes() {
	window.location = "reservation.html";
}

/*----- Current Date in Footer -----*/
var d = new Date(),
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct',
    'Nov','Dec'],
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var n = days[d.getDay()]+', '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()
document.getElementById("footerdate").innerHTML = n;

/*----- Back Button -----*/
function goBack() {
    window.history.back();
}

/*----- Return to Home Page Button -----*/
function goHome() {
	window.open("index.html", "_self");
}

/*----- Accordion Menu -----*/
$(function() {
	$('.toggle').click(function(e) {
		e.preventDefault();
	
	  var $this = $(this);
	
	  if ($this.next().hasClass('show')) {
		  $this.next().removeClass('show');
		  $this.next().slideUp(350);
	  } else {
		  $this.parent().parent().find('li .inner').removeClass('show');
		  $this.parent().parent().find('li .inner').slideUp(350);
		  $this.next().toggleClass('show');
		  $this.next().slideToggle(350);
	  }
  });
});

/*----- Call JSON Data WIP-----*/
var requestURL = "../files/temple-closure.json";
var request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
	var closures = request.response;
	anchorage(closures);
	columbiariver(closures);
	houston(closures);
	nauvoo(closures);
}

function anchorage(jsonObj) {
	var anchSched = jsonObj['schedule'];
	for(var i=0; i < schedule.length; i++){
		document.getElementById("anchorage").innerHTML += anchSched[i].date;
	}
}