import logo from "./assets/logo.png";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center", // alinha verticalmente img e h1
        justifyContent: "flex-end", // alinha tudo à direita
        gap: "20px", // espaço entre img e h1
        position: "relative",
        padding: "20px",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          maxWidth: "50px",
        }}
      />
      <h1 style={{ margin: 0 }}>Conversor de Moedas</h1>
    </header>
  );
}

export default Header;
