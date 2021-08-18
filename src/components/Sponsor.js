import React from 'react'
import SponsorPic from '../sponsorPic.jpg'

export const Sponsor = () => {
    return (
        <div className="sponsor-wrap">
           <h2>Sponsored by</h2> 
           <div className="sponsor_list">
            <ul>
                <li>
                    <img src={SponsorPic} alt="sponsor"></img>
                </li>
                <li>
                    <img src={SponsorPic} alt="sponsor"></img>
                </li>
                <li>
                    <img src={SponsorPic} alt="sponsor"></img>
                </li>
                <li>
                    <img src={SponsorPic} alt="sponsor"></img>
                </li>
                <li>
                    <img src={SponsorPic} alt="sponsor"></img>
                </li>
                <li>
                    <img src={SponsorPic} alt="sponsor"></img>
                </li>
            </ul>
           </div>
        </div>
    )
}

export default Sponsor 
