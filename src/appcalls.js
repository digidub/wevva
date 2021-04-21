async function getWeather(search) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a0f91643f488572be003cc868721e65a`);
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

// async function getWeatherMap(x, y) {
//   const response = await fetch(`http://api.openweathermap.org/maps/2.0/weather/TA2/1/${x}/${y}&appid=a0f91643f488572be003cc868721e65a`);
//   const mapData = await response.json();
//   console.log(mapData);
// }

// async function getWeatherController() {
//   await getWeather(search);
// }

export default getWeather;
