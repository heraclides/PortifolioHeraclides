import { perfil } from '../data/dados'

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <p className="hero-saudacao">{perfil.saudacao}</p>
      <h1 className="hero-nome">{perfil.nome}</h1>
      <h2 className="hero-funcao">{perfil.funcao}</h2>
      <p className="hero-resumo">{perfil.resumo}</p>

      <div className="hero-acoes">
        <a className="botao botao-primario" href="#projetos">
          Ver projetos
        </a>
        <a
          className="botao botao-secundario"
          href={perfil.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}