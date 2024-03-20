export function Navbar({ currentSection }) {
  const developmentURL = "http://localhost:5173";
  const productionURL = "https://adorable-flan-fc8e81.netlify.app";

  const baseURL = process.env.NODE_ENV === "development" ? developmentURL : productionURL;

  return (
    <div className="navLinks mb-5">
      <h5>
      <h5>
        <a className={`navlink ${currentSection === "About" ? "highlight" : ""}`} href={`${baseURL}/#aboutSection`}>About</a>
      </h5>
        <a className={`navlink ${currentSection === "Projects" ? "highlight" : ""}`} href={`${baseURL}/#projectsSection`}>Projects</a>
      </h5>
      <h5>
        <a className={`navlink ${currentSection === "Experience" ? "highlight" : ""}`} href={`${baseURL}/#experienceSection`}>Experience</a>
      </h5>
      <h5>
        <a className={`navlink ${currentSection === "Contact" ? "highlight" : ""}`} href={`${baseURL}/#contactSection`}>Contact</a>
      </h5>
    </div>
  );
}
