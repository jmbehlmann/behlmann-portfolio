import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Links } from "./components/Links.jsx";
import { Projects } from "./components/Projects.jsx";
import { About } from "./components/About.jsx";
import { Experience } from "./components/Experience.jsx";

export function Content() {
  return (
    <div>
      <Header />
      <Links />
      <Projects />
      <About />
      <Experience />
      <Footer />
    </div>
  )
}
