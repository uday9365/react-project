import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
// import { GlobalStyle } from '../GlobalStyle'

const Header = () => {
  return (
    <header>
      <h1>Heeeeelllllopppopo</h1>
      <NavLink to= "/">
        <img src="../images/logo.png" alt="logo" width="500px"/>
      </NavLink>
      <Navbar/>
    </header>
  )
}

export default Header