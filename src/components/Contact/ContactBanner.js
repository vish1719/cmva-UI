import React from 'react';
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';
import { useEffect } from 'react';
function ContactBanner() {
    useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
    return (
        <>

        <div className="banner">
            <img
                src='../../assets/images/Contact.jpg'
                alt="Contact ConnectMyVA Virtual Assistant Support"
                title="Get in Touch with ConnectMyVA - Contact Page"
                className="bannerImage"
            />
        </div>
            

        </>
    )
}

export default ContactBanner
