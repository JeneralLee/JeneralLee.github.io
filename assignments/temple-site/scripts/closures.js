/*----- Call JSON Data -----*/
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
    var AKclosures = jsonObj['AKdate'];
    for (var i = 0; i < AKclosures.length; i++) {
        document.getElementById("anchorage").innerHTML += AKclosures[i] + "<br>";
    }
}

function columbiariver(jsonObj) {
    var CRclosures = jsonObj['CRdate'];
    for (var i = 0; i < CRclosures.length; i++) {
        document.getElementById("columbiariver").innerHTML += CRclosures[i] + "<br>";
    }
}

function houston(jsonObj) {
    var TXclosures = jsonObj['TXdate'];
    for (var i = 0; i < TXclosures.length; i++) {
        document.getElementById("houston").innerHTML += TXclosures[i] + "<br>";
    }
}

function nauvoo(jsonObj) {
    var ILclosures = jsonObj['ILdate'];
    for (var i = 0; i < ILclosures.length; i++) {
        document.getElementById("nauvoo").innerHTML += ILclosures[i] + "<br>";
    }
}

