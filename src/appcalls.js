// eslint-disable-next-line consistent-return

const ApiCalls = (() => {
  function getWeather(search) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a0f91643f488572be003cc868721e65a`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 404) {
          return Promise.reject(new Error('error 404, city not found'));
        }
        return Promise.reject(new Error(response.status));
      })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => console.log(error));
  }

  function getWeatherForecast(lat, lon) {
    return fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=a0f91643f488572be003cc868721e65a`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 404) {
          return Promise.reject(new Error('error 404, lat/lon not found'));
        }
        return Promise.reject(new Error(response.status));
      })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => console.log(error));
  }

  return {
    getWeather,
    getWeatherForecast,
  };
})();

// async function getWeatherMap(x, y) {
//   const response = await fetch(`http://api.openweathermap.org/maps/2.0/weather/TA2/1/${x}/${y}&appid=a0f91643f488572be003cc868721e65a`);
//   const mapData = await response.json();
//   console.log(mapData);
// }

// async function getWeatherController() {
//   await getWeather(search);
// }

//   try {
//     const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a0f91643f488572be003cc868721e65a`);
//     if (response.ok) {
//       const weatherData = await response.json();
//       console.log(weatherData);
//       return weatherData;
//     } else if (!response.ok) {
//       const weatherData = await response.json();
//       console.log(weatherData);
//     }
//   } catch (e) {
//     console.log(e);
//   }

export default ApiCalls;
