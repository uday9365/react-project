import HeroSection from "./components/HeroSection"

const About = () => {

  const data = {
    name: "Miles Morales",
    image: "../images/about.png",
    para: "Friendly neighbourhood Spider-man Miles Morales, New York only spider-man. The biracial teenage son of an African-American father and a Puerto Rican mother, Miles Morales is the second Spider-Man to appear in Ultimate Marvel, an imprint with a separate continuity from the mainstream Marvel Universe called the Ultimate Universe."
  };

  return (
    <div>
      <HeroSection {...data}/>
    </div>
  )
}

export default About