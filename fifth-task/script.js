const city = document.querySelector('.city-name');
const mainTemp = document.querySelector('.main-temp');
const minTemp = document.querySelector('.min-temp');
const maxTemp = document.querySelector('.max-temp');
const feelsLikeTemp = document.querySelector('.feels-like-temp');
const descr = document.querySelector('.descr');
const humidity = document.querySelector('.humidity');
const pressure = document.querySelector('.pressure');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const weatherIcon = document.querySelector('.weather-icon');
const LOCATION_API_KEY = '7295ec1575f84a19a5498815d0e1f998';
const WEATHER_API_KEY = '63d4acda19e53922fbfc0a27af56a4a7';

getIP();

function getIP() {
    fetch('https://api.ipgeolocation.io/getip')
    .then( resp => resp.json())
    .then( function(data) {
        getLocation(data.ip);
    });
    // .catch();
}

function getLocation(IP) {
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${LOCATION_API_KEY}&ip=${IP}`)
    .then( resp => resp.json())
    .then (function (data) {
        getWeather(data.city);
    });
    // .catch( error => {
    //     descr.innerHTML = error;
    // });
}


function getWeather(cityName) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`)
        .then( resp => resp.json())
        .then( function (data) {
            city.textContent = `${data.name}, ${data.sys.country}`;
            mainTemp.innerHTML = Math.round((data.main.temp)) + '&deg;';
            minTemp.innerHTML = 'Min temp: ' + Math.round((data.main.temp_min)) + '&deg;';
            maxTemp.innerHTML = 'Max temp: ' + Math.round((data.main.temp_max)) + '&deg;';
            feelsLikeTemp.innerHTML = 'Feels like: ' + Math.round((data.main.feels_like)) + '&deg;';
            descr.textContent = `Weather: ${data.weather[0].description}`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
            pressure.textContent = `Pressure: ${data.main.pressure}`;
            function getTime(sec) {
                let myDate = new Date(sec*1000); 
                return myDate.toLocaleString();
            }
            sunrise.textContent = 'Sunrise: ' + getTime(data.sys.sunrise);
            sunset.textContent = 'Sunset: ' + getTime(data.sys.sunset);
            weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        });
        // .catch(data => {
        //     console.log(data.message);
        // });
    }