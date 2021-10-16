import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

export default function TopRow(props) {
  const location = useLocation();
  const [nomePagina, setNomePagina] = useState("");

  let { dados } = props;

  useEffect(() => {
    setNomePagina(
      location.pathname === "/" && dados
        ? `${dados.cidade}, ${dados.bairro}`
        : "Voltar"
    );
  }, [location.pathname, dados]);

  return (
    <div id="top-row" className="slim-shadow-text">
      {dados ? (
        <Link to="/" id="cidade">
          {location.pathname !== "/" ? (
            <ArrowBackIosNewRoundedIcon fontSize="large" />
          ) : null}
          {nomePagina}
        </Link>
      ) : (
        <Skeleton height="100%" width={220} />
      )}
      <span id="icones"></span>
    </div>
  );
}
