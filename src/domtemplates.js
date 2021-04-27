import { fromUnixTime, format } from 'date-fns';

const templates = (() => {
  const weatherCard = (obj) => ({
    tag: 'div',
    classes: ['weather-card'],
    children: [
      {
        tag: 'div',
        classes: ['weather-time'],
        content: format(new Date(fromUnixTime(obj.time)), 'E do MMM'),
      },
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
        classes: ['weather-temp-max'],
        content: `${obj.max}°C`,
      },
      {
        tag: 'div',
        classes: ['weather-temp-min'],
        content: `${obj.min}°C`,
      },
    ],
  });
  return {
    weatherCard,
  };
})();

export default templates;
