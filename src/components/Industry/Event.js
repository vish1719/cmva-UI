import React from 'react'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import EventBanner from './EventBanner'
import { useEffect } from 'react'
function Event() {
    useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
    return (
        <>
        <EventBanner/>
            <section id="faq" className="faq section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Entertainment &amp; Event management</h2>
                    </div>
                    <div className="row  d-flex align-items-stretch">

                        <div className="col-lg-12 faq-item" data-aos="fade-up">

                            
                            <ul>
                                <li>Maintain Event Calendar (Updating Website, Manage Calendar)</li>
                                <li>Event Registration (Track Registrations, Pass on kits)</li>
                                <li>Marketing Events (Promos, Blogs &amp; Social Media Marketing)</li>
                                <li> Customer Support (Handle Inquiry, Customer Service, Coordination with client/ event manager)</li>
                                <li>Convention Research (Select invitees/ contestants/ musicians/ bands/ hosts, etc.,)</li>
                                <li> Invoice Management (Track Payments &amp; Expenses, Invoices, Refunds)</li>
                               
                            </ul>
                        </div>

                    </div>






                    <Hyperlinks2 />

                </div>
            </section>
        </>
    )
}

export default Event
