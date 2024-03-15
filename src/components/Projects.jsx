export function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        <div className="card border-secondary p-2">
          <a className="link" href="https://jmbehlmann.github.io/bike-rack-chicago-frontend/" target="_blank">Bike Rack Chicago</a>
          <ul>
            <li>Bike Rack Chicago is a web app that helps users find bike racks in Chicago by address, place, or current location. It uses Google Maps and React for an interactive map, Google Maps APIs for address autocompletion, and data from the City of Chicago. The Rails and PostgreSQL backend is deployed on Heroku while the frontend is on Github Pages.</li>
          </ul>
        </div>
        <div className="card border-secondary p-2">
          <a className="link" href="#" target="_blank">Portfolio Site</a>
        </div>
        <div className="card border-secondary p-2">
          <a className="link" href="https://www.risingashdesigns.com/" target="_blank">Rising Ash Designs</a>
        </div>
      </div>
    </div>
  )
}
