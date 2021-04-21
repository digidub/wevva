function weatherToObject(object) {
  return {
    city: object.name,
    country: object.sys.country,
    time: object.dt,
    temp: object.main.temp,
    icon: object.weather[0].icon,
    desc: object.weather[0].description,
  };
}

export default weatherToObject;
