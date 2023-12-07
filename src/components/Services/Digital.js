import React from 'react'
// import FAQBanner from './FAQBanner'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import DigitalBanner from './DigitalBanner'

function Digital() {
	return (
		<>
			<DigitalBanner/>
			<section id="faq" className="faq section-bg">
				<div className="container">

					<div className="row about_inner">
						<div className="col-lg-12">
							<div className="accordion" id="accordionExample">
								<div className="section-title">
									<h2>Digital Services</h2>
								</div>
								<p>
									Every business requires some marketing tactics to get more limelight to their brands.
									ConnectMyVA assistants will take care of social media marketing strategies for your business
									and here are the services they offer.</p>

								<div className="card">
									<div className="card-header" id="headingOne">
										<button className="btn btn-link " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											Search Engine Optimization (SEO)
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>

									<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
										<div className="card-body">
											<ul>
												<li>Surveying Business Objectives (Evaluate business goals, Check Audit Status)</li>
												<li>Website Scrutiny (SEO auditing, Analyze design architecture &amp; navigation, Keywords &amp; Market research)</li>
												<li>Tactical Plans &amp; Implementation: Exclusive plan of action as per business needs for local/universal SEO.</li>
												<ul>
													<li>On-Page: User-friendly architecture, Design Website Url, Internal Links building, 
														Organized data interpretation, MetaData optimization, Optimize Page Load Speed, 
														Keywords &amp; Search Engine recommendations.</li>
													<li>Off-Page: Preserve long-term Content, Keyword-rich content writing, Content posting on social media, 
														Maintain quality backlinks, deep-link building strategies.</li>
													
													

												</ul>
												<li>Consecutive Analysis, Prepare Reports &amp; Review Results.</li>
												

											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingTwo">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
										Search Engine Marketing (SEM)
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
										<div className="card-body">
											<ul>
												<li>PPC Consulting &amp; Management</li>
												<li>Research Trending Keywords</li>
												<li>PPC Planning: Analyze traffic, CPC, and budget allocation for a month at various locations.</li>
												<li>Prepare, Supervise &amp; Optimize search engine campaigns (Google, Bing, Baidu, etc.,)</li>
												<li>Redesigning existing &amp; operating campaigns</li>
												<li>Bid Management &amp; Ad copy A/B tests</li>
												<li>A/B Testing of Home/Landing Page</li>
												<li>Showcase ads including texts, banners &amp; flash on managed placements.</li>

											</ul>
										</div>
									</div>
								</div>


								<div className="card">
									<div className="card-header" id="headingThree">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
										Social Media Optimization (SMO)
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
										<div className="card-body">
										<ul>
												<li>Optimizing Facebook, Twitter, Blogs, YouTube</li>
												<li>Monitor Social Accounts (Manage Profiles, Posting on Schedule, Strengthening Issues Related to brand status/reputation)</li>
												<li>Create Quality Content (Research on subject, Participation of Users, Appropriate content for Social Media Platforms)</li>
												<li>Examination and Review for upgrading the brand reputation.</li>
												

											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingfour">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
										Social Media Marketing (SMM)
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
										<div className="card-body">
										<ul>
												<li>Set up, organize and optimize social media campaigns (Facebook, Twitter, YouTube, LinkedIn)</li>
												<li>Bid Management for businesses, Ad copy A/B Testing</li>
												<li>Home page/ Landing page A/B Testing</li>
												<li>Improve Efficiency on targets based on locales &amp; company interests.</li>
												

											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingFive">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
										Search Optimized Content
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
										<div className="card-body">
											
											<ul>
												<li>Compose Blogs and articles for sociable search responses.</li>
												

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

export default Digital
