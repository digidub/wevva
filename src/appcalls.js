// eslint-disable-next-line consistent-return
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import XYZ from 'ol/source/XYZ';

const ApiCalls = (() => {
  let map;

  function getWeather(search) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a0f91643f488572be003cc868721e65a`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 404) {
          return Promise.reject(new Error('error 404, city not found'));
        }
        return Promise.reject(new Error(response.status));
      })
      .then((response) => response);
  }

  function getWeatherForecast(lat, lon) {
    return fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=a0f91643f488572be003cc868721e65a`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 404) {
          return Promise.reject(new Error('error 404, lat/lon not found'));
        }
        return Promise.reject(new Error(response.status));
      })
      .then((response) => response);
  }

  function initiateMap(lat, lon) {
    if (map === undefined) {
      map = new Map({
        pixelRatio: 1,
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new TileLayer({
            source: new XYZ({
              url: 'https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=a0f91643f488572be003cc868721e65a',
            }),
          }),
        ],
        view: new View({
          center: fromLonLat([lat, lon]),
          zoom: 2,
        }),
      });
    } else {
      map.getView().setCenter(fromLonLat([lon, lat]));
      map.getView().setZoom(8);
    }
  }

  return {
    getWeather,
    getWeatherForecast,
    initiateMap,
  };
})();

export default ApiCalls;
