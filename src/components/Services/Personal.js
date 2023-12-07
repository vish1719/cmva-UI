import React from 'react'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import PersonalBanner from './PersonalBanner'

function Personal() {
    return (
        <>
        <PersonalBanner/>
            <section id="faq" className="faq section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Personal Tasks</h2>
                    </div>
                    <div className="row  d-flex align-items-stretch">

                        <div className="col-lg-12 faq-item" data-aos="fade-up">

                            <p>
                                Our <strong style={{ color: "#58b958" }}>ConnectMyVA</strong> assistants make your work easier and help you with brainstorming activities.
                                So that you can spend time with your family instead spending time on researching things. We
                                assist you with below personal task at your planned budget.
                            </p>
                            <ul>
                                <li>Booking Cars/Hotels and other reservations</li>
                                <li>Looking For The Best Schools For Children</li>
                                <li>Arranging For Plumbers/Electricians</li>
                                <li>Dinner Table Booking</li>
                                <li>Event Planning</li>
                                <li>Set Up Dry Cleaning Service</li>
                                <li>Ordering Home Appliances</li>
                                <li>Arranging call with dietician and Dietary research</li>
                                <li>Making Household Payments</li>
                                <li>Getting Parking Permits</li>
                                <li>Booking For Birthday Party</li>
                                <li>Creating E-Cards For different occasions</li>
                                <li>Calendar management</li>
                            </ul>
                        </div>

                    </div>






                    <Hyperlinks2 />

                </div>
            </section>
        </>
    )
}

export default Personal
