import ObjectToDOM from 'object2dom';
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

  const longLoader = () => {
    if (sevenDayPanel.innerText === 'loading results...') sevenDayPanel.innerText = 'This is taking longer than usual. Check your network settings';
  };

  const loader = () => {
    sevenDayPanel.innerText = 'loading results...';
    setTimeout(longLoader, 4000);
  };

  const displayCity = (obj) => {
    cityNameDiv.innerText = `${obj.city}, ${obj.country}`;
  };

  const error = () => {
    sevenDayPanel.innerText = 'Please enter a place name for weather results';
  };

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
