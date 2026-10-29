import { perfil } from '../data/dados'

export default function Contato() {
  const canais = [
    { rotulo: 'E-mail', valor: perfil.email, link: 'mailto:' + perfil.email },
    { rotulo: 'GitHub', valor: '@anabeatriz', link: perfil.github },
    { rotulo: 'LinkedIn', valor: 'in/anabeatriz', link: perfil.linkedin },
    { rotulo: 'Instagram', valor: '@anabeatriz', link: perfil.instagram },
  ]

  return (
    <section id="contato" className="section">
      <h2 className="section-titulo">
        Vamos <span>conversar</span>
      </h2>
      <p className="section-subtitulo">
        Aberta a estágios, projetos escolares e trabalhos voluntários na área.
      </p>

      <div className="grid-contato">
        {canais.map((canal) => (
          <a
            className="link-contato"
            key={canal.rotulo}
            href={canal.link}
            target="_blank"
            rel="noreferrer"
          >
            <strong>{canal.rotulo}</strong>
            <span>{canal.valor}</span>
          </a>
        ))}
      </div>
    </section>
  )
}