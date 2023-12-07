import React from 'react'
import FAQBanner from './FAQBanner'

function Faq() {
	return (
		<>
		<FAQBanner/>
			<section id="faq" className="faq section-bg">
				<div className="container">

					<div className="row about_inner">
						<div className="col-lg-12">
							<div className="accordion" id="accordionExample">
								<div className="section-title">
									<h2>FAQ</h2>
								</div>

								<div className="card">
									<div className="card-header" id="headingOne">
										<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										How do I track my usage for the month?
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>

									<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
										<div className="card-body">
											– weekly we will update the usage report
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingTwo">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
											What are the modes/means by which I can contact/communicate with my assistant?
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
										<div className="card-body">
										Phone, skype, hangouts, Asana, slack
										</div>
									</div>
								</div>
								
								
								<div className="card">
									<div className="card-header" id="headingThree">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											Can I limit the number of hours used for the task?
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
										<div className="card-body">
										– Yes you can limit
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingfour">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
											Will I get hourly updates on the tasks worked by the assistant?
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
										<div className="card-body">
										-Yes End of each task you will be notified by the spent time
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingFive">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
										Can I use additional hours apart from the hours credited as per my plan?
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
										<div className="card-body">
										– Yes you can use the hours however it will be additional charges
										</div>
									</div>
								</div>

								<div className="card">
									<div className="card-header" id="headingSix">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
										Where are you located? Are ConnectMYVA Virtual assistants freelancers or permanent employees of the company?
											<i className="icofont-simple-down"></i>
											<i clasNames="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
										<div className="card-body">
										-We are not freelancers we are company based in Bangalore India
										</div>
									</div>
								</div>

								<div className="section-title">
									<h2>Pricing/ Billing/ Plan Change</h2>
								</div>
								<div className="card">

									<div className="card-header" id="headingSeven">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
										Do I need to provide my credit card details to sign-up?
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
										<div className="card-body">
										– No we send the paypal invoice
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingEight">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
										What is my billing cycle? When do I receive my invoices?
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
										<div className="card-body">
										Every 5th of the month
										</div>
									</div>
								</div>
								<div className="section-title">
									<h2>Assistant/Service/Process</h2>
								</div>
								<div className="card">
									<div className="card-header" id="headingNine">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
										How long would it take to assign me an assistant?
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
										<div className="card-body">
										– it Depends on the Queue, but we always make sure that we get back with assistant details with in 24 hrs
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingTen">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
										What is the process of assigning an assistant? Will I get a chance to select my assistant?
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
										<div className="card-body">
										– Yes you will get chance to have an interview and if not we see your requirements and match the skillset
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingEleven">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
										Whom do I interact with every time? Will it be the same person or different persons?
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseEleven" className="collapse" aria-labelledby="headingEleven" data-parent="#accordionExample">
										<div className="card-body">
										– Same person. You will be having one primary contact and one Back up
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingTwelve">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
										Can I change my assistant in the middle? How does the process work?
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseTwelve" className="collapse" aria-labelledby="headingTwelve" data-parent="#accordionExample">
										<div className="card-body">
										– Sure you can ,if things are not going well with the current assistant just escalate to the Supervisour
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingThirteen">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
										Can my assistant assist me in languages other than English?
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseThirteen" className="collapse" aria-labelledby="headingThirteen" data-parent="#accordionExample">
										<div className="card-body">
										– We do have experience only In English
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingFourteen">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
										How do I get started with the services?
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseFourteen" className="collapse" aria-labelledby="headingFourteen" data-parent="#accordionExample">
										<div className="card-body">
										– Sign up and start using the services
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingFifteen">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
										What are the qualifications of the virtual assistants?
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseFifteen" className="collapse" aria-labelledby="headingFifteen" data-parent="#accordionExample">
										<div className="card-body">
										– Graduates and post Graduates
										</div>
									</div>
								</div>

							</div>
						</div>

					</div>
				</div>
			</section>
		</>
	)
}

export default Faq
