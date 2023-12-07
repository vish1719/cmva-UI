import React from 'react'
// import FAQBanner from './FAQBanner'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import SalesBanner from './SalesBanner'

function Sales() {
	return (
		<>
			<SalesBanner/>
			<section id="faq" className="faq section-bg">
				<div className="container">

					<div className="row about_inner">
						<div className="col-lg-12">
							<div className="accordion" id="accordionExample">
								<div className="section-title">
									<h2>Sales &amp; Marketing</h2>
								</div>
								<p>

									The core objective and bottom line for every business owner is to rollout new sales and market
									their product successfully. The challenges associated with all business is customer engagement
									and satisfication. Marketing is the important strategy to ensure the growth and we do market
									studies for your business.<br /></p>
								<p><strong style={{ color: "#58b958" }}>ConnectMyVA</strong> work with you to manage the product cycle of business
									using various analytical tools. Below are some of task we assist you effectively for business
									enhancement.<br /></p>

								<div className="card">
									<div className="card-header" id="headingOne">
										<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											Leads
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>

									<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
										<div className="card-body">

											<ul>
												<li>Generating leads</li>
												<li>Updating and managing contacts</li>
												<li>Leads categorization</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingTwo">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
											Competition
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
										<div className="card-body">
											<ul>
												<li>Market research</li>
												<li>Analysis</li>
												<li>Product comparison</li>
												<li>Pricing analysis</li>

											</ul>
										</div>
									</div>
								</div>


								<div className="card">
									<div className="card-header" id="headingThree">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											Follow up
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
										<div className="card-body">
											<ul>
												<li>Clients</li>
												<li>Pre-sales priming</li>

											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingfour">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
											Marketing Promotions
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
										<div className="card-body">
											<ul>
												<li>Campaign management</li>
												<li>Sourcing content, Blogs / ideas</li>

											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingFive">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
											Marketing Reports
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
										<div className="card-body">

											<ul>
												<li>Cost per lead</li>
												<li>Campaign effectiveness</li>
												<li>Lead source analysis</li>

											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingSix">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
											Sales Reports
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
										<div className="card-body">

											<ul>
												<li>Cost per sale</li>
												<li>Revenue by segment / product / geography</li>
												<li>Sales effectiveness</li>

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

export default Sales
