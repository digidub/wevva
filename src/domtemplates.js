const templates = (() => {
  const weatherCard = (obj) => ({
    tag: 'div',
    classes: ['weather-card'],
    children: [
      {
        tag: 'div',
        classes: ['weather-icon'],
        children: [
          {
            tag: 'img',
            src: `http://openweathermap.org/img/wn/${obj.icon}@2x.png`,
          },
        ],
      },
      {
        tag: 'div',
        classes: ['weather-desc'],
        content: obj.desc,
      },
      {
        tag: 'div',
        classes: ['weather-time'],
        content: obj.time,
      },
      {
        tag: 'div',
        classes: ['weather-temp-max'],
        content: obj.max,
      },
      {
        tag: 'div',
        classes: ['weather-temp-min'],
        content: obj.min,
      },
    ],
  });
  return {
    weatherCard,
  };
})();

export default templates;
