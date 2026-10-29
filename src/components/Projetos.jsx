import { projetos } from '../data/dados'
import ProjetoCard from './ProjetoCard'

export default function Projetos() {
  return (
    <section id="projetos" className="section">
      <h2 className="section-titulo">
        Meus <span>projetos</span>
      </h2>
      <p className="section-subtitulo">
        Trabalhos que desenvolvi na escola, em cursos e nos meus estudos.
      </p>

      <div className="grid-projetos">
        {projetos.map((projeto) => (
          <ProjetoCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </section>
  )
}