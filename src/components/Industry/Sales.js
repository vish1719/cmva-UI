import React from 'react'
// import FAQBanner from './FAQBanner'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import SalesBanner from './SalesBanner'
import { useEffect } from 'react'
function Sales() {
	useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
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


								<div>
										<h6><strong>Leads</strong></h6>
									
										<p>
										<ul>
												<li>Generating leads</li>
												<li>Updating and managing contacts</li>
												<li>Leads categorization</li>
											</ul>
										</p>
								</div>
								<div>
										<h6><strong>Competition</strong></h6>
									
										<p>
										<ul>
												<li>Market research</li>
												<li>Analysis</li>
												<li>Product comparison</li>
												<li>Pricing analysis</li>

											</ul>
										</p>
								</div>
								<div>
										<h6><strong>Follow up</strong></h6>
									
										<p>
										<ul>
												<li>Clients</li>
												<li>Pre-sales priming</li>

											</ul>
										</p>
								</div>
								<div>
										<h6><strong>Marketing Promotions</strong></h6>
									
										<p>
										<ul>
												<li>Campaign management</li>
												<li>Sourcing content, Blogs / ideas</li>

											</ul>
										</p>
								</div>
								<div>
										<h6><strong>Marketing Reports</strong></h6>
									
										<p>
										<ul>
												<li>Cost per lead</li>
												<li>Campaign effectiveness</li>
												<li>Lead source analysis</li>

											</ul>
										</p>
								</div>
								<div>
										<h6><strong>Sales Reports</strong></h6>
									
										<p>
										
										<ul>
												<li>Cost per sale</li>
												<li>Revenue by segment / product / geography</li>
												<li>Sales effectiveness</li>

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

export default Sales
