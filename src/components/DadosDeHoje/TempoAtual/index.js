import Skeleton from "react-loading-skeleton";

export default function TempoAtual(props) {
  let { descricao } = props;

  return (
    <div className="tempo-atual">{descricao ? descricao : <Skeleton />}</div>
  );
}
