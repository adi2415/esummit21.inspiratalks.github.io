import React,{Component} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Sponsor from './components/Sponsor';
import mic from './mic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class App extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    }) ;
    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop({
      duration: 250,
      delay: 0,
      smooth: false
    });
  }
  scrollToBottom() {
    scroll.scrollToBottom({
      duration: 300, 
      delay: 0,
      smooth: false
    });
  }

  scrollToTimeline() {
    scroller.scrollTo('time', {
      duration: 300,
      delay: 10,
      smooth: false,
      offset: -70 // Scrolls to element + 50 pixels down the page
    })
  }
  scrollToGallery(){
    scroller.scrollTo('gallery', {
      duration: 300,
      delay: 10,
      smooth: false,
      offset: -80 // Scrolls to element + 50 pixels down the page
    })
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive(to) {
    console.log(to);
  }
  render(){
    return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
          <div className='container'>
            <a className="navbar-brand" href="/"><img className="logo" src={mic} alt="logo" /><span className="logoFont">Inspira Talks</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} style={{color: "blue"}}/>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" onClick={this.scrollToTop}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={this.scrollToTimeline}>Timeline</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={this.scrollToGallery}>Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={this.scrollToBottom}>Sponsors</a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
      <Header />
      <Element name="time">
      <Timeline />
      </Element>
      <Element name="gallery">
      <Gallery />
      </Element>
      <Sponsor />
    </>
  );}
}

export default App;
