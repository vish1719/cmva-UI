import React, { useState } from 'react';
// import ContactBanner from './ContactBanner'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactSec() {
    const [for_what, setFor_what] = useState("")
    const [company, setCompany] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    

    const history = useHistory()

    const addQuoteInfo = async () => {
        let formField = new FormData()
        formField.append('for_what', for_what)
        formField.append('company', company)
        formField.append('first_name', first_name)
        formField.append('last_name', last_name)
        
        formField.append('email', email)
        
        
        
        

        // if (category !== null) {
        //     formField.append('category', category)
        // }

        await axios({
            method: 'post',
            url: `${config.apiUrl}/HomeContact/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            
            toast.success('Quote has beeen sent successfully!', {position: toast.POSITION.TOP_CENTER});
            history.push('/')
        })
        .catch(error=>{
            toast.error('There are items that require your attention!', {position: toast.POSITION.TOP_CENTER});
            // this.setState({alert_message:"error"});
            // setErrors(error.response.data.errors);
            console.log(error.data)
        })
    }


    return (
        <>
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact Us</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="info-box">
                                <i className="bx bx-map"></i>
                                <h3>Our Address</h3>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>

                        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="info-box">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us</h3>
                                <p>info@example.com<br />contact@example.com</p>
                            </div>
                        </div>

                        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="info-box ">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us</h3>
                                <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                            </div>
                        </div>

                        <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="form-row">
                                    <div className="col-lg-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validate"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
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

                    </div>

                </div>
            </section>
        </>
    )
}

export default ContactSec
