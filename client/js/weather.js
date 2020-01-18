// Weather data
document.getElementById("weather").innerHTML = "Testing printX";
function updateMap() {
    var lat = 35;
    var lon = 139;
    var url = 'http://pi.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon;
    $.getJSON(url, function (data) {
        //data is the JSON string
    });
    //document.getElementById("weather").innerHTML = data['weather'];
    document.getElementById("weather").innerHTML = "Testing printX";
}