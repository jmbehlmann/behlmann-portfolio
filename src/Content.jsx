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
  const [currentSection, setCurrentSection] = useState("About");

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 48;
    // const aboutSection = document.getElementById("aboutSection").offsetTop;
    const projectsSection = document.getElementById("projectsSection").offsetTop;
    // const experienceSection = document.getElementById("experienceSection").offsetTop;
    const contactSection = document.getElementById("contactSection").offsetTop;

    if (scrollPosition < projectsSection) {
      setCurrentSection("About");
    // } else if (scrollPosition < experienceSection) {
    //   setCurrentSection("Projects");
    } else if (scrollPosition < contactSection) {
      setCurrentSection("Projects");
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

  return (
    <main>
      <div className="wave-background"></div>
      <div className="container-xxl custom-container">
        <div className="row p-2 ">
          <div className="col-lg-5 h-100 one p-5 ">
            <div className="row p-2 h-25  d-flex flex-column justify-content-center">
              <Header />
            </div>
            <div className="row p-2  h-50  d-flex flex-column justify-content-center">
              <Navbar currentSection={currentSection}/>
            </div>
            <div className="row h-25 p-2  d-flex justify-content-center">
              <Links />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-6 two p-5 ">
            <div className="mt-5">
              <div className="row " id="aboutSection">
                <About />
              </div>
              <div className="row  mt-5" id="projectsSection">
                <Projects />
              </div>
              {/* <div className="row  mt-5" id="experienceSection">
                <Experience />
              </div> */}
              <div className="row  mt-5" id="contactSection">
                <Contact />
              </div>
              <div className="row  mt-5">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
