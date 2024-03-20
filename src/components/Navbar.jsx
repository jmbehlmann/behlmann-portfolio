export function Navbar({ currentSection }) {
  const developmentURL = "http://localhost:5173";
  const productionURL = "https://adorable-flan-fc8e81.netlify.app";

  const baseURL = process.env.NODE_ENV === "development" ? developmentURL : productionURL;

  return (
    <div className="navLinks mb-5">
      <h5 className={currentSection === "Projects" ? "highlight" : ""}>
        <a className="navlink" href={`${baseURL}/#projectsSection`}>Projects</a>
      </h5>
      <h5 className={currentSection === "About" ? "highlight" : ""}>
        <a className="navlink" href={`${baseURL}/#aboutSection`}>About</a>
      </h5>
      <h5 className={currentSection === "Experience" ? "highlight" : ""}>
        <a className="navlink" href={`${baseURL}/#experienceSection`}>Experience</a>
      </h5>
      <h5 className={currentSection === "Contact" ? "highlight" : ""}>
        <a className="navlink" href={`${baseURL}/#contactSection`}>Contact</a>
      </h5>
    </div>
  );
}
