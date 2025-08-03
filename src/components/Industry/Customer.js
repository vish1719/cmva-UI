import React from 'react'
// import FAQBanner from './FAQBanner'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import CustomerBanner from './CustomerBanner'
import { useEffect } from 'react'
import Seo from "../Seo";
//import ReactGA from 'react-ga';
function Customer() {
	useEffect(() => {
       // ReactGA.pageview(window.location.pathname + window.location.search);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
	return (
		<>
		<Seo
  title="Virtual Assistant for Customer Services | ConnectMyVA"
  description="ConnectMyVA provides experienced virtual assistants for CRM management, customer support, lead generation, email handling, and phone supervision to boost client satisfaction and retention."
  path="/customer-services"
  keywords="customer service virtual assistant, CRM management VA, lead generation VA, email support, call handling VA"
  />

			<CustomerBanner/>
			<section id="faq" className="faq section-bg">
				<div className="container">

					<div className="row about_inner">
						<div className="col-lg-12">
							<div className="accordion" id="accordionExample">
								<div className="section-title">
									<h1>Customer Services</h1>
								</div>
								<p>

									Being a virtual assistant involves much more than just answering phone calls and setting up appointments. A modern virtual
									assistant can handle miscellaneous tasks from the supervision of a project to paralegal services. The capability of handling these
									services is achieved by them through knowledge and experience, which in turn can be very lucrative to their clients.<br /></p>
									<p>Hiring a virtual assistant with the proper skill set in accordance to your needs is very much essential for accomplishing your
									business goals. In case of the necessity of various customer services, one must distinctly quote their job request to find the right
									person for the task.<br /></p>
									<p><strong style={{ color: "#58b958" }}>ConnectMyVA</strong> offers a wide range of customer support services by virtual assistants and is not bounded to:<br /></p>
								<div>
										<h6><strong>CRM Management</strong></h6>
									
										<p>	Any business begins by gaining new leads. And, maintaining a good relationship with the clients ensures long term benefits
											for a company. The highly qualified professionals of the customer relationship management team at ConnectMyVA will aid our
											customers in maintaining a good alliance with your existing clients while also building up new ones for your business.
										</p>
								</div>
								<div>
										<h6><strong>Lead Generation</strong></h6>
									
										<p><strong>ConnectMyVA</strong>’s professional experts are talented enough in setting up new leads for the progress of any business.
											They achieve instant leads through their valiant efforts and experience. Recruit a Virtual Assistant to strengthen
											your lead generation and escalate your business to greater heights.
										</p>
								</div>
								<div>
										<h6><strong>Customer Service</strong></h6>
									
										<p>	Keeping a tab on client feedback and understanding their needs is an important aspect
											of customer interaction. And, Our customer service virtual assistants are proficient in handling the task.
										</p>
								</div>
								
								<div>
										<h6><strong>Phone Call Supervision</strong></h6>
									
										<p>		Our virtual assistants under the customer service team can assist you with handling phone calls and addressing
											their queries. Maintaining a correlation by accompanying through telephonic interactions is an essential act of enhancing the mutual relationship with potential clients.
										</p>
								</div>
								<div>
										<h6><strong>Email Management</strong></h6>
									
										<p>	Responding to customer replies and emails has become a vital need in the modern world. Our experienced virtual assistants
											can make sure of never missing to assist them through emails. They are also prone to assist multiple clients through email
											interaction at once.
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

export default Customer
