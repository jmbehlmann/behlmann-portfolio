import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Links } from "./components/Links.jsx";
import { Projects } from "./components/Projects.jsx";

export function Content() {
  return (
    <div>
      <Header />
      <Links />
      <Projects />
      <Footer />
    </div>
  )
}
