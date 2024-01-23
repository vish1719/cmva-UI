import React from 'react'
import ContactBanner from './ContactBanner'
import { useEffect } from 'react';
function Contact5() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])

    // state={
    //     item: [],
    //     text: ""
    // }

    // showPlan = () =>{
    //     axios.get('http://127.0.0.1:8000/admin/contacts')
    //     .then((res)=>{
    //         console.log(res.data)
    //     })
    // }

    // componentDidMount(){
    //     this.showPlan()
    // }

    return (
        <>
            <ContactBanner />
            
            <section id="contact" className="contact new-contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact Us</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="info-box">

                                <h3>GOT QUESTIONS?</h3>
                                <a href="#">SCHEDULE A CHAT</a>
                            </div>
                        </div>

                        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="info-box">

                                <h3>WE'RE HERE TO HELP</h3>
                                <a href="#">REQUEST A QUOTE</a>
                            </div>
                        </div>

                        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="info-box">

                                <h3>WE WOULD LOVE TO TALK</h3>
                                <a href="#">REQUEST A CALL BACK</a>
                            </div>
                        </div>

                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="form-group">
                                    <h6 className="head"> Full Name:</h6>
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Enter Full Name" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head"> Email:</h6>
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Enter Email" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head"> Phone:</h6>
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Enter Phone no." data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head"> How did you hear about us:</h6>
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Google, Email" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head"> Select Category:</h6>
                                    {/* <input type="text" className="form-control" name="subject" id="subject" placeholder="Select Category" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" /> */}

                                    
                                    <select id="disabledSelect" class="form-select form-control" placeholder="Select Category">
                                        <option selected>Select Category</option>
                                        <option>Personal VA service</option>
                                        <option>Executive Secreterial Task</option>
                                        <option>Book Keeping</option>
                                        <option>Website Services</option>
                                        <option>Linkedin Services</option>
                                        <option>Digital Services</option>
                                        <option>Digital Services</option>
                                    </select>

                                </div>
                                <div className="form-group">
                                    <h6 className="head"> Message:</h6>
                                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                        <div className="col-lg-4 contact-sec" data-aos="fade-up" data-aos-delay="200">
                            <div className="col-lg-12 contact-sec" data-aos="fade-up" data-aos-delay="200">

                                <form action="forms/contact.php" method="post" role="form" className="php-email-form2">
                                    <div className="social-links mt-3">
                                        <a href="https://twitter.com/connectmyva" className="twitter"><i className="bx bxl-twitter"></i></a>
                                        <a href="https://www.facebook.com/Connect-Myva-105505247698027" className="facebook"><i className="bx bxl-facebook"></i></a>
                                        {/* <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a> */}
                                        <a href="skype:46ba85c7f2126cd16?call" className="google-plus"><i className="bx bxl-skype"></i></a>
                                        <a href="https://www.linkedin.com/company/connectmyva/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                    </div>
                                    <div className="form-group">
                                        <h6 className="head2"> <a href="mailto:support@connectmyva.com">support@connectmyva.com</a></h6>


                                    </div>
                                    <div className="form-group">
                                        <h6 className="head2"> USA TOLL FREE NUMBER: 1 888-693-1297</h6>

                                    </div>
                                    <div className="form-group">
                                        <h6 className="head2"> ONE TIME PROJECT / FULL TIMER PERSONAL ASSISTANT / ANNUAL</h6>

                                    </div>
                                    <div className="form-group">
                                        <h6 className="head2"> PLANS – <span>Get in touch with our support team (<a href="mailto:support@connectmyva.com">support@connectmyva.com</a>) to receive a discounted custom plan today.</span></h6>

                                    </div>

                                </form>
                            </div>
                            <div className="col-lg-12 contact-sec my-3" data-aos="fade-up" data-aos-delay="200">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form2">

                                    <div className="form-group">
                                        <h6 className="head1"> HAVE ANY QUESTIONS?</h6>
                                        <h6 className="head2"> Feel free to call us. We are available 24/7 for your support.</h6>

                                    </div>


                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact5
