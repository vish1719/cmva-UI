import React from 'react'
import { useEffect } from 'react';

function AboutSec1() {
    useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
    return (
        <>
            <section id="faq" className="faq section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>About ConnectMyVA</h2>
                    </div>

                    <div className="row  d-flex align-items-stretch">



                    <div className="col-lg-12 faq-item" data-aos="fade-up">
                            <h4> ConnectMyVA was brought into business with the thought of working with bustling
                                professionals and entrepreneurs and lending a hand to make their life much simpler.
                                Our vision lies in engaging with the top pioneers across a wide range of industries.
                                Serving clients in finding the right composure in turn resulting in more yield in a short time
                                by logical assistance with skilled and committed subordinates both professionally and personally
                                has been our main aim. For a Virtual Assistant to manage the everyday routine of an entrepreneur
                                or in need of an assistant for the corporate CEOs and executives, we are best suited for the job.
                                Apart from professional assistance, our services extend to providing one’s virtual assistants as
                                well.



                            </h4>

                        </div>

                        <div className="col-lg-12 faq-item" data-aos="fade-up" data-aos-delay="200">
                            <h4>ConnectMyVA came into the picture by four companions,
                                who were working with distinct clients and contrasting industrial sectors. The idea of implementation came into
                                light when these companions more or less best friends discussed the necessary things to take forward all the business-related
                                tasks under one platform. And that’s how ConnectMyVA became a reality.</h4>

                        </div>

                        <div className="col-lg-12 faq-item" data-aos="fade-up" data-aos-delay="300">
                            <h4>After being full of vim and vigor across social networking sites, we enlarged our links and alliances with a
                                variety of business people across the globe. Initially starting with a quartet, we are consistently emerging into a
                                larger network by serving our business clients with the best suited professional assistants with skill and mastery to
                                handle different types of tasks as per requirements. Whether it is a simple data input or knotty problematical task,
                                our VAs are here well-trained to handle it all.</h4>

                        </div>



                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutSec1
