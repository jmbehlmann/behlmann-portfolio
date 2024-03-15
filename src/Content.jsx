import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Links } from "./components/Links.jsx";
import { Projects } from "./components/Projects.jsx";
import { About } from "./components/About.jsx";
import { Experience } from "./components/Experience.jsx";
import { Contact } from "./components/Contact.jsx";
import { Scroll } from "./components/Scroll.jsx";


export function Content() {
  return (
    <main>
      <div className="container-xxl border">
        <div className="row p-2 border">
          <div className="col-lg-4 position-fixed d-flex flex-column h-100 one p-5 border">
            <div className="row p-2 h-25 border d-flex flex-column justify-content-center">
              <Header />
            </div>
            <div className="row p-2 h-50 border d-flex flex-column justify-content-center">
              <Scroll/>
            </div>
            <div className="row h-25 p-2 border d-flex justify-content-center">
              <Links />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-6 two p-5 border">
            <div className="content-container border">
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
