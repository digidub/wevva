import { fromUnixTime, format } from 'date-fns';
import ObjectToDOM from 'object2dom';
// import celsiusFarenheit from './ctof';
import templates from './domtemplates';

const domcontrol = (() => {
  // DOM identifiers
  const searchTerm = document.querySelector('.search');
  const submitBtn = document.querySelector('.submit');
  const cityNameDiv = document.querySelector('.city-name');
  const weatherIconDiv = document.querySelector('.weather-icon');
  const weatherDescriptionDiv = document.querySelector('.weather-desc');
  const temperatureDiv = document.querySelector('.temperature');
  const timeDiv = document.querySelector('.weather-time');
  const sevenDayPanel = document.querySelector('.seven-day-panel');

  const makeCard = (obj) => {
    const card = templates.weatherCard(obj);
    const domCard = ObjectToDOM.generate(card);
    return domCard;
  };

  const displayCards = (domElement) => {
    sevenDayPanel.appendChild(domElement);
  };

  const displayData = (obj) => {
    cityNameDiv.innerText = `${obj.city}, ${obj.country}`;
    // const weatherIcon = new Image();
    // weatherIcon.src = `http://openweathermap.org/img/wn/${obj.icon}@2x.png`;
    // weatherIconDiv.innerText = '';
    // weatherIconDiv.appendChild(weatherIcon);
    // temperatureDiv.innerText = obj.temp;
    // const correctTime = fromUnixTime(obj.time);
    // timeDiv.innerText = format(new Date(correctTime), 'do MMM yyyy');
    // weatherDescriptionDiv.innerText = obj.desc;
  };

  // const tempDisplay = () => {
  //   celsiusFarenheit;
  // };

  return {
    searchTerm,
    submitBtn,
    displayData,
    makeCard,
    displayCards,
  };
})();

export default domcontrol;
