/*----- Call JSON Data WIP-----*/
var JSONrequestURL = "https://raw.githubusercontent.com/JeneralLee/JeneralLee.github.io/master/assignments/temple-site/files/temple-closures.json";
var JSONrequest = new XMLHttpRequest();

JSONrequest.open("GET", JSONrequestURL);
JSONrequest.responseType = "json";
JSONrequest.send();
JSONrequest.onload = function() {
var x = JSONrequest.response;
anchorage(x);
columbiariver(x);
houston(x);
nauvoo(x);
}

function anchorage(jsonObj) {
    var closures = jsonObj['AKdate'];
    for (var i = 0; i < closures.length; i++) {
        document.getElementById("anchorage").innerHTML += closures[i] + "<br>";
    }
}

function columbiariver(jsonObj) {
    var closures = jsonObj['CRdate'];
    for (var i = 0; i < closures.length; i++) {
        document.getElementById("columbiariver").innerHTML += closures[i] + "<br>";
    }
}

function anchorage(jsonObj) {
    var closures = jsonObj['TXdate'];
    for (var i = 0; i < closures.length; i++) {
        document.getElementById("houston").innerHTML += closures[i] + "<br>";
    }
}

function anchorage(jsonObj) {
    var closures = jsonObj['ILdate'];
    for (var i = 0; i < closures.length; i++) {
        document.getElementById("nauvoo").innerHTML += closures[i] + "<br>";
    }
}
