const domcontrol = (() => {
  // DOM identifiers
  const searchTerm = document.querySelector('.search');
  const submitBtn = document.querySelector('.submit');
  const cityName = document.querySelector('.city-name');
  const weatherIconDiv = document.querySelector('.weather-icon');

  const displayData = (obj) => {
    cityName.innerText = `${obj.city}, ${obj.country}`;
    const weatherIcon = new Image();
    weatherIcon.src = `http://openweathermap.org/img/wn/${obj.icon}@2x.png`;
    weatherIconDiv.appendChild(weatherIcon);
  };

  return { searchTerm, submitBtn, displayData };
})();

export default domcontrol;
