import React from 'react'
import { Helmet } from 'react-helmet-async';

// import FAQBanner from './FAQBanner'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import DigitalBanner from './DigitalBanner'
import { useEffect } from 'react'
function Digital() {
	useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
	return (
		<>

<Helmet>
    <title>Digital Services | ConnectMyVA - SEO, SEM & Social Media Marketing</title>
    <meta
      name="description"
      content="Boost your business with ConnectMyVA’s digital services! We offer easy SEO, SEM, social media marketing, and more to grow your brand. From keyword research to social media campaigns, our assistants help you shine online."
    />
    <link rel="canonical" href="https://connectmyva.com/digital" />
  </Helmet>
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
								
								<div>
								<h6><strong>Search Engine Optimization (SEO)</strong></h6>
									
										<p>
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
										</p>
								</div>

								<div>
								<h6><strong>Search Engine Marketing (SEM)</strong></h6>
									
										<p>
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
										</p>
								</div>

								<div>
								<h6><strong>Social Media Optimization (SMO)</strong></h6>
									
										<p>
										<ul>
												<li>Optimizing Facebook, Twitter, Blogs, YouTube</li>
												<li>Monitor Social Accounts (Manage Profiles, Posting on Schedule, Strengthening Issues Related to brand status/reputation)</li>
												<li>Create Quality Content (Research on subject, Participation of Users, Appropriate content for Social Media Platforms)</li>
												<li>Examination and Review for upgrading the brand reputation.</li>
												

											</ul>
										</p>
								</div>
								<div>
								<h6><strong>Social Media Marketing (SMM)</strong></h6>
									
										<p>
										<ul>
												<li>Set up, organize and optimize social media campaigns (Facebook, Twitter, YouTube, LinkedIn)</li>
												<li>Bid Management for businesses, Ad copy A/B Testing</li>
												<li>Home page/ Landing page A/B Testing</li>
												<li>Improve Efficiency on targets based on locales &amp; company interests.</li>
												

											</ul>
										</p>
								</div>
								<div>
								<h6><strong>Search Optimized Content</strong></h6>
									
										<p>
										<ul>
												<li>Compose Blogs and articles for sociable search responses.</li>
												

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

export default Digital
