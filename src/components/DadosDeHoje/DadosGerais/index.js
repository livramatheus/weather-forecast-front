import Vento from "./Vento";
import Humidade from "./Humidade";

export default function DadosGerais(props) {
  let { vento, humidade } = props;

  return (
    <div className="dados-gerais">
      <Vento vento={vento} />
      <Humidade humidade={humidade} />
    </div>
  );
}
