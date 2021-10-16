import Axios from "axios";

export function getPrevisao(latitude, longitude) {
  return Axios.get("https://lcmfv.sse.codesandbox.io/previsao", {
    params: {
      lat: latitude,
      long: longitude
    }
  });
}
