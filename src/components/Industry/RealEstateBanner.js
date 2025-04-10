import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RealEstateBanner() {
    return (
        <>
            <div className="banner">
                <img
                    src='../../assets/images/realestate.jpg'
                    alt="Virtual assistant helping real estate professionals"
                    title="Real Estate Virtual Assistant Services by ConnectMyVA"
                    className="bannerImage"
                />			
            </div>
        </>
    );
}

export default RealEstateBanner;
