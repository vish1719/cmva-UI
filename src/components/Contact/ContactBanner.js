import React from 'react';
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';

function ContactBanner() {
    
    return (
        <>

            
            <div className="banner_area">
            <div className="banner_inner banner_inner_contact d-flex align-items-center">
            	<div className=" bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				<div className="container">
					<div className="banner_content text-start">
						<h2>Contact Us</h2>
						<div className="page_link">
							<Link to={"/"}>Home <i className="icofont-rounded-right"></i></Link> 
							<Link to={"/contact2"}>Contact Us <i className="icofont-rounded-right"></i></Link> 
							<Link to={"/pricing2"}>Monthly Subscription Plans <i className="icofont-rounded-right"></i></Link>
						</div>
					</div>
				</div>
            </div>
        </div>
            

        </>
    )
}

export default ContactBanner
