const apikye = '0f680d4ae72e055fbbba01860a3f1ea8';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikye}`);
  var data = await response.json();

  console.log(data);

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `°C`;
  document.querySelector('.humidity').innerHTML = data.main.humidity + `%`;
  document.querySelector('.wind').innerHTML = data.wind.speed + `km/h`;
}
// checkWeather('comilla');
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})
// console.log(searchBox.value);