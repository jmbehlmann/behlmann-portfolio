export function Navbar( {currentSection} ) {
  return (
    <div>
      <h5 className={currentSection === "Projects" ? "underline" : ""} >
        <a className="navlink" href="http://localhost:5173/#projectsSection">Projects</a>
      </h5>
      <h5 className={currentSection === "About" ? "underline" : ""} >
        <a className="navlink" href="http://localhost:5173/#aboutSection">About</a>
      </h5>
      <h5 className={currentSection === "Experience" ? "underline" : ""} >
        <a className="navlink" href="http://localhost:5173/#experienceSection">Experience</a>
      </h5>
      <h5 className={currentSection === "Contact" ? "underline" : ""} >
        <a className="navlink" href="http://localhost:5173/#contactSection">Contact</a>
      </h5>
    </div>
  )
}
