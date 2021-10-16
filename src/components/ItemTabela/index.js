import date from "../../helpers/date";

export default function ItemTabela(props) {
  let { data, icone, descricao, temperatura } = props;

  return (
    <div className="item-tabela">
      <div className="data-reduzida">{date.getDiaExtenso(data)}</div>
      <div className="icone">
        <img src={`../imagens/${icone}.svg`} alt={descricao} />
      </div>
      <div className="temperatura">{parseInt(temperatura)}°</div>
    </div>
  );
}
