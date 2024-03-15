import { useState, useEffect } from "react";

export function Scroll() {
  const [currentSection, setCurrentSection] = useState("Projects");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const projectsSection = document.getElementById("projectsSection").offsetTop;
    const aboutSection = document.getElementById("aboutSection").offsetTop;
    const experienceSection = document.getElementById("experienceSection").offsetTop;
    const contactSection = document.getElementById("contactSection").offsetTop;

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

  return (
    <div>
      <h2>Scroll Thing</h2>
      <h5 className={currentSection === "Projects" ? "underline" : ""} id="projectsSection">Projects</h5>
      <h5 className={currentSection === "About" ? "underline" : ""} id="aboutSection">About</h5>
      <h5 className={currentSection === "Experience" ? "underline" : ""} id="experienceSection">Experience</h5>
      <h5 className={currentSection === "Contact" ? "underline" : ""} id="contactSection">Contact</h5>
    </div>
  );
}
