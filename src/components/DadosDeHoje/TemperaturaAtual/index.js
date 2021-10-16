import Skeleton from "react-loading-skeleton";
import misc from "../../../helpers/misc";

export default function TemperaturaAtual(props) {
  let { temperatura } = props;

  return (
    <div className="temperatura-atual">
      {temperatura ? misc.formatAsTemperatura(temperatura) : <Skeleton />}
    </div>
  );
}
