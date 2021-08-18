import React from 'react'
import GalleryPic from '../galleryPic.jpeg';

const Gallery = () => {
    return (
        <div className="galleryContainer">
            <div className="heading">
                <h2>Gallery</h2>
            </div>

            <duv className="imageRow row">
                <div className="columns col-12 col-sm-12 col-md-6 col-lg-4">
                    <img src={GalleryPic} alt="dummy pic" />
                </div>
                <div className="columns col-12 col-sm-12 col-md-6 col-lg-4">
                    <img src={GalleryPic} alt="dummy pic" />
                </div>
                <div className="columns col-12 col-sm-12 col-md-6 col-lg-4">
                    <img src={GalleryPic} alt="dummy pic" />
                </div>
                <div className="columns col-12 col-sm-12 col-md-6 col-lg-4">
                    <img src={GalleryPic} alt="dummy pic" />
                </div>
                <div className="columns col-12 col-sm-12 col-md-6 col-lg-4">
                    <img src={GalleryPic} alt="dummy pic" />
                </div>
                <div className="columns col-12 col-sm-12 col-md-6 col-lg-4">
                    <img src={GalleryPic} alt="dummy pic" />
                </div>
            </duv>
        </div>
    )
}

export default Gallery
