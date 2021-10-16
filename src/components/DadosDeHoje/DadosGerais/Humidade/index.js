import WaterRoundedIcon from "@mui/icons-material/WaterRounded";
import Skeleton from "react-loading-skeleton";

export default function Humidade(props) {
  let { humidade } = props;

  return (
    <div className="humidade">
      <span>
        <WaterRoundedIcon />
        <span>Humid.</span>
      </span>
      <span> | </span>
      <span>{humidade ? `${humidade}%` : <Skeleton />}</span>
    </div>
  );
}
