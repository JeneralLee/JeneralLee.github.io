var d = new Date(),
    months = ['January','February','March','April','May','June','July','August','September','October',
    'November','December'],
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var n = days[d.getDay()]+' , '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()
document.getElementById("footer-date").innerHTML = n;