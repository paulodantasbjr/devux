const valid = (name, email, password, cf_password) => {
  if (!name || !email || !password) return "Preencha todos os campos.";

  if (!validateEmail(email)) return "Email invalido.";

  if (password.length < 6) return "A senha deve ter mais de 6 caracteres.";

  if (password !== cf_password) return "As senhas não conferem.";
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid;
