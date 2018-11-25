var townURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var townRequest = new XMLHttpRequest();
townRequest.open("GET", townURL);
townRequest.responseType="json";
townRequest.send();
townRequest.onload = function(){
    var towndata = townRequest.response;
    document.getElementById("Pname").innerHTML=towndata.towns[4].name;
    document.getElementById("Pmotto").innerHTML=towndata.towns[4].motto;
    document.getElementById("Pyear").innerHTML=towndata.towns[4].yearFounded;
    document.getElementById("Ppop").innerHTML=towndata.towns[4].currentPopulation;
    document.getElementById("Prain").innerHTML=towndata.towns[4].averageRainfall;
    document.getElementById("SSname").innerHTML=towndata.towns[5].name;
    document.getElementById("SSmotto").innerHTML=towndata.towns[5].motto;
    document.getElementById("SSyear").innerHTML=towndata.towns[5].yearFounded;
    document.getElementById("SSpop").innerHTML=towndata.towns[5].currentPopulation;
    document.getElementById("SSrain").innerHTML=towndata.towns[5].averageRainfall;
    document.getElementById("FHname").innerHTML=towndata.towns[1].name;
    document.getElementById("FHmotto").innerHTML=towndata.towns[1].motto;
    document.getElementById("FHyear").innerHTML=towndata.towns[1].yearFounded;
    document.getElementById("FHpop").innerHTML=towndata.towns[1].currentPopulation;
    document.getElementById("FHrain").innerHTML=towndata.towns[1].averageRainfall;
}