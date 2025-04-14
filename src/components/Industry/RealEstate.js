import React from 'react'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import RealEstateBanner from './RealEstateBanner'
import { useEffect } from 'react'
import Seo from "../Seo";
function RealEstate() {
    useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
    return (
        <>
        <Seo
  title="Virtual Assistant for Real Estate | ConnectMyVA"
  description="ConnectMyVA offers professional virtual assistant services for real estate businesses. We help with listings, lead management, scheduling, invoicing, and property coordination to boost productivity."
  path="/industries/real-estate"
  keywords="real estate virtual assistant, real estate support, VA for realtors, property management assistant, CRM virtual assistant"
  />

        <RealEstateBanner/>
            <section id="faq" className="faq section-bg">
                <div className="container">
                    <div className="row  d-flex align-items-stretch">

                        <div className="col-lg-12 faq-item" data-aos="fade-up">
                        <div className="section-title">
									<h1>Real Estate</h1>
								</div>
                            <p>
                            <strong style={{ color: "#58b958" }}>ConnectMyVA</strong> virtual assistants can assist you in organizing your busy schedule and save your time. So that you prioritize your business proceedings and take it to the next level. Our VAs can
                            </p>
<ul>
                          <li>Manage Listings (Pricing, Uploads, Tracking, Updating)</li>
                          <li>Prepare Reports &amp; Compare (Pricing Rates, Property Ratings, School &amp; Hospital Zone Ratings, Crime Rates)</li>
                             <li>Client Administrative support (Organize Inbox, Leads, Mailing Lists, Scheduling, Manage Feedbacks, CRM</li>
                            <li> Posting Ads (Banner Ads, Commercials, Emails, Craigslist, Backpage)</li>
                            <li> Property Administration (Pursue Rent, Manage Rent Roll, Prepare Invoices, Lease/Tenancy agreements, Coordinate with Service Providers)</li>
                             <li> Adjustment Entry Preparation</li>
                              <li>   Prevention of errors and frauds</li>
                            <li> Associating with Client’s CPA on tax accounting</li>
                            <li>  Accruals, prepaid &amp; more..</li>
                            </ul>
                        </div>

                    </div>





                    
                    <Hyperlinks2 />

                </div>
            </section>
        </>
    )
}

export default RealEstate
