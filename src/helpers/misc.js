const formatAsKmh = (param) => {
  return `${param} km/h`;
};

const formatAsTemperatura = (param) => {
  return `${param.toFixed(1)}°`;
};

const getEmojiTemperatura = (param) => {
  return param < 15 ? "🥶" : "🥵";
};

export default { formatAsKmh, formatAsTemperatura, getEmojiTemperatura };
