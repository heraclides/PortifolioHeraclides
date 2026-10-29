export default function Footer() {
  return (
    <footer className="footer">
        <p>Todos os direitos reservados</p>
      <p>Construído com React e Vite · {new Date().getFullYear()}</p>
    </footer>
  )
}