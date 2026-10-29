export default function Header({ temaEscuro, onAlternarTema }) {
  return (
    <header className="header">
      <a className="logo" href="#topo">
        {'<dev/>'}
      </a>

      <nav className="nav">
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contato">Contato</a>
      </nav>

      <button
        className="botao-tema"
        onClick={onAlternarTema}
        aria-label={temaEscuro ? 'Ativar tema claro' : 'Ativar tema escuro'}
      >
        {temaEscuro ? '☀️' : '🌙'}
      </button>
    </header>
  )
}