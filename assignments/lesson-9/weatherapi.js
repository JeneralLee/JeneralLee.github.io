    var apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=69d6a88fe18541eb0984a7492251747e";
    var weatherRequest = new XMLHttpRequest();
    weatherRequest.open("GET", apiURL);
    weatherRequest.responseType = 'json';
    weatherRequest.send();
    weatherRequest.onload = function (){
        var currentTemp = weatherRequest.response;
        document.getElementById("current-temp").innerHTML = currentTemp.list[0].main.temp;
        console.log(weatherRequest.response);
    }
