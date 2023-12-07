import React, { useState } from 'react';
// import ContactBanner from './ContactBanner'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ReferBanner from './ReferBanner';

const Refer = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [hear_about_us, setHear_about_us] = useState("")
    const [category, setCategory] = useState(null)
    const [message, setMessage] = useState("")

    const history = useHistory()

    const addContactInfo = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('email', email)
        formField.append('phone', phone)
        formField.append('subject', subject)
        formField.append('hear_about_us', hear_about_us)
        formField.append('message', message)

        if (category !== null) {
            formField.append('category', category)
        }

        await axios({
            method: 'post',
            url: 'http://localhost:8000/api/',
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push('/')
        })
    }


    // const getContacts = async () => {
    //     const response = await axios.get('http://127.0.0.1:8000/api')
    //     console.log(response.data)
    // }

    // useEffect(() => {
    //     getContacts();
    // }, [])

    return (
        <>
            {/* <div>
            <h1>Show all contacts</h1>
        </div> */}
            <ReferBanner />
            <section id="contact" className="contact new-contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Fill &amp; Refer</h2>
                    </div>

                    <div className="row">



                        <div className="col-lg-1 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">

                        </div>

                        <div className="col-lg-10" data-aos="fade-up" data-aos-delay="200">
                            <form action="#" method="post" role="form" className="php-email-form">
                                <p className="send-est">For every referral you will be getting 10% off on their monthly billing</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head">Your Full Name:</h6>
                                            <input type="text" className="form-control" name="name" value={name} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head">Your Registered Email ID:</h6>
                                            <input type="email" className="form-control" name="email" value={email} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head"> Your ConnectMyVA Membership ID:</h6>
                                            <input type="text" className="form-control" name="phone" value={phone} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head"> Promo code:</h6>
                                            <input type="email" className="form-control" name="email" value={email} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head"> Your Friend's Full Name:</h6>
                                            <input type="email" className="form-control" name="email" value={email} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head"> Your Friend's Email ID:</h6>
                                            <input type="text" className="form-control" name="phone" value={phone} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head"> Contact Number:</h6>
                                            <input type="text" className="form-control" name="phone" value={phone} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    
                                    {/* <div className="col-lg-4">
                                        <div className="form-group">
                                            <h6 className="head"> Contact Number:</h6>
                                            <input type="text" className="form-control" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Contact no." data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div> */}
                                </div>

                                {/* <div className="form-group">
                                    <h6 className="head"> Specific Dead-line or time-line for this project </h6>
                                    <input type="text" className="form-control" name="subject" value={subject}  data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head"> Brief overview of your requirements alongwith overview of deliverables. </h6>
                                    <input type="text" className="form-control" name="hear_about_us" value={hear_about_us}  data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head"> Details about the goal of this project its target audience extended project scope budget etc.</h6>
                                    <input type="text" className="form-control" name="subject" value={subject}  data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div> */}
                                {/* <div className="form-group">
                                    <h6 className="head"> Message:</h6>
                                    <textarea className="form-control" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validate"></div>
                                </div> */}
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button onClick={addContactInfo} type="submit">Submit</button></div>
                            </form>
                        </div>
                        <div className="col-lg-1 contact-sec" data-aos="fade-up" data-aos-delay="200">

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Refer;