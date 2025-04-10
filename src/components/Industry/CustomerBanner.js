import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomerBanner() {
    return (
        <>
            <div className="banner">
                <img
                    src='../../assets/images/customer.jpg'
                    alt="Happy customers using ConnectMyVA virtual assistant services"
                    title="Customer Satisfaction with ConnectMyVA Virtual Assistant Services"
                    className="bannerImage"
                />
            </div>
        </>
    );
}

export default CustomerBanner;
