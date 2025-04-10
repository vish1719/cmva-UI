import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EducationBanner() {
    return (
        <>
            <div className="banner">
                <img
                    src='../../assets/images/Education.jpg'
                    alt="Virtual assistant helping with educational tasks and research"
                    title="Education Virtual Assistant Services by ConnectMyVA"
                    className="bannerImage"
                />
            </div>
        </>
    );
}

export default EducationBanner;
