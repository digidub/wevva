import ObjectToDOM from 'object2dom';
// import celsiusFarenheit from './ctof';
import templates from './domtemplates';
import ObjectTemplates from './weatherobject';

const domcontrol = (() => {
  // DOM identifiers
  const searchTerm = document.querySelector('.search');
  const submitBtn = document.querySelector('.submit');
  const cityNameDiv = document.querySelector('.city-title');
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

  const displayCity = (obj) => {
    cityNameDiv.innerText = `${obj.city}, ${obj.country}`;
  };

  const error = () => {
    sevenDayPanel.innerText = 'Please enter a place name for weather results';
  };

  // const tempDisplay = () => {
  //   celsiusFarenheit;
  // };

  return {
    searchTerm,
    submitBtn,
    displayCity,
    makeCard,
    displayCards,
    cardController,
    loader,
    error,
  };
})();

export default domcontrol;
