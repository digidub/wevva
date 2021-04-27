import './style.css';
import domcontrol from './domcontrol';
import ApiCalls from './appcalls';
import ObjectTemplates from './weatherobject';

window.onload = () => {
  ApiCalls.initiateMap(0, 0);
};

domcontrol.submitBtn.onclick = function searchButton(e) {
  e.preventDefault();
  const searchTerm = domcontrol.searchTerm.value;
  if (searchTerm === '') {
    domcontrol.error();
    return;
  }
  domcontrol.loader();
  function getResults(search) {
    return ApiCalls.getWeather(search);
  }
  getResults(searchTerm)
    .then((result) => {
      const weatherObj = ObjectTemplates.dataExtractor(result);
      domcontrol.displayCity(weatherObj);
      ApiCalls.initiateMap(result.coord.lat, result.coord.lon);
      return ApiCalls.getWeatherForecast(result.coord.lat, result.coord.lon);
    })
    .then((result) => {
      domcontrol.cardController(result);
    });
};
