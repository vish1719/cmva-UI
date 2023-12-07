import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SalesBanner() {
    
    return (
        <>

            
            <div className="banner_area">
            <div className="banner_inner banner_inner_sales d-flex align-items-center">
            	<div className=" bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				<div className="container">
					<div className="banner_content text-start">
						<h2>Sales &amp; Marketing</h2>
						<div className="page_link">
							<Link to={"/"}>Home <i className="icofont-rounded-right"></i></Link> 
							<Link to={"/sales-and-marketing"}>Sales &amp; Marketing <i className="icofont-rounded-right"></i></Link> 
							<Link to={"/signup"}>Sign Up<i className="icofont-rounded-right"></i></Link>
						</div>
					</div>
				</div>
            </div>
        </div>
            

        </>
    )
}

export default SalesBanner
