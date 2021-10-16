import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import misc from "../../helpers/misc";
import Botao from "./Botao";

export default function ItemId(props) {
  let { temperatura, icone, descricao, horario, humidade, vento } = props;

  const [active, setActive] = useState(false);

  let applyClass = active ? "active-item" : "";

  const closeTooltip = () => {
    setActive(false);
  };

  const openTooltip = () => {
    setActive(true);
  };

  return (
    <ClickAwayListener onClickAway={closeTooltip}>
      <Tooltip
        PopperProps={{
          disablePortal: true
        }}
        onClose={closeTooltip}
        open={active}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={`💧 ${humidade}% ${" "} 🍃 ${misc.formatAsKmh(vento)}`}
      >
        <Botao
          applyClass={applyClass}
          onClick={openTooltip}
          temperatura={temperatura}
          icone={icone}
          descricao={descricao}
          horario={horario}
        />
      </Tooltip>
    </ClickAwayListener>
  );
}
