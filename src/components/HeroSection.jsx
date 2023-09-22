import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

// eslint-disable-next-line react/prop-types
const HeroSection = () => {
  const {greet, name, image, para} = useGlobalContext();
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">{greet}</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">{para}</p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">Hire me</NavLink>
          </Button>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src= {image} alt="hero-img" className="hero-img"/>
          </picture>
        </div>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  padding: 9rem ;

  .section-hero-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn{
    max-width: 16rem;
  }

  .hero-top-data{
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({theme}) => theme.color.helper}
  }

  .hero-heading{
    text-transform: uppercase;
    font-size: 6.4rem
  }

  .hero-para{
    margin-top: 2.4rem;
    margin-bottom: 3.6rem;
    max-width: 60rem
  }

  .section-hero-image{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture{
    text-align: center;
  }

  .hero-img{
    max-width: 80%;
  }
`;

export default HeroSection