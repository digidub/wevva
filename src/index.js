import './style.css';
import getWeather from './appcalls';
import domcontrol from './domcontrol';

domcontrol.submitBtn.onclick = function (e) {
  e.preventDefault();
  const searchTerm = domcontrol.searchTerm.value;
  getWeather(searchTerm);
};
