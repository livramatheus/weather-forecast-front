const diasDaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
];

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];

const getDiaExtenso = (data) => {
  return diasDaSemana[data.getDay()];
};

const getMesExtenso = (data) => {
  return meses[data.getMonth()];
};

const getDataExtenso = (data) => {
  return `${data.getDate()} de ${getMesExtenso(data)} de ${data.getFullYear()}`;
};

export default { getDiaExtenso, getMesExtenso, getDataExtenso };
