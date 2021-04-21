import './style.css';
import getWeather from './appcalls';
import domcontrol from './domcontrol';
import weatherToObject from './weatherobject';

domcontrol.submitBtn.onclick = async function (e) {
  e.preventDefault();
  const searchTerm = domcontrol.searchTerm.value;
  const result = await getWeather(searchTerm);
  console.log(weatherToObject(result));
};
