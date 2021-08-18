import React from 'react'
import Aman from '../aman.jpeg'

const Timeline = () => {
    return (
        <>
                <h1 className="timeline_heading">Timeline</h1>
    <div className="timeline">
        <div className="timeline__component">
            <div className="timeline__date timeline__date--right">6pm, 11th September</div>
        </div>
        <div className="timeline__middle">
            <div className="timeline__point"></div>
        </div>
        <div className="timeline__component timeline__component--bg">
            <div className="timeline_image">
                <img src={Aman} alt="Aman Dhattarwal"></img>
            </div>
            <h2 className="timeline__title">Aman Dhattarwal</h2>
            <p className="timeline__paragraph1">
            </p>
        </div>
        <div className="timeline__component timeline__component--bg">
            <div className="timeline_image">
                <img src={Aman} alt="Aman Dhattarwal"></img>
            </div>
            <h2 className="timeline__title">Aman Dhattarwal</h2>
            <p className="timeline__paragraph2">
            </p>
        </div>
        <div className="timeline__middle">
            <div className="timeline__point"></div>
        </div>
        <div className="timeline__component">
            <div className="timeline__date">6pm, 11th September</div>
        </div>
        <div className="timeline__component">
            <div className="timeline__date timeline__date--right">6pm, 11 September</div>
        </div>
        <div className="timeline__middle">
            <div className="timeline__point"></div>
        </div>
        <div className="timeline__component timeline__component--bg">
            <div className="timeline_image">
                <img src={Aman} alt="Aman Dhattarwal"></img>
            </div>
            <h2 className="timeline__title">Aman Dhattarwal</h2>
            <p className="timeline__paragraph3">
            </p>
        </div>
        <div className="timeline__component timeline__component--bottom timeline__component--bg">
            <div className="timeline_image">
                <img src={Aman} alt="Aman Dhattarwal"></img>
            </div>
            <h2 className="timeline__title">Aman Dhattarwal</h2>
            <p className="timeline__paragraph4">
            </p>
        </div>
        <div className="timeline__middle">
            <div className="timeline__point"></div>
            <div className="timeline__point timeline__point--bottom"></div>
        </div>
        <div className="timeline__component timeline__component--bottom">
            <div className="timeline__date">6pm, 11th September</div>
        </div>
    </div>
    </>
    )
}

export default Timeline
