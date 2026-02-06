export const formatterCpfOrCnpj = (value) => {
  const onlyNumber = String(value).replace(/\D/g, "");

  // 2. Verifica se é CPF (11 dígitos)
  if (onlyNumber.length === 11) {
    return onlyNumber.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  // 3. Verifica se é CNPJ (14 dígitos)
  if (onlyNumber.length === 14) {
    return onlyNumber.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5",
    );
  }

  // Caso não seja nenhum dos dois, retorna o valor original ou uma mensagem
  return onlyNumber;
};
