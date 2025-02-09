const API_KEY = "62b65d22284139373885c56ac4a5ff49";

function geoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather =  document.querySelector("#weather span:nth-child(1)");
        const city =  document.querySelector("#weather span:nth-child(2)");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        city.innerText = data.name;
    });
}
function geoError(){
    alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(geoOK, geoError);
