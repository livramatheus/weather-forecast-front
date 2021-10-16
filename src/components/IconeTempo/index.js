export default function IconeTempo(props) {
  let { icone, descricao } = props;

  return (
    <div className="icone-tempo">
      <img src={`../imagens/${icone}.svg`} alt={descricao} />
    </div>
  );
}
