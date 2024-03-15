import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Links } from "./components/Links.jsx";
import { Projects } from "./components/Projects.jsx";
import { About } from "./components/About.jsx";
import { Experience } from "./components/Experience.jsx";
import { Contact } from "./components/Contact.jsx";


export function Content() {
  return (
    <main>
      <div className="container-xxl">
        <div className="row px-2">
          <div className="col-lg-6 col-2 fixed-top one">
            <Header />
            <Links />
            </div>
          <div className="col-lg-6 offset-lg-6 two">
            <div className="content-container">
              <Projects />
              <About />
              <Experience />
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
