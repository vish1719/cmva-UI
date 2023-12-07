import React from 'react';
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';


function Banner() {
    
    return (
        <>

            
            <div className="banner_area">
            <div className="banner_inner_abt banner_inner d-flex align-items-center">
            	<div className=" bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				<div className="container">
					<div className="banner_content text-start">
						<h2>About Us</h2>
						<div className="page_link">
							<Link to={"/"}>Home <i className="icofont-rounded-right"></i></Link> 
							<Link to={"/about"}>About <i className="icofont-rounded-right"></i></Link> 
							<Link to={"/how"}>How it works? <i className="icofont-rounded-right"></i></Link>
						</div>
					</div>
				</div>
            </div>
        </div>
            

        </>
    )
}

export default Banner
