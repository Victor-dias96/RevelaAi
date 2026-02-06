export const dateConverterStringToNumber = (dateString) => {
  const date = new Date(dateString);
  const formatedDate = date.toLocaleDateString("pt-BR");

  return formatedDate;
};
