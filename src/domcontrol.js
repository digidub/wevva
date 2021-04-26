import ObjectToDOM from 'object2dom';
// import celsiusFarenheit from './ctof';
import templates from './domtemplates';
import ObjectTemplates from './weatherobject';

const domcontrol = (() => {
  // DOM identifiers
  const searchTerm = document.querySelector('.search');
  const submitBtn = document.querySelector('.submit');
  const cityNameDiv = document.querySelector('.city-title');
  // const weatherIconDiv = document.querySelector('.weather-icon');
  // const weatherDescriptionDiv = document.querySelector('.weather-desc');
  // const temperatureDiv = document.querySelector('.temperature');
  // const timeDiv = document.querySelector('.weather-time');
  const sevenDayPanel = document.querySelector('.seven-day-panel');

  const makeCard = (obj) => {
    const card = templates.weatherCard(obj);
    const domCard = ObjectToDOM.generate(card);
    return domCard;
  };

  const displayCards = (domElement) => {
    sevenDayPanel.appendChild(domElement);
  };

  const cardController = (data) => {
    sevenDayPanel.innerHTML = '';
    data.daily.forEach((day) => {
      const z = ObjectTemplates.dataExtractor(day);
      const card = makeCard(z);
      displayCards(card);
    });
  };

  const loader = () => {
    sevenDayPanel.innerText = 'loading results...';
  };

  const displayData = (obj) => {
    cityNameDiv.innerText = `${obj.city}, ${obj.country}`;
    // const weatherIcon = new Image();
    // weatherIcon.src = `http://openweathermap.org/img/wn/${obj.icon}@2x.png`;
    // weatherIconDiv.innerText = '';
    // weatherIconDiv.appendChild(weatherIcon);
    // temperatureDiv.innerText = obj.temp;
    // const correctTime = fromUnixTime(obj.time);
    // timeDiv.innerText = format(new Date(fromUnixTime(obj.time)), 'do MMM yyyy');
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
    cardController,
    loader,
  };
})();

export default domcontrol;
