import { useState, useEffect } from "react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Links } from "./components/Links.jsx";
import { Projects } from "./components/Projects.jsx";
import { About } from "./components/About.jsx";
import { Experience } from "./components/Experience.jsx";
import { Contact } from "./components/Contact.jsx";
import { Navbar } from "./components/Navbar.jsx";


export function Content() {
  const [currentSection, setCurrentSection] = useState("Projects");

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 48;
    // const projectsSection = document.getElementById("projectsSection").offsetTop;
    const aboutSection = document.getElementById("aboutSection").offsetTop;
    const experienceSection = document.getElementById("experienceSection").offsetTop;
    const contactSection = document.getElementById("contactSection").offsetTop;

    // console.log(scrollPosition)

    if (scrollPosition < aboutSection) {
      setCurrentSection("Projects");
    } else if (scrollPosition < experienceSection) {
      setCurrentSection("About");
    } else if (scrollPosition < contactSection) {
      setCurrentSection("Experience");
    } else {
      setCurrentSection("Contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(currentSection)

  return (
    <main>
      <div className="container-xxl border">
        <div className="row p-2 border">
          <div className="col-lg-4 position-fixed d-flex flex-column h-100 one p-5 border">
            <div className="row p-2 h-25 border d-flex flex-column justify-content-center">
              <Header />
            </div>
            <div className="row p-2 h-50 border d-flex flex-column justify-content-center">
              <Navbar currentSection={currentSection}/>
            </div>
            <div className="row h-25 p-2 border d-flex justify-content-center">
              <Links />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-6 two p-5 border">
            <div>
              <div className="row border" id="projectsSection">
                <Projects />
              </div>
              <div className="row border mt-5" id="aboutSection">
                <About />
              </div>
              <div className="row border mt-5" id="experienceSection">
                <Experience />
              </div>
              <div className="row border mt-5" id="contactSection">
                <Contact />
              </div>
              <div className="row border mt-5">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
