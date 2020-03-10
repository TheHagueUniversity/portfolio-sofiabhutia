getJoke();

function getWeather() {
	var city = document.getElementById("location").value;
	var request = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=97fe6f5c5146e4b0f9a8c3b5c31cf9a1';
	fetch(request)	
	.then(function(response) {
		return response.json();
	})
	.then(function(response) {
		APISucces(response);	
	})
	.catch(function (error) {
		APIError(error);
	});
}

function APISucces(response){ 
	console.log(response);
	var averageTempCelcius = Math.round(((response.main.temp_max + response.main.temp_min) / 2) - 273.15);
	var weatherResponse = averageTempCelcius;
	var windSpeed = Math.round(response.wind.speed * 3.6);
	var descriptionWeather = (response.weather[0].main);
	var icon = (response.weather[0].main);
	console.log(icon);
	var degree = response.wind.deg;
	var minTemperature = "min: " + Math.round(response.main.temp_min - 273.15) + " °C";
	var maxTemperature = "max: " + Math.round(response.main.temp_max - 273.15) + " °C";
	var windSpeed = "windspeed: " + response.wind.speed + " km/h";
	document.getElementById('descriptionWeather').innerHTML =  descriptionWeather;
	document.getElementById('minTemperature').innerHTML =  minTemperature;
	document.getElementById('maxTemperature').innerHTML =  maxTemperature;
	document.getElementById('windSpeed').innerHTML =  windSpeed;
	if (icon = 'Thunderstorm') {
		document.getElementById('weatherImage').innerHTML =  '<img src="scripts/images/thunder.png">';
	} else if (icon = 'Drizzle') {
		document.getElementById('weatherImage').innerHTML =  '<img src="scripts/images/rain.png">';
	} else if (icon = 'Rain') {
		document.getElementById('weatherImage').innerHTML =  '<img src="scripts/images/rain.png">';
	} else if (icon = 'Snow') {
		document.getElementById('weatherImage').innerHTML =  '<img src="scripts/images/snow.png">';
	} else if (icon = 'Clear') {
		document.getElementById('weatherImage').innerHTML =  '<img src="scripts/images/clear.png">';
	} else if (icon = 'Clouds'){
		document.getElementById('weatherImage').innerHTML =  '<img src="scripts/images/clouds.png">';
	}
}

function APIError(error){
	console.error('can not fetch data from API', error);
	document.getElementById('descriptionWeather').innerHTML = "We can not return a value, did you type in a correct city?";
	document.getElementById('maxTemperature').innerHTML = "";
	document.getElementById('minTemperature').innerHTML = "";
	document.getElementById('windSpeed').innerHTML = "";
}

function getJoke() {
	var request = 'https://sv443.net/jokeapi/category/Miscellaneous';
	fetch(request)
	.then(function(response) {
		return response.json();
	})
	.then(function(response) {
	var setup = (response.setup);
	var delivery = (response.delivery)
	document.getElementById('jokeSetup').innerHTML =  setup;
	document.getElementById('jokeDelivery').innerHTML =  delivery;
	});
}

		/*if ((response.cod) = 404) {
			document.getElementById('descriptionWeather').innerHTML =  "LOCATION NOT FOUND! Try again";
		} else {
		var averageTempCelcius = Math.round(((response.main.temp_max + response.main.temp_min) / 2) - 273.15);
		var weatherResponse = averageTempCelcius;
		var windSpeed = Math.round(response.wind.speed * 3.6);
		var descriptionWeather = (response.weather[0].description);
		console.log(response.weather[0].description);

		var degree = response.wind.deg;
		var minTemperature = Math.round(response.main.temp_min - 273.15) + " °C";
		var maxTemperature = Math.round(response.main.temp_max - 273.15) + " °C";
		var windSpeed = response.wind.speed + " km/h";

		document.getElementById('descriptionWeather').innerHTML =  descriptionWeather;
		document.getElementById('minTemperature').innerHTML =  minTemperature;
		document.getElementById('maxTemperature').innerHTML =  maxTemperature;
		document.getElementById('windSpeed').innerHTML =  windSpeed;
		}
	};

	
}*/

