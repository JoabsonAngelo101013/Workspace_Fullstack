import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Inicial</Link>
        <br />
        <Link to="/A-Faculdade">A Faculdade</Link>
        <br />
        <Link to="/Noticias">Noticias</Link>
        <br />
        <Link to="/Dpo-Lgpd">Dpo-Lgpd</Link>
    </nav>
  )
}

export default Navbar