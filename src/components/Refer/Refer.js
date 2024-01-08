import React, { useState } from 'react';
// import ContactBanner from './ContactBanner'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ReferBanner from './ReferBanner';
import config from '../../config';
import {toast} from 'react-toastify';

const Refer = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [fname, setFName] = useState("")
    const [femail, setFEmail] = useState("")

    const history = useHistory()

    const addContactInfo = async (event) => {
        event.preventDefault()
        let formField = new FormData()
        formField.append('name', name)
        formField.append('email', email)
        formField.append('friendname', fname)
        formField.append('freindemail', femail)

    

        await axios({
            method: 'post',
            url: `${config.apiUrl}/api/refer/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            
            toast.success('Quote has beeen sent successfully!', {position: toast.POSITION.TOP_CENTER});
            // <Redirect to="/" />
            history.push('/');
            // refresh();
            //window.location.replace("/");
        })
        .catch(error=>{
            toast.error('There are items that require your attention!', {position: toast.POSITION.TOP_CENTER});
            // this.setState({alert_message:"error"});
            // setErrors(error.response.data.errors);
            console.log(error.data)
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
                            <form method="post" role="form" className="php-email-form">
                                <p className="send-est">For every referral you will be getting 10% off on their monthly billing</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head">Your Full Name:</h6>
                                            <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head">Your Registered Email ID:</h6>
                                            <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    {/*<div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head"> Your ConnectMyVA Membership ID:</h6>
                                            <input type="text" className="form-control" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head"> Promo code:</h6>
                                            <input type="email" className="form-control" name="email" value={email} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                        </div> */}

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head"> Your Friend's Full Name:</h6>
                                            <input className="form-control" name="fname" value={fname} onChange={(e) => setFName(e.target.value)}data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head"> Your Friend's Email ID:</h6>
                                            <input type="text" className="form-control" name="femail" value={femail} onChange={(e) => setFEmail(e.target.value)}data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    {/* 
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head"> Contact Number:</h6>
                                            <input type="text" className="form-control" name="phone" value={phone} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    */}
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