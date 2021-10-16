import Skeleton from "react-loading-skeleton";
import BeachAccessRoundedIcon from "@mui/icons-material/BeachAccessRounded";
import misc from "../../../../helpers/misc";

export default function Vento(props) {
  let { vento } = props;

  return (
    <div className="vento">
      <span>
        <BeachAccessRoundedIcon />
        <span>Vento</span>
      </span>
      <span> | </span>
      <span>{vento ? misc.formatAsKmh(parseInt(vento)) : <Skeleton />}</span>
    </div>
  );
}
