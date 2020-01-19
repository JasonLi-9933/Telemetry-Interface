// Weather data
function updateWeather() {
    const weatherID = document.getElementById('WeatherData');
    var lat = 35;
    var lon = 139;
    var url = 'http://pi.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon;
    
    fetch('https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22')
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Work with JSON data here
            weatherID.innerHTML = data.name;
            console.log(data);
        })
        .catch(err => {
            // Do something for an error here
        })
    
        /*
    res = '{"coord":{"lon":139.01,"lat":35.02},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":285.514,"pressure":1013.75,"humidity":100,"temp_min":285.514,"temp_max":285.514,"sea_level":1023.22,"grnd_level":1013.75},"wind":{"speed":5.52,"deg":311},"clouds":{"all":0},"dt":1485792967,"sys":{"message":0.0025,"country":"JP","sunrise":1485726240,"sunset":1485763863},"id":1907296,"name":"Tawarano","cod":200}'
    var obj = JSON.parse(res);
    weatherID.innerHTML = obj.name;
    */
}