function Header() {
  let nomesUsuario = ['Maria', 'Silva'];

  let montarNomeCompleto = () => {
    // let nomeCompleto = '';
    // for (let item of nomesUsuario) {
    //   nomeCompleto += item + ' ';
    // }
    // return nomeCompleto.trim();

    // return nomesUsuario
    //   .reduce((acumulador, item) => {
    //     return acumulador + item + ' ';
    //   }, '')
    //   .trim();

    return nomesUsuario.join(' ');
  };
  return (
    <>
      <header>
        <div>Olá, {montarNomeCompleto()}</div>
      </header>
    </>
  );
}
export default Header;
