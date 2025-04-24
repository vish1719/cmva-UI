import React from 'react'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2'
import TravelBanner from './TravelBanner'
import { useEffect } from 'react'
import Seo from "../Seo";
function Travel() {
    useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
    return (
        <>
        <Seo
  title="Virtual Assistant for Travel & Hospitality | ConnectMyVA"
  description="ConnectMyVA provides virtual assistant services for travel planning, bookings, itinerary management, vendor coordination, and hospitality support. Focus on the trip — we handle the rest."
  path="/travel-vacation-rentals-service"
  keywords="travel virtual assistant, itinerary assistant, hospitality VA, travel planning VA, travel bookings, virtual concierge"
  />

        <TravelBanner/>
            <section id="faq" className="faq section-bg">
                <div className="container">
                    <div className="row  d-flex align-items-stretch">

                        <div className="col-lg-12 faq-item" data-aos="fade-up">
                            
                            <p>
                            Can’t find time for making travel arrangements for your vacations or an untimely business meeting overseas? Well, 
                            ConnectMyVA professional virtual assistants are ready to serve you with all the necessary stuff from travel planning 
                            to making arrangements for your stay &amp; commutation. Below is the list of services
                            </p>
                            <p><strong style={{ color: "#58b958" }}>ConnectMyVA</strong> offers</p>
<ul>
                          <li>Planning Travel on a budget (Shortlisting Destinations, Travel Options, Itinerary)</li>
                          <li>Making Reservations (Booking Flights/Cruise/Trains, Hotel Reservations, Car Rentals, Rescheduling)</li>
                             <li>Organizing Leads (Generate Leads, Maintain Database, Answer Queries &amp; related issues)</li>
                            <li> Website Management (Creation, Hosting, Updating latest info with photos)</li>
                            <li> Marketing (Campaigns, Commercial Ads, Newsletters, Emails)</li>
                             <li>Feedbacks (Monitoring, Reviews &amp; Advising)</li>
                              <li> Schedule Management (Update Availability Calendar, Inventory in Hotel)</li>
                            <li>Vendors Assembling (Housekeeping, Cooking Staff, Plumbing &amp; Maintenance Contracts)</li>
                            <li> Oversee Sales (Performance Of Sales, Records &amp; Reports)</li>
                            <li> Accounts Management (Invoicing, Tax Payments, Refunds)</li>
                             <li>Content Research (Locations, Best Places &amp; Time to Visit, Activity to do)</li>
                              <li> Booking Vacation Homes/ Apartments</li>
                            <li>Travel Itinerary Management</li>
                            <li> Meetings Scheduling &amp; Planning at preferred locations</li>
                            </ul>
                        </div>

                    </div>





                    
                    <Hyperlinks2 />

                </div>
            </section>
        </>
    )
}

export default Travel
