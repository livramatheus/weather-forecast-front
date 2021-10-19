import { Link } from "react-router-dom";
import DadosGerais from "./DadosGerais";
import DataHoje from "./DataHoje";
import TemperaturaAtual from "./TemperaturaAtual";
import TempoAtual from "./TempoAtual";

export default function DadosDeHoje(props) {
  let { data, descricao, temperatura, vento, humidade } = props;

  return (
    <Link to="/detail" className="dados-de-hoje glass slim-shadow-text">
      <DataHoje data={data} />
      <TemperaturaAtual temperatura={temperatura} />
      <TempoAtual descricao={descricao} />
      <DadosGerais vento={vento} humidade={humidade} />
    </Link>
  );
}
