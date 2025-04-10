import React from 'react'
import { Helmet } from 'react-helmet-async';
import BusinessTabs from './BusinessTabs'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Seo from "../Seo";
import BusinessBanner from './BusinessBanner';

function Business() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Seo
                title="Improve Business Efficiency with ConnectMyVA | Online Business Support"
                description="Boost your business with ConnectMyVA! We help improve business efficiency and provide expert online business support. Our dedicated assistants manage tasks, streamline processes, and save you time at an affordable cost."
                path="/business"
                keywords="Improve Business Efficiency, Online Business Support"
            />

            <Helmet>
                <title>Improve Business Efficiency with ConnectMyVA | Online Business Support</title>
                <meta
                    name="description"
                    content="Boost your business with ConnectMyVA! We help improve business efficiency and provide expert online business support. Our dedicated assistants manage tasks, streamline processes, and save you time at an affordable cost."
                />
                <meta
                    name="keywords"
                    content="Improve Business Efficiency, Online Business Support"
                />
                <link rel="canonical" href="https://connectmyva.com/business" />
                <meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Improve Business Efficiency with ConnectMyVA | Online Business Support" />
<meta property="og:description" content="Boost your business with ConnectMyVA! We help improve business efficiency and provide expert online business support. Our dedicated assistants manage tasks, streamline processes, and save you time at an affordable cost." />
<meta property="og:url" content="https://connectmyva.com/business" />
<meta property="og:site_name" content="ConnectMyVA" />
<meta property="og:image" content="https://connectmyva.com/assets/images/business.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Improve Business Efficiency with ConnectMyVA | Online Business Support" />
<meta name="twitter:description" content="Streamline business operations with ConnectMyVA’s online support. Virtual assistants help manage tasks, projects, and customer service efficiently." />
<meta name="twitter:image" content="https://connectmyva.com/assets/img/logo1.png" />
<meta name="twitter:url" content="https://connectmyva.com/business" />


            </Helmet>

            <BusinessBanner />

            {/* ✅ SEO optimized H1 */}
            <section className="section-title text-center py-4">
                <div className="container">
                    <h1>Improve Business Efficiency with Our Online Support</h1>
                </div>
            </section>

            <section id="contact" className="contact new-contact">
                <div className="container" style={{ paddingLeft: "0", paddingRight: "0" }}>

                    <div className="row">
                        <div className="col-md-8" data-aos="fade-up" data-aos-delay="100">
                            <BusinessTabs />
                        </div>

                        <div className="col-md-4 contact-sec" data-aos="fade-up" data-aos-delay="200">
                            <div className="col-lg-12 contact-sec" data-aos="fade-up" data-aos-delay="200">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form3">

                                    <div className="form-group">
                                        <h2 className="head3">Industries We Support</h2>
                                    </div>

                                    {[
                                        ["education-and-training", "Education & Training"],
                                        ["entertainment-and-event-management", "Entertainment & Event Management"],
                                        ["healthcare-and-fitness", "Healthcare & Fitness"],
                                        ["retail-and-ecommerce", "Retail & E-Commerce"],
                                        ["sales-and-marketing", "Sales & Marketing"],
                                        ["realEstate", "Real Estate"],
                                        ["staff", "Staffing & Recruitment"],
                                        ["travel", "Travel & Vacation Rentals"],
                                        ["customerServices", "Customer Service"]
                                    ].map(([path, name]) => (
                                        <div className="form-group" key={path}>
                                            <span className="head4"><Link to={`/${path}`}>{name}</Link></span>
                                        </div>
                                    ))}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Business;
