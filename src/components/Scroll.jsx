export function Scroll( {currentSection} ) {
  return (
    <div>
      <h2>Scroll Thing</h2>
      <h5 className={currentSection === "Projects" ? "underline" : ""} >Projects</h5>
      <h5 className={currentSection === "About" ? "underline" : ""} >About</h5>
      <h5 className={currentSection === "Experience" ? "underline" : ""} >Experience</h5>
      <h5 className={currentSection === "Contact" ? "underline" : ""} >Contact</h5>
    </div>
  )
}
