import date from "../../../helpers/date";

export default function DataHoje(props) {
  let { data } = props;

  return (
    <div className="data-hoje">
      <div>{date.getDataExtenso(new Date(data * 1000))}</div>
    </div>
  );
}
