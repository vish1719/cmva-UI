import React from 'react'
// import FAQBanner from './FAQBanner'
import { useEffect } from 'react';
import Seo from "../Seo";

function Copyright() {
	useEffect(() => {
        console.log('dfdsfdsf')
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
	return (
		<>
		<Seo
                path="/copyright"
        />
			{/* <FAQBanner/> */}
			<section id="faq" className="faq section-bg">
				<div className="container">

					<div className="row about_inner">
						<div className="col-lg-12">
							<div className="accordion" id="accordionExample">
								<div className="section-title">
									<h2>Copyright</h2>
								</div>

								<p>All materials on the Site are copyrighted and are protected under state and federal law, as well as international treaties and the copyright laws of other countries. ConnectMyVA materials may not be reproduced, copied, distributed, adapted, displayed, edited, published, transmitted, or downloaded in any way without ConnectMyVA express written permission except that you may download one copy of the Content for your personal, non-commercial use, provided that all copyright and proprietary notice are displayed on such downloaded content. All rights not expressly granted herein are reserved by ConnectMyVA. If you are aware of any copyright violations on the site, please contact us.</p>
								
								{/* <p>Thank you for purchasing our service at Connectmyva.<br /></p>
									<p>Our focus is on complete customer satisfaction. In the event, if you are displeased with the services provided, we will refund back the money, provided the reasons are genuine and proved after a quality check. 
										We’re confident that you’ll absolutely love our services, that we’re willing to offer a 5-day risk-free money-back guarantee. If you are not satisfied with the service for any reason you can get a refund within 5 days of the final delivery of the project.<br /></p>
									<p>In case of dissatisfaction from our services, clients have the liberty to cancel their projects and request a refund from us. Our Policy for the cancellation and refund will be as follows:<br /></p>
									<h6><strong>1. Cancellation Policy</strong></h6>
								<p>If you would like to contact us concerning any matter relating to this cancellation/refund policy, you may send an email to<strong> <a style={{ color: "#58b958" }} href="mailto:support@connectmyva.com">support@connectmyva.com</a> </strong>Requests received later than 5 business days after delivering the service will not be considered.<br/></p>
								<h6><strong>2. Refund Policy</strong></h6>
								<p>We will try our best to provide the best suitable solutions for our clients. In case any client is not completely satisfied with our services we can provide a refund.<br/></p>
								<p>A refund will not be applicable when raised after 5 days of the projects/service delivered. After the delivery of projects, a 5-days period, you will no longer be eligible and won’t be able to receive a refund.<br/></p>
								<p>If paid by credit card, refunds will be issued to the original credit card provided at the time of purchase and in case of payment gateway payments refund will be made to the same account.<br/></p>
								 */}

								
								
								
								
							</div>
						</div>

						
					</div>
				</div>
			</section>
		</>
	)
}

export default Copyright
