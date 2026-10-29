import { perfil } from '../data/dados'

export default function Sobre() {
  return (
    <section id="sobre" className="section">
      <h2 className="section-titulo">
        Sobre <span>mim</span>
      </h2>
      <p className="section-subtitulo">
        Um resumo de quem eu sou, de onde venho e do que estou estudando.
      </p>

      <p className="sobre-texto">{perfil.sobre}</p>

      <ul className="lista-fatos">
        {perfil.fatos.map((fato) => (
          <li className="fato" key={fato.rotulo}>
            <strong>{fato.rotulo}:</strong>
            <span>{fato.valor}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}