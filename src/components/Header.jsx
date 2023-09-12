import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <MainHeader>
      <NavLink to= "/">
        <img src="../images/logo2.png" alt="logo" className='logo'/>
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
  width: 8rem;
  height: 8rem;
  margin-left: 30rem;
  
 }
`;

export default Header