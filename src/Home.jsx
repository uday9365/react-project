import HeroSection from "./components/HeroSection"

const Home = () => {

  const data = {
    name: "Spider Man",
    image: "../images/miles-hero.png",
    para: "Miles morales life as Spider-Man is characterized by the transformation of a socially awkward high school student into a beloved superhero. After gaining superhuman powers from a radioactive spider bite, Miles learns the responsibility that comes with his abilities, driven by the tragic loss of his Father Jefferson Davis. Balancing his personal life, education, and crime-fighting duties in New York City becomes a constant challenge for our friendly neighbourhood Spider-Man."
  };

  return (
    <div>
      <HeroSection {...data}/>
    </div>
  )
}

export default Home