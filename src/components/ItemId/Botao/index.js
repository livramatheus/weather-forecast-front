import { forwardRef } from "react";

const Botao = (props, ref) => {
  let { applyClass, temperatura, icone, descricao, horario, onClick } = props;

  return (
    <div ref={ref} className={"item-id " + applyClass} onClick={onClick}>
      <div className="temperatura-id">{parseInt(temperatura)}°</div>
      <div className="icone-id">
        <img src={`./imagens/${icone}.svg`} alt={descricao} />
      </div>
      <div className="horario">
        {`${horario
          .getHours()
          .toString()
          .padStart(2, 0)}:${horario.getMinutes().toString().padStart(2, 0)}`}
      </div>
    </div>
  );
};

export default forwardRef(Botao);
