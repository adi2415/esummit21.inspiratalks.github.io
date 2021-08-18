import React from 'react'
import mic from '../mic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
          <div className='container'>
            <a className="navbar-brand" href="/"><img className="logo" src={mic} alt="logo" /><span className="logoFont">Inspira Talks</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} style={{color: "blue"}}/>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Timeline</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Sponsors</a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    )
}

export default Navbar
