import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SalesBanner() {
    return (
        <>
            <div className="banner">
                <img
                    src='../../assets/images/Sales.jpg'
                    alt="Virtual assistant supporting sales teams"
                    title="Sales Virtual Assistant Services by ConnectMyVA"
                    className="bannerImage"
                />			
            </div>
        </>
    );
}

export default SalesBanner;
