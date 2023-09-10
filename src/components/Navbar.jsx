import { NavLink } from "react-router-dom"
import {styled} from "styled-components"

const Navbar = () => {
  return (
    <NavStyle>
      <div className="menu_icon">
        <ul className="navbar_list">
          <li>
            <NavLink className="navbar-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="about">About</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="service">Services</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </NavStyle>
  )
}

const NavStyle = styled.nav`
 .navbar_list{
  display: flex;
  gap: 4.8rem;
  list-style: none;
   
  li{
    .navbar-link{      
      &:link,
      &:visited {
        display: inline-block;
        font-size: 1.8rem;
        text-decoration: none;
        text-transform: uppercase;
        color: ${({theme}) => theme.color.black};
        transition: color 0.2s linear;
      }

      &:hover,
      &:active {
        color: ${({theme}) => theme.color.helper}
      }
    }
  }
 }
`

export default Navbar