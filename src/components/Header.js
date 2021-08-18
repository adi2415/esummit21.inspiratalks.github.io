import React from 'react'
import Background from '../background.jpg'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="container-fluid">
                <div className="row rowClass">
                    <div className="col-12 col-md-12 col-lg-6 firstCol">
                        <h2>Inspira <span style={{color: "blue"}}>Talks</span></h2>
                        <p>Learn about the first hand experiences of experts</p>
                        <span>Not the boring classroom lectures, interact with your dream speaker</span>
                        <span>Listen to Global Speakers</span>
                        <span>Learn from the success journeys of Global Entreprenuers</span>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 secondCol">
                        <img className="imageColumn" src={Background} alt="Designed by FreePik" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

