const apikey = "c8e0e097ceb05f6392ae8fa674ddf115";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        const weatherCondition = data.weather[0].main.toLowerCase();

        if(weatherCondition === "clouds"){
            weathericon.src = "images/clouds.png";
        } else if(weatherCondition === "clear"){
            weathericon.src = "images/clear.png";
        } else if(weatherCondition === "rain"){
            weathericon.src = "images/rain.png";
        } else if(weatherCondition === "drizzle"){
            weathericon.src = "images/drizzle.png";
        } else if(weatherCondition === "mist"){
            weathericon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);   
});

