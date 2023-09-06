import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div className="menu_icon">
        <ul className="navbar_list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="service">Services</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar