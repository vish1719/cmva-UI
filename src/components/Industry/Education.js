import React from 'react'
// import FAQBanner from './FAQBanner'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import EducationBanner from './EducationBanner'

function Education() {
	return (
		<>
			<EducationBanner/>
			<section id="faq" className="faq section-bg">
				<div className="container">

					<div className="row about_inner">
						<div className="col-lg-12">
							<div className="accordion" id="accordionExample">
								<div className="section-title">
									<h2>Education &amp; Training</h2>
								</div>
								<p>

									Education department is the base to mold the young lives for the instructor or trainer. Education
									and training is attaining knowledge and gaining skills in particular area which benefits the
									progress of a country. Tutors playing vital role in training the students with different verticals to
									provide a valued education.<br /></p>
								<p><strong style={{ color: "#58b958" }}>ConnectMyVA</strong> will be a effective task handler in Education and
									training sector while you focus on the core competency. Our assistant are with extensive
									experience to handle tasks such as Updating courses, Admin support, Assessment Evaluation.<br /></p>

								<div className="card">
									<div className="card-header" id="headingOne">
										<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											Courses
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>

									<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
										<div className="card-body">

											<ul>
												<li>Listing</li>
												<li>Updating</li>
												<li>Online directories</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingTwo">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
											Admin Support
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
										<div className="card-body">
											<ul>
												<li>Student enrollment</li>
												<li>Material dispatch to participants</li>
												<li>Attendance</li>
												<li>Lecture scheduling</li>

											</ul>
										</div>
									</div>
								</div>


								<div className="card">
									<div className="card-header" id="headingThree">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											Back Office
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
										<div className="card-body">
											<ul>
												<li>Files convesions</li>
												<li>Creating Presentation material</li>
												<li>Documents processing &amp; Formatting</li>

											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingfour">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
											Marketing
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
										<div className="card-body">
											<ul>
												<li>Lead generation</li>
												<li>CRM</li>
												<li>Mailer campaigns</li>

											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingFive">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
											Accounts
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
										<div className="card-body">

											<ul>
												<li>Client / student billing</li>
												<li>Third party invoicing / payments, Payroll</li>

											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingSix">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
											Assessment
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
										<div className="card-body">

											<ul>
												<li>Evaluation</li>
												<li>Scores</li>
												<li>Reports</li>

											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingEight">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
											Feedback
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
										<div className="card-body">

											<ul>
												<li>Student / tutor feedback</li>
												<li>Monitoring Yelp / BestLocalReviews</li>

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

export default Education
