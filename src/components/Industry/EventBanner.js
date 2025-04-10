import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EventBanner() {
    return (
        <>
            <div className="banner">
                <img
                    src='../../assets/images/event.jpg'
                    alt="Virtual assistant managing event planning tasks"
                    title="Event Planning Virtual Assistant Services by ConnectMyVA"
                    className="bannerImage"
                />			
            </div>
        </>
    );
}

export default EventBanner;
