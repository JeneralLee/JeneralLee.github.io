/*var apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=69d6a88fe18541eb0984a7492251747e";
var weatherRequest = new XMLHttpRequest();
weatherRequest.open("GET", apiURL);
weatherRequest.responseType = 'json';
weatherRequest.send();
weatherRequest.onload = function (){
    var currentTemp = weatherRequest.response;
    document.getElementById("weatherdescription").innerHTML = currentTemp.list[0].weather[0].main;
    document.getElementById("current").innerHTML = currentTemp.list[0].weather[0].main;
    document.getElementById("t").innerHTML = currentTemp.list[0].main.temp;
    document.getElementById("humidity").innerHTML = currentTemp.list[0].main.humidity;
   document.getElementById("precipitation").innerHTML = currentTemp.list[0].########;
    document.getElementById("s").innerHTML = currentTemp.list[0].wind.speed;
}*/

var forecastURL = "api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=69d6a88fe18541eb0984a7492251747e";
var forecastRequest = new XMLHttpRequest();
forecastRequest.open("GET", forecastURL, "jsonp");
forecastRequest.responseType = "json";
forecastRequest.send();
forecastRequest.onload = function (){
  var forecast = forecastRequest.response;
/*  document.getElementById("").innerHTML = */
  console.log(weatherRequest.response);

}