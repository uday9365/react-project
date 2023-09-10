import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <MainHeader>
      <NavLink to= "/">
        <img src="../images/logo.png" alt="logo" className='logo'/>
      </NavLink>
      <Navbar/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
 padding: 0 4.5rem;
 background-color: ${({theme}) => theme.color.bg};
 height: 10rem;
 display: flex;
 justify-content: space-between;
 align-items: center;

 .logo{
  width: 30rem;
  height: 20rem;
  margin-top: 20px;
  
 }
`;

export default Header