import './style.css';
import domcontrol from './domcontrol';
import ApiCalls from './appcalls';
import ObjectTemplates from './weatherobject';

domcontrol.submitBtn.onclick = function (e) {
  e.preventDefault();
  const searchTerm = domcontrol.searchTerm.value;

  const getResults = function (search) {
    domcontrol.loader();
    return ApiCalls.getWeather(search);
  };
  getResults(searchTerm)
    .then((result) => {
      const weatherObj = ObjectTemplates.dataExtractor(result);
      domcontrol.displayData(weatherObj);
      return ApiCalls.getWeatherForecast(result.coord.lat, result.coord.lon);
    })
    .then((result) => {
      domcontrol.cardController(result);
    });
};
