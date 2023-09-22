import { useEffect } from "react";
import HeroSection from "./components/HeroSection"
import { useGlobalContext } from "./context"

const About = () => {

  const {updateAboutPage} = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, [])


  return (
    <div>
      <HeroSection/>
    </div>
  )
}

export default About