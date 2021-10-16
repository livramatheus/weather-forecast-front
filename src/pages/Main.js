import DadosDeHoje from "../components/DadosDeHoje";
import IconeTempo from "../components/IconeTempo";
import Skeleton from "react-loading-skeleton";

export default function Main(props) {
  let { dados } = props;

  return dados ? (
    <>
      <IconeTempo
        icone={dados.current.weather[0].icon}
        descricao={dados.current.weather[0].description}
      />

      <DadosDeHoje
        data={dados.current.dt}
        descricao={dados.current.weather[0].description}
        temperatura={dados.current.temp}
        vento={dados.current.wind_speed}
        humidade={dados.current.humidity}
      />
    </>
  ) : (
    <>
      <Skeleton height="12rem" />
      <Skeleton height="18rem" />
    </>
  );
}
