import Axios from "axios";

export function getPrevisao(latitude, longitude) {
  return Axios.get(`${process.env.REACT_APP_BACK_URL}/previsao`, {
    params: {
      lat: latitude,
      long: longitude
    }
  });
}
