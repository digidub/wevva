const ObjectTemplates = (() => {
  function dataExtractor(data) {
    const obj = {};
    if (data.name) obj.city = data.name;
    if (data.sys?.country) obj.country = data.sys.country;
    if (data.dt) obj.time = data.dt;
    if (data.main?.temp) obj.temp = data.main.temp;
    if (data.temp?.max) obj.max = data.temp.max;
    if (data.temp?.min) obj.min = data.temp.min;
    if (data.weather[0].icon) obj.icon = data.weather[0].icon;
    if (data.weather[0].description) obj.desc = data.weather[0].description;
    return obj;
  }

  return {
    dataExtractor,
  };
})();

export default ObjectTemplates;
