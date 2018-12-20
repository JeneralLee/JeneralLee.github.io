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
var TXapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=4699066&units=imperial&APPID=69d6a88fe18541eb0984a7492251747e";
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
