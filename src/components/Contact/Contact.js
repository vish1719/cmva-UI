/* eslint-disable */
import React, { useEffect, useState } from 'react';
import ContactBanner from './ContactBanner';
import Seo from "../Seo";
import api from '../../api'; // Axios instance
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Contact5() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        hear_about_us: '',
        category: '',
        message: '',
        subject: '',
        thriveRefId: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loadingToast = toast.loading("Sending...");

        try {
            await api.post('/api/contacts/', formData);

            toast.update(loadingToast, {
                render: " Message submitted successfully!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true
            });

            setFormData({
                name: '',
                email: '',
                phone: '',
                hear_about_us: '',
                category: '',
                message: '',
                subject: '',
                thriveRefId: ''
            });
        } catch (error) {
            console.error(error);
            toast.update(loadingToast, {
                render: "❌ Failed to submit the message.",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true
            });
        }
    };

    return (
        <>
            <Seo path="/contact-us" />
            <ContactBanner />
            <ToastContainer position="top-right" />

            <section id="contact" className="contact new-contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact Us</h2>
                    </div>

                    <div className="row">

                        {/* Info Boxes */}
                       <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up">
  <div className="info-box">
    <h3>GOT QUESTIONS?</h3>
    <Link to="/chat" className="btn btn-primary">SCHEDULE A CHAT</Link>
  </div>
</div>

                        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="info-box">
                                <h3>WE'RE HERE TO HELP</h3>
                                 <Link to="/quote" className="btn btn-primary">REQUEST A QUOTE</Link>
                            </div>
                        </div>

                        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="info-box">
                                <h3>WE WOULD LOVE TO TALK</h3>
                                 <Link to="/callback" className="btn btn-primary">REQUEST A CALL BACK</Link>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                            <form onSubmit={handleSubmit} className="php-email-form">
                                <div className="form-group">
                                    <h6 className="head">Full Name:</h6>
                                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Full Name" required />
                                </div>
                                <div className="form-group">
                                    <h6 className="head">Email:</h6>
                                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" required />
                                </div>
                                <div className="form-group">
                                    <h6 className="head">Phone:</h6>
                                    <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Phone No." required />
                                </div>
                                <div className="form-group">
                                    <h6 className="head">How did you hear about us:</h6>
                                    <input type="text" className="form-control" name="hear_about_us" value={formData.hear_about_us} onChange={handleChange} placeholder="Google, Email, etc." />
                                </div>
                                <div className="form-group">
                                    <h6 className="head">Select Category:</h6>
                                    <select className="form-select form-control" name="category" value={formData.category} onChange={handleChange}>
                                        <option value="">Select Category</option>
                                        <option>Personal VA service</option>
                                        <option>Executive Secreterial Task</option>
                                        <option>Book Keeping</option>
                                        <option>Website Services</option>
                                        <option>Linkedin Services</option>
                                        <option>Digital Services</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <h6 className="head">Message:</h6>
                                    <textarea className="form-control" name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="col-lg-4 contact-sec" data-aos="fade-up" data-aos-delay="200">
                            <div className="col-lg-12 contact-sec" data-aos="fade-up" data-aos-delay="200">
                                <form className="php-email-form2">
                                    <div className="social-links mt-3">
                                        <a href="https://twitter.com/connectmyva" className="twitter"><i className="bx bxl-twitter"></i></a>
                                        <a href="https://www.facebook.com/Connect-Myva-105505247698027" className="facebook"><i className="bx bxl-facebook"></i></a>
                                        <a href="skype:46ba85c7f2126cd16?call" className="google-plus"><i className="bx bxl-skype"></i></a>
                                        <a href="https://www.linkedin.com/company/connectmyva/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                    </div>
                                    <div className="form-group">
                                        <h6 className="head2"><a href="mailto:support@connectmyva.com">support@connectmyva.com</a></h6>
                                    </div>
                                    <div className="form-group">
                                        <h6 className="head2">USA TOLL FREE NUMBER: 1 888-693-1297</h6>
                                    </div>
                                    <div className="form-group">
                                        <h6 className="head2">ONE TIME PROJECT / FULL TIMER PERSONAL ASSISTANT / ANNUAL</h6>
                                    </div>
                                    <div className="form-group">
                                        <h6 className="head2">
                                            PLANS – <span>Get in touch with our support team (<a href="mailto:support@connectmyva.com">support@connectmyva.com</a>) to receive a discounted custom plan today.</span>
                                        </h6>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-12 contact-sec my-3" data-aos="fade-up" data-aos-delay="200">
                                <form className="php-email-form2">
                                    <div className="form-group">
                                        <h6 className="head1">HAVE ANY QUESTIONS?</h6>
                                        <h6 className="head2">Feel free to call us. We are available 24/7 for your support.</h6>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact5;
