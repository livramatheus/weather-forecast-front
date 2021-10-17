import Axios from "axios";

export function getPrevisao(latitude, longitude) {
  return Axios.get("https://z8nuo.sse.codesandbox.io/previsao", {
    params: {
      lat: latitude,
      long: longitude
    }
  });
}
