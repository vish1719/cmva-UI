import React from 'react'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import StaffBanner from './StaffBanner'
import { useEffect } from 'react'
function Staff() {
    useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
    return (
        <>
        <StaffBanner/>
            <section id="faq" className="faq section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Staffing and Recruitment</h2>
                    </div>
                    <div className="row  d-flex align-items-stretch">

                        <div className="col-lg-12 faq-item" data-aos="fade-up">

                            <p>
                                <strong style={{ color: "#58b958" }}>ConnectMyVA</strong>’s skilled assistants are capable of working on HR staffing and recruitment routine works of your organization. And, also can multitask to manage daily admin works.
                            </p>
                            <ul>
                                <li>Latest Jobs (Job Ads &amp; Vacancy Research, Uploading with Approval, Account Management)</li>
                                <li>Resume (Preparation, Custom Formatting, Designate &amp; Manage Database)</li>
                                <li>CRM tasks (Entering New Profiles &amp; Updating, Employee History, Expertise Fields, Update Job Openings)</li>
                                <li> Assessment (Pre-screening Profiles, Verify References)</li>
                                <li> Interviews (Schedule Interviews, Shortlisting of Candidates &amp; Post Interview Communications)</li>
                                <li> Spark Off Leads (via Emails, Newsletters, Campaigns &amp; Lead Sources)</li>
                                <li>  Invoicing (Tracking Log Hours, Designation &amp; Billing)</li>
                                <li> Payrolls (Timely Payroll &amp; Paychecks Processing, Consulting Managers on Payroll, Travel &amp; Expense Reports)</li>
                                <li> IT Services (Troubleshoot Tech Errors, Reply Queries on Phone calls/Emails)</li>
                            </ul>
                        </div>

                    </div>






                    <Hyperlinks2 />

                </div>
            </section>
        </>
    )
}

export default Staff
