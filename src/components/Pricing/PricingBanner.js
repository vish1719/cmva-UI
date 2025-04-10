import React from 'react';
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';

function PriceBanner() {
	return (
		<>
			<div className="banner">
				<img
					src='../../assets/images/Pricing&Plan.jpg'
					alt="Pricing and Plans Banner"
					title="Pricing and Plans"
					className="bannerImage"
				/>
			</div>
		</>
	);
}

export default PriceBanner;
