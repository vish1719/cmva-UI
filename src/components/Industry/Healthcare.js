import React from 'react'
// import FAQBanner from './FAQBanner'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import HealthcareBanner from './HealthcareBanner'
import { useEffect } from 'react'
function Healthcare() {
	useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
	return (
		<>
			<HealthcareBanner/>
			<section id="faq" className="faq section-bg">
				<div className="container">

					<div className="row about_inner">
						<div className="col-lg-12">
							<div className="accordion" id="accordionExample">
								<div className="section-title">
									<h2>Healthcare &amp; Fitness</h2>
								</div>
								<p>

									As a fitness trainer or medical expert your business is truly important to you. There will be a lot
									of additional task and critical areas to handle to provide a quality services and improve your
									business.<br /></p>
								<p><strong style={{ color: "#58b958" }}>ConnectMyVA</strong> are here to help you with handling additional task when you are busy
									with your workload. We focus exclusively on your business while working with you. Our
									assistant highly experienced with task like managing clients, Organizing programs and
									workshop, client billing.<br /></p>

								<div>
										<h6><strong>Patient / Client Management</strong></h6>
									
										<p>
										<ul>
												<li>Updating records or database</li>
												<li>Reminders</li>
												<li>Scheduling appointments</li>
											</ul>
										</p>
								</div>
								<div>
										<h6><strong>Insurance Claims</strong></h6>
									
										<p>
										<ul>
												<li>Program subscriptions</li>
												<li>Claims assistance / follow ups</li>

											</ul>
										</p>
								</div>
								<div>
										<h6><strong>Billing</strong></h6>
									
										<p>
										<ul>
												<li>Book keeping</li>
												<li>Payment processing</li>
												<li>Invoicing</li>
												<li>Updating Members Payment Details</li>
												<li>Payment Scheme Updates</li>
												<li>Monitor Unpaid Sessions</li>
												<li>Follow-up on payments</li>
												<li>Cancellations</li>
												<li>Late Transactions</li>
												<li>Manage Autopay Expirations and Rejections</li>

											</ul>
										</p>
								</div>
								<div>
										<h6><strong>Programs / Workshops</strong></h6>
									
										<p>
										<ul>
												<li>Organizing Fitness programs</li>
												<li>Promotion</li>
												<li>Bookings</li>
												<li>Schedules</li>
												<li>Uploading Programs in Website</li>
												<li>Presentations and documents prepareations</li>
												<li>Creating Brochures, flyers in Canva</li>

										</ul>
										</p>
								</div>
								<div>
										<h6><strong>Performance Evaluation</strong></h6>
									
										<p>
										<ul>
												<li>Fitness tracking</li>
												<li>Performance parameter analysis</li>
												<li>Evaluation reports</li>

											</ul>
										</p>
								</div>
								<div>
										<h6><strong>Specialized tasks</strong></h6>
									
										<p>
										<ul>
												<li>Medical transcription</li>
												<li>EHR</li>
												<li>Updating Social medias (LinkedIn, Instagram, Facebook)</li>

											</ul>
										</p>
								</div>

							</div>
						</div>

						<Hyperlinks2 />
					</div>
				</div>
			</section>
		</>
	)
}

export default Healthcare
