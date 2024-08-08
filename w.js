let apiKey = "5a520ca1e60a956111dfa1051a095ded";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let serachBox = document.querySelector(".search input");
let serachBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

// let data = await response.json();
// document.querySelector(".city").innerHTML = data.name;
// document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
// document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
// document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
// if (data.weather[0].main === "Clouds") {
//   weatherIcon.src = "images/clouds.png";
// } else if (data.weather[0].main === "Clear") {
//   weatherIcon.src = "images/clear.png";
// } else if (data.weather[0].main === "Rain") {
//   weatherIcon.src = "images/rain.png";
// } else if (data.weather[0].main === "Drizzle") {
//   weatherIcon.src = "images/drizzle.png";
// } else if (data.weather[0].main === "Mist") {
//   weatherIcon.src = "images/mist.png";
// }
// document.querySelector(".weather").style.display = "block";
// }
serachBtn.addEventListener("click", () => {
  checkWeather(serachBox.value);
});
