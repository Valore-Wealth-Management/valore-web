import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      {/* TODO: replace src with valore_wide.png once asset is added */}
      <NavLink to="/">Valore</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/questionnaire">Questionnaire</NavLink>
    </nav>
  )
}
