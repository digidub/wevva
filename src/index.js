import './style.css';
import domcontrol from './domcontrol';
import ApiCalls from './appcalls';
import ObjectTemplates from './weatherobject';

domcontrol.submitBtn.onclick = function (e) {
  e.preventDefault();
  const searchTerm = domcontrol.searchTerm.value;

  const getResults = function (search) {
    return new Promise((resolve, reject) => {
      const x = ApiCalls.getWeather(search);
      return resolve(x);
    });
  };
  getResults(searchTerm)
    .then((result) => {
      const weatherObj = ObjectTemplates.dataExtractor(result);
      domcontrol.displayData(weatherObj);
      return new Promise((resolve, reject) => {
        const y = ApiCalls.getWeatherForecast(result.coord.lat, result.coord.lon);
        return resolve(y);
      });
    })
    .then((result) => {
      console.log(result.daily);
      result.daily.forEach((day) => {
        const z = ObjectTemplates.dataExtractor(day);
        const card = domcontrol.makeCard(z);
        domcontrol.displayCards(card);
      });
    });
};
