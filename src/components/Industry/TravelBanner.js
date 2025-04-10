import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TravelBanner() {
    return (
        <>
            <div className="banner">
                <img
                    src='../../assets/images/Travel.jpg'
                    alt="Virtual travel assistant services"
                    title="Travel Support Services by ConnectMyVA"
                    className="bannerImage"
                />			
            </div>
        </>
    );
}

export default TravelBanner;
