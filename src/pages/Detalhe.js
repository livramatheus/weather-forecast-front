import ItemId from "../components/ItemId";
import ItemTabela from "../components/ItemTabela";
import Skeleton from "react-loading-skeleton";

export default function Detalhe(props) {
  let { dados } = props;

  return (
    <>
      <div className="temperatura-intra-dia">
        <div className="data-titulo">
          <span>Hoje</span>
        </div>
        <div className="data-tabela">
          {dados
            ? dados.hourly.map((elemento, id) => {
                let hoje = new Date();
                let data = new Date(elemento.dt * 1000);

                if (
                  hoje.getDate() === data.getDate() &&
                  hoje.getMonth() === data.getMonth()
                ) {
                  return (
                    <ItemId
                      key={id}
                      temperatura={elemento.temp}
                      icone={elemento.weather[0].icon}
                      descricao={elemento.weather[0].description}
                      horario={data}
                      humidade={elemento.humidity}
                      vento={elemento.wind_speed}
                    />
                  );
                }
              })
            : Array(10)
                .fill(null)
                .map((el, id) => {
                  return <Skeleton key={id} height="90%" width="4rem" />;
                })}
        </div>
      </div>
      <div className="proximos-dias">
        <div className="proximos-dias-titulo">Próximos dias</div>
        <div className="proximos-dias-tabela">
          {dados
            ? dados.daily.map((elemento, id) => {
                return (
                  <ItemTabela
                    key={id}
                    data={new Date(elemento.dt * 1000)}
                    icone={elemento.weather[0].icon}
                    descricao={elemento.weather[0].description}
                    temperatura={elemento.temp.day}
                  />
                );
              })
            : Array(9)
                .fill(null)
                .map((el, id) => {
                  return (
                    <Skeleton
                      key={id}
                      heigth="2rem"
                      style={{ marginBottom: "1.3rem" }}
                    />
                  );
                })}
        </div>
      </div>
    </>
  );
}
