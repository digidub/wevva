async function getWeather(search) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a0f91643f488572be003cc868721e65a`);
  const weatherData = await response.json();
  console.log(weatherData);
}

export default getWeather;
