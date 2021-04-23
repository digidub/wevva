import './style.css';
import getWeather from './appcalls';
import domcontrol from './domcontrol';
import weatherToObject from './weatherobject';

domcontrol.submitBtn.onclick = function (e) {
  e.preventDefault();
  const searchTerm = domcontrol.searchTerm.value;

  const getResults = function (search) {
    return new Promise((resolve, reject) => {
      const x = getWeather(search);
      return resolve(x);
    });
  };
  getResults(searchTerm).then((result) => console.log(weatherToObject(result)));
};
