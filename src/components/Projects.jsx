export function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        <div className="card border-secondary p-2">
          <a
            className="link"
            href="https://jmbehlmann.github.io/bike-rack-chicago-frontend/"
            target="_blank"
          >
            Bike Rack Chicago
          </a>
          <div>
            <p>Bike Rack Chicago is a web app that helps users find bike racks in Chicago by address, place, or current location. It uses Google Maps and React for an interactive map, Google Maps APIs for address autocompletion, and data from the City of Chicago. The Rails and PostgreSQL backend is deployed on Heroku while the frontend is on Github Pages.</p>
          </div>
          <div className="row row-cols-auto g-2">
            <div className="col">
              <h5><span className="badge badge-pill">React</span></h5>
            </div>
            <div className="col">
              <h5><span className="badge badge-pill">Rails</span></h5>
            </div>
            <div className="col">
              <h5><span className="badge badge-pill">Google Apis</span></h5>
            </div>
            <div className="col">
              <h5><span className="badge badge-pill">PostgreSQL</span></h5>
            </div>
            <div className="col">
              <h5><span className="badge badge-pill">Heroku</span></h5>
            </div>
          </div>
        </div>
        <div className="card border-secondary p-2">
          <a className="link" href="#" target="_blank">Portfolio Site</a>
          <div>
            <p>This is the site you're on right now! It's built using React for dynamic user interaction and Bootstrap for clean, responsive design. It's deployed on Netlify so that it's easily accessible. Integration with emailjs allows visitors to contact me directly. It offers a simple yet effective platform shows my design preference for simple and obvious websites.</p>
          </div>
          <div className="row row-cols-auto g-2">
            <div className="col">
              <h5><span className="badge badge-pill">Bootstrap</span></h5>
            </div>
            <div className="col">
              <h5><span className="badge badge-pill">React</span></h5>
            </div>
            <div className="col">
              <h5><span className="badge badge-pill">Netlify</span></h5>
            </div>
            <div className="col">
              <h5><span className="badge badge-pill">EmailJS</span></h5>
            </div>
          </div>
        </div>
        <div className="card border-secondary p-2">
          <a className="link" href="https://github.com/jmbehlmann/zizz-frontend-2" target="_blank">Zyzz</a>
          <div>
            <p>Portfolio site summary Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ante at quam tristique venenatis. Nunc laoreet quam sit amet odio convallis, id varius nisl condimentum. Donec aliquet nunc purus, vel congue quam</p>
          </div>
          <div className="row row-cols-auto g-2">
            <div className="col">
              <h5><span className="badge badge-pill">Bootstrap</span></h5>
            </div>
            <div className="col">
              <h5><span className="badge badge-pill">React</span></h5>
            </div>
            <div className="col">
              <h5><span className="badge badge-pill">Rails</span></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
