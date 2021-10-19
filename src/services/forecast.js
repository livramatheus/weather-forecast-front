import Axios from "axios";

export function getForecast(latitude, longitude) {
  return Axios.get(`${process.env.REACT_APP_BACK_URL}/forecast`, {
    params: {
      lat: latitude,
      long: longitude
    }
  });
}
