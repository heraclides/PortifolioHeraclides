import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Habilidades from './components/Habilidades'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  const [temaEscuro, setTemaEscuro] = useState(true)

  useEffect(() => {
    document.documentElement.dataset.theme = temaEscuro ? 'dark' : 'light'
  }, [temaEscuro])

  function alternarTema() {
    setTemaEscuro(!temaEscuro)
  }

  return (
    <div className="app">
      <Header temaEscuro={temaEscuro} onAlternarTema={alternarTema} />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Habilidades />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}