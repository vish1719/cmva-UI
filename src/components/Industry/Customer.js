import React from 'react'
// import FAQBanner from './FAQBanner'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import CustomerBanner from './CustomerBanner'

function Customer() {
	return (
		<>
			<CustomerBanner/>
			<section id="faq" className="faq section-bg">
				<div className="container">

					<div className="row about_inner">
						<div className="col-lg-12">
							<div className="accordion" id="accordionExample">
								<div className="section-title">
									<h2>Customer Services</h2>
								</div>
								<p>

									Being a virtual assistant involves much more than just answering phone calls and setting up appointments. A modern virtual
									assistant can handle miscellaneous tasks from the supervision of a project to paralegal services. The capability of handling these
									services is achieved by them through knowledge and experience, which in turn can be very lucrative to their clients.<br /></p>
									<p>Hiring a virtual assistant with the proper skill set in accordance to your needs is very much essential for accomplishing your
									business goals. In case of the necessity of various customer services, one must distinctly quote their job request to find the right
									person for the task.<br /></p>
									<p><strong style={{ color: "#58b958" }}>ConnectMyVA</strong> offers a wide range of customer support services by virtual assistants and is not bounded to:<br /></p>

								<div className="card">
									<div className="card-header" id="headingOne">
										<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											CRM Management
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>

									<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
										<div className="card-body">

											Any business begins by gaining new leads. And, maintaining a good relationship with the clients ensures long term benefits
											for a company. The highly qualified professionals of the customer relationship management team at ConnectMyVA will aid our
											customers in maintaining a good alliance with your existing clients while also building up new ones for your business.
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingTwo">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
											Lead Generation
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
										<div className="card-body">
											<strong>ConnectMyVA</strong>’s professional experts are talented enough in setting up new leads for the progress of any business.
											They achieve instant leads through their valiant efforts and experience. Recruit a Virtual Assistant to strengthen
											your lead generation and escalate your business to greater heights.
										</div>
									</div>
								</div>


								<div className="card">
									<div className="card-header" id="headingThree">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											Customer Service
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
										<div className="card-body">
											Keeping a tab on client feedback and understanding their needs is an important aspect
											of customer interaction. And, Our customer service virtual assistants are proficient in handling the task.
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingfour">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
											Phone Call Supervision
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
										<div className="card-body">
											Our virtual assistants under the customer service team can assist you with handling phone calls and addressing
											their queries. Maintaining a correlation by accompanying through telephonic interactions is an essential act of enhancing the mutual relationship with potential clients.
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingFive">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
											Email Management
											<i className="icofont-simple-down"></i>
											<i className="icofont-simple-up"></i>
										</button>
									</div>
									<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
										<div className="card-body">

											Responding to customer replies and emails has become a vital need in the modern world. Our experienced virtual assistants
											can make sure of never missing to assist them through emails. They are also prone to assist multiple clients through email
											interaction at once.
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

export default Customer
