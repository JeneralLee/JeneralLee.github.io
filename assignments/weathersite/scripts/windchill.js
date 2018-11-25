var apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=69d6a88fe18541eb0984a7492251747e";
var weatherRequest = new XMLHttpRequest();
weatherRequest.open("GET", apiURL);
weatherRequest.responseType = 'json';
weatherRequest.send();
weatherRequest.onload = function (){
var currentTemp = weatherRequest.response;
document.getElementById("t").innerHTML = currentTemp.list[0].main.temp;
document.getElementById("s").innerHTML = currentTemp.list[0].wind.speed;
var s = document.getElementById("s").innerHTML;
var t = document.getElementById("t").innerHTML;
var f = 35.74 + (0.6215*t) - (35.75*Math.pow(s,0.16)) + ((0.4275*t)*Math.pow(s,0.16));
document.getElementById("windchill").innerHTML = Math.round(f);
}