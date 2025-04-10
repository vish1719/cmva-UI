import React from 'react';
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';

function Banner() {
    return (
        <>
            <div className="banner">
                <img
                    src='../../assets/images/about.jpg'
                    alt="About ConnectMyVA virtual assistant services"
                    title="Learn More About ConnectMyVA"
                    className="bannerImage"
                />
            </div>
        </>
    )
}

export default Banner;
