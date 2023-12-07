import React from 'react';
// import { Carousel } from 'react-bootstrap';

function BusinessBanner() {
    
    return (
        <>

            
            <div className="banner_area">
            <div className="banner_inner banner_inner_business d-flex align-items-center">
            	<div className=" bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				<div className="container">
					<div className="banner_content text-start">
						<h2>Business Process Support</h2>
						<div className="page_link">
							<a href="/">Home <i className="icofont-rounded-right"></i></a> 
							<a href="/contact">contact <i className="icofont-rounded-right"></i></a> 
							<a href="/how">How it works? <i className="icofont-rounded-right"></i></a>
						</div>
					</div>
				</div>
            </div>
        </div>
            

        </>
    )
}

export default BusinessBanner
