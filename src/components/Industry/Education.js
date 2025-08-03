import React from 'react'
// import FAQBanner from './FAQBanner'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import EducationBanner from './EducationBanner'
import { useEffect } from 'react'
import Seo from "../Seo";
function Education() {
	useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
	return (
		<>
		<Seo
  title="Virtual Assistant for Education & Training | ConnectMyVA"
  description="ConnectMyVA offers dedicated virtual assistants for the education sector. We help with course updates, student enrollment, assessment evaluation, admin support, and more so educators can focus on teaching."
  path="/education-and-training"
  keywords="virtual assistant for education, education admin support, online training assistant, course management VA, student support VA"
  />
			<EducationBanner/>
			<section id="faq" className="faq section-bg">
				<div className="container">

					<div className="row about_inner">
						<div className="col-lg-12">
							<div className="accordion" id="accordionExample">
								<div className="section-title">
									<h1>Education &amp; Training</h1>
								</div>
								<p>

									Education department is the base to mold the young lives for the instructor or trainer. Education
									and training is attaining knowledge and gaining skills in particular area which benefits the
									progress of a country. Tutors playing vital role in training the students with different verticals to
									provide a valued education.<br /></p>
								<p><strong style={{ color: "#58b958" }}>ConnectMyVA</strong> will be a effective task handler in Education and
									training sector while you focus on the core competency. Our assistant are with extensive
									experience to handle tasks such as Updating courses, Admin support, Assessment Evaluation.<br /></p>

								<div>
								
									<h6><strong>Courses</strong></h6>
											
									
									<p>
											<ul>
												<li>Listing</li>
												<li>Updating</li>
												<li>Online directories</li>
											</ul>
									</p>
								</div>
								<div>
								<h6><strong>Admin Support</strong></h6>
										<p>
											<ul>
												<li>Student enrollment</li>
												<li>Material dispatch to participants</li>
												<li>Attendance</li>
												<li>Lecture scheduling</li>

											</ul>
										</p>
								</div>


								<div>
										<h6><strong>Back Office</strong></h6>
									
										<p>
											<ul>
												<li>Student enrollment</li>
												<li>Material dispatch to participants</li>
												<li>Attendance</li>
												<li>Lecture scheduling</li>

											</ul>
										</p>
								</div>

								<div>
								<h6><strong>Marketing</strong></h6>
									
										<p>
										<ul>
												<li>Lead generation</li>
												<li>CRM</li>
												<li>Mailer campaigns</li>

											</ul>
										</p>
								</div>
								<div>
								<h6><strong>Accounts</strong></h6>
									
										<p>
										<ul>
												<li>Client / student billing</li>
												<li>Third party invoicing / payments, Payroll</li>

											</ul>
										</p>
								</div>
								<div>
								<h6><strong>Assessment</strong></h6>
									
										<p>
										<ul>
												<li>Evaluation</li>
												<li>Scores</li>
												<li>Reports</li>

											</ul>
										</p>
								</div>
								<div>
								<h6><strong>Feedback</strong></h6>
									
										<p>
										<ul>
												<li>Student / tutor feedback</li>
												<li>Monitoring Yelp / BestLocalReviews</li>

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

export default Education
