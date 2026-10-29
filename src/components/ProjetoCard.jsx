export default function ProjetoCard({ projeto }) {
  return (
    <article className="card">
      <div className="card-topo">
        <h3 className="card-titulo">{projeto.titulo}</h3>
        {projeto.destaque && <span className="selo">Destaque</span>}
      </div>

      <p className="card-descricao">{projeto.descricao}</p>

      <div className="card-tecs">
        {projeto.tecnologias.map((tec) => (
          <span className="tec" key={tec}>
            {tec}
          </span>
        ))}
      </div>

      <a
        className="card-link"
        href={projeto.link}
        target="_blank"
        rel="noreferrer"
      >
        Ver projeto
      </a>
    </article>
  )
}