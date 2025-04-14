import React from 'react'
import { Helmet } from 'react-helmet-async';
import Seo from "../Seo";

// import FAQBanner from './FAQBanner'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import ExecutiveBanner from './ExecutiveBanner'
import { useEffect } from 'react'
function Executive() {
	useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
	return (
		<>
		<Seo
  title="Market Research for Business | ConnectMyVA Executive Assistants"
  description="Need market research for business? ConnectMyVA offers expert executive assistants to handle research, and daily management. From scheduling to travel arrangements, our team saves you time & boosts your growth."
  path="/executive"
  keywords="Market Research for Business"
/>

		
		<ExecutiveBanner/>
			<section id="faq" className="faq section-bg">
				<div className="container">

					<div className="row about_inner">
						<div className="col-lg-12">
							<div className="accordion" id="accordionExample">
								<div className="section-title">
									<h1>Executive Secretarial Task</h1>
								</div>
								<p>
								Executive assistants are unique than VA as they will be working for executives of corporate companies. 
								They have the potential in assisting them with high-level administrative tasks prioritizing the events with 
								effective time management. Executive assistants will also aid them in clerical works similar to PA or secretaries. 
								ConnectMyVA executive assistants can make a profitable difference to a business or company by engaging in other 
								duties such as market research, guiding employees and making travel arrangements for meetings, etc.,</p>

								<div>
								<h6><strong>Research</strong></h6>
									
										<p>Executive assistants conduct intense online and offline research working remotely for the diverse needs of top executives or chiefs of an organization.
										</p>
								</div>

								<div>
								<h6><strong>Daily Management</strong></h6>
									
										<p>
										<ul>
											<li>Organize Executive’s schedule</li>
											<li>Act as a representative for the executive in calls and meeting in their absence</li>
											<li>Manage Office jobs</li>
											<li>Document Preparation &amp; Reviews</li>
											<li>Briefing Presentations &amp; Reports</li>
											<li>Examine Data</li>
											<li>Take care of Confidential info</li>
											<li>Overseeing administrative assistants and workforce</li>

										</ul>
										</p>
								</div>

								<div>
								<h6><strong>Word Processing</strong></h6>
									
										<p>Word Processors help you with creating and formatting reports, mailshots, newsletters, brochures, and maintaining audio &amp; video content in standard formats, etc., by using different tools.
										</p>
								</div>
								
								<div>
								<h6><strong>Call Screening</strong></h6>
									
										<p>The call screener will be monitoring all incoming and outgoing calls on the client’s behalf and has to organize all data into key points for their day-to-day scheduling and business archives.
										</p>
								</div>
								
								
								<div>
								<h6><strong>To do list organization</strong></h6>
									
										<p>
										Executive assistants(EA) are well organized to give personal assistance by forming a to-do-list of 
										tasks that needs your focus. Their sharp instinct in managing things for you will save precious time 
										and also keep your head fresh.
										<br/>
										EAs make sure you don’t waste any time and provide valiant 
										information which will certainly contribute to your organization’s growth.
										<br/>
										<ul>
											<li>Calendar Management: Appointments Scheduling and set up reminders</li>
											<li>Organize Emails: Prioritize &amp; Screen Emails</li>
											<li>Develop Testimonials for Business Presentations</li>
											<li>Event and Product Launch Arrangement</li>
											<li>Research and Memo Writing</li>
											<li>Manage Personal Social Media Profiles</li>
											<li>Compile and manage e-files</li>
											<li>Compose and maintain reports</li>
											<li>Systemization and maintenance of data</li>
											<li>Travel Arrangements</li>
											<li>Handle Purchases, Bookings &amp; Payments.</li>

										</ul>
										</p>
								</div>
							</div>
						</div>

					<Hyperlinks2/>
					</div>
				</div>
			</section>
		</>
	)
}

export default Executive
