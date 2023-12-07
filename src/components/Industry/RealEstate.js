import React from 'react'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import RealEstateBanner from './RealEstateBanner'

function RealEstate() {
    return (
        <>
        <RealEstateBanner/>
            <section id="faq" className="faq section-bg">
                <div className="container">
                    <div className="row  d-flex align-items-stretch">

                        <div className="col-lg-12 faq-item" data-aos="fade-up">
                        <div className="section-title">
									<h2>Real Estate</h2>
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
