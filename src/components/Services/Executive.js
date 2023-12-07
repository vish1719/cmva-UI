import React from 'react'
// import FAQBanner from './FAQBanner'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import ExecutiveBanner from './ExecutiveBanner'

function Executive() {
	return (
		<>
		<ExecutiveBanner/>
			<section id="faq" className="faq section-bg">
				<div className="container">

					<div className="row about_inner">
						<div className="col-lg-12">
							<div className="accordion" id="accordionExample">
								<div className="section-title">
									<h2>Executive Secretarial Task</h2>
								</div>
								<p>
								Executive assistants are unique than VA as they will be working for executives of corporate companies. 
								They have the potential in assisting them with high-level administrative tasks prioritizing the events with 
								effective time management. Executive assistants will also aid them in clerical works similar to PA or secretaries. 
								ConnectMyVA executive assistants can make a profitable difference to a business or company by engaging in other 
								duties such as market research, guiding employees and making travel arrangements for meetings, etc.,</p>

								<div className="card">
									<div className="card-header" id="headingOne">
										<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											Research
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>

									<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
										<div className="card-body">
										Executive assistants conduct intense online and offline research working remotely for the diverse needs of top executives or chiefs of an organization.
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingTwo">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
											Daily Management
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
										<div className="card-body">
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
										</div>
									</div>
								</div>
								
								
								<div className="card">
									<div className="card-header" id="headingThree">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											Word Processing
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
										<div className="card-body">
										Word Processors help you with creating and formatting reports, mailshots, newsletters, brochures, and maintaining audio &amp; video content in standard formats, etc., by using different tools.
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingfour">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
											Call Screening
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
										<div className="card-body">
										The call screener will be monitoring all incoming and outgoing calls on the client’s behalf and has to organize all data into key points for their day-to-day scheduling and business archives.
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingFive">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
										To do list organization
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
										<div className="card-body">
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
										</div>
									</div>
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
