import { habilidades } from '../data/dados'

export default function Habilidades() {
  return (
    <section id="habilidades" className="section">
      <h2 className="section-titulo">
        Minhas <span>habilidades</span>
      </h2>
      <p className="section-subtitulo">
        Nível de confiança em cada tecnologia, revisado a cada semestre.
      </p>

      <div className="lista-habilidades">
        {habilidades.map((item) => (
          <div key={item.nome}>
            <div className="habilidade-topo">
              <span>{item.nome}</span>
              <span>{item.nivel}%</span>
            </div>
            <div className="barra">
              <div
                className="barra-preenchida"
                style={{ width: item.nivel + '%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}