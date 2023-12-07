import React from 'react'
// import FAQBanner from './FAQBanner'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import HealthcareBanner from './HealthcareBanner'

function Healthcare() {
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

								<div className="card">
									<div className="card-header" id="headingOne">
										<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											Patient / Client Management
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>

									<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
										<div className="card-body">

											<ul>
												<li>Updating records or database</li>
												<li>Reminders</li>
												<li>Scheduling appointments</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingTwo">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
											Insurance Claims
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
										<div className="card-body">
											<ul>
												<li>Program subscriptions</li>
												<li>Claims assistance / follow ups</li>

											</ul>
										</div>
									</div>
								</div>


								<div className="card">
									<div className="card-header" id="headingThree">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											Billing
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
										<div className="card-body">
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
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingfour">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
											Programs / Workshops
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
										<div className="card-body">
											<ul>
												<li>Organizing Fitness programs</li>
												<li>Promotion</li>
												<li>Bookings</li>
												<li>Schedules</li>
												<li>Uploading Programs in Website</li>
												<li>Presentations and documents prepareations</li>
												<li>Creating Brochures, flyers in Canva</li>

											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingFive">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
											Performance Evaluation
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
										<div className="card-body">

											<ul>
												<li>Fitness tracking</li>
												<li>Performance parameter analysis</li>
												<li>Evaluation reports</li>

											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingSix">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
											Specialized tasks
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
										<div className="card-body">

											<ul>
												<li>Medical transcription</li>
												<li>EHR</li>
												<li>Updating Social medias (LinkedIn, Instagram, Facebook)</li>

											</ul>
										</div>
									</div>
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
