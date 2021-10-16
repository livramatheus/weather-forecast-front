import "./style/styles.css";
import { useEffect, useState } from "react";
import TopRow from "./components/TopRow";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detalhe from "./pages/Detalhe";
import { getPrevisao } from "./services/previsao";

export default function App() {
  const [geral, setGeral] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const requesitaDados = () => {
    getPrevisao(latitude, longitude).then((resposta) => {
      if (resposta.status === 200) {
        setGeral(resposta.data);
      }
    });
  };

  useEffect(() => {
    gerenciaLocalizacao();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      requesitaDados();
    }
  }, [latitude, longitude]);

  const gerenciaLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  return (
    <div className="App">
      <Router>
        <TopRow dados={geral} />
        <div id="content">
          <Switch>
            <Route exact path="/">
              <Main dados={geral} />
            </Route>
            <Route path="/detalhe">
              <Detalhe dados={geral} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
