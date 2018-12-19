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
	
	  var $this = $(this); /*Cache in variable*/
	
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
var JSONrequestURL = "../files/temple-closure.json";
var JSONrequest = new XMLHttpRequest();

JSONrequest.open("GET", JSONrequestURL);
JSONrequest.responseType = "json";
JSONrequest.send();
JSONrequest.onload = function() {
	var closures = JSONrequest.response;
	anchorage(closures);
}

function anchorage(jsonObj) {
	var anchSched = jsonObj.date[0];
		document.getElementById("anchorage").innerHTML = anchSched;
		console.log(JSONrequest.response);
	}

/*----- Alaska Weather -----*/
var AKapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5879348&units=imperial&APPID=69d6a88fe18541eb0984a7492251747e";
var AKweatherRequest = new XMLHttpRequest();
AKweatherRequest.open("GET", AKapiURL);
AKweatherRequest.responseType = 'json';
AKweatherRequest.send();
AKweatherRequest.onload = function (){
	var AKcurrentTemp = AKweatherRequest.response;
	document.getElementById("AKweather").innerHTML = AKcurrentTemp.list[0].main.temp;
	document.getElementById("AKsky").innerHTML = AKcurrentTemp.list[0].weather[0].description;
	console.log(AKweatherRequest.response);
}

/*----- Columbia River Weather -----*/
var CRapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5799610&units=imperial&APPID=69d6a88fe18541eb0984a7492251747e";
var CRweatherRequest = new XMLHttpRequest();
CRweatherRequest.open("GET", CRapiURL);
CRweatherRequest.responseType = 'json';
CRweatherRequest.send();
CRweatherRequest.onload = function (){
	var CRcurrentTemp = CRweatherRequest.response;
	document.getElementById("CRweather").innerHTML = CRcurrentTemp.list[0].main.temp;
	document.getElementById("CRsky").innerHTML = CRcurrentTemp.list[0].weather[0].description;
	console.log(CRweatherRequest.response);
}

/*----- Houston Weather -----*/
var TXapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5194369&units=imperial&APPID=69d6a88fe18541eb0984a7492251747e";
var TXweatherRequest = new XMLHttpRequest();
TXweatherRequest.open("GET", TXapiURL);
TXweatherRequest.responseType = 'json';
TXweatherRequest.send();
TXweatherRequest.onload = function (){
var TXcurrentTemp = TXweatherRequest.response;
document.getElementById("TXweather").innerHTML = TXcurrentTemp.list[0].main.temp;
document.getElementById("TXsky").innerHTML = TXcurrentTemp.list[0].weather[0].description;
console.log(TXweatherRequest.response);
}

/*----- Nauvoo Weather -----*/
var ILapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=4903330&units=imperial&APPID=69d6a88fe18541eb0984a7492251747e";
var ILweatherRequest = new XMLHttpRequest();
ILweatherRequest.open("GET", ILapiURL);
ILweatherRequest.responseType = 'json';
ILweatherRequest.send();
ILweatherRequest.onload = function (){
var ILcurrentTemp = ILweatherRequest.response;
document.getElementById("ILweather").innerHTML = ILcurrentTemp.list[0].main.temp;
document.getElementById("ILsky").innerHTML = ILcurrentTemp.list[0].weather[0].description;
console.log(ILweatherRequest.response);
}
