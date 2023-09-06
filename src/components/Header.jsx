import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
      <NavLink to= "/">
        <img src="../images/logo.png" alt="logo" width="500px"/>
      </NavLink>
      <Navbar/>
    </header>
  )
}

export default Header