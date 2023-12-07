import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RealEstateBanner() {
    
    return (
        <>

            
            <div className="banner_area">
            <div className="banner_inner banner_inner_realestate d-flex align-items-center">
            	<div className=" bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				{/* <div className="container">
					<div className="banner_content text-start">
						<h2>Education &amp; Training</h2>
						<div className="page_link">
							<Link to={"/"}>Home <i className="icofont-rounded-right"></i></Link> 
							<Link to={"/contact2"}>Contact <i className="icofont-rounded-right"></i></Link> 
							<Link to={"/how"}>Pricing <i className="icofont-rounded-right"></i></Link>
						</div>
					</div>
				</div> */}
            </div>
        </div>
            

        </>
    )
}

export default RealEstateBanner
