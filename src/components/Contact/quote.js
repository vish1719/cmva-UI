import React, { useState } from 'react';
// import ContactBanner from './ContactBanner'
import axios from 'axios';
import {Redirect, useHistory } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quote = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [company, setCompany] = useState("")
    const [location, setLocation] = useState("")
    const [response, setResponse] = useState("")
    // const [category, setCategory] = useState(null)
    const [deadline, setDeadline] = useState("")
    const [requirements, setRequirements] = useState("")
    const [goal, setGoal] = useState("")

    const history = useHistory()

    const addQuoteInfo = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('email', email)
        formField.append('phone', phone)
        formField.append('company', company)
        formField.append('location', location)
        formField.append('response', response)
        formField.append('deadline', deadline)
        formField.append('requirements', requirements)
        formField.append('goal', goal)
        

        // if (category !== null) {
        //     formField.append('category', category)
        // }

        await axios({
            method: 'post',
            url: 'http://localhost:8000/quote/',
            data: formField
        }).then(response => {
            console.log(response.data);
            
            toast.success('Quote has beeen sent successfully!', {position: toast.POSITION.TOP_CENTER});
            // <Redirect to="/" />
            // history.push('/');
            // refresh();
            window.location.replace("/");
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
            {/* <ContactBanner /> */}
            <section id="contact" className="contact new-contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Request a quote</h2>
                    </div>

                    <div className="row">



                        <div className="col-lg-1 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">

                        </div>

                        <div className="col-lg-10" data-aos="fade-up" data-aos-delay="200">
                            <form action="" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                    <div className="form-group">
                                    <h6 className="head req"> Full Name :</h6>
                                    <input type="text" className="form-control" name="name" value={name} onChange= {(e) => setName(e.target.value)} id="name" placeholder="Enter Full Name" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                    <div className="validate"></div>
                                </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> Email :</h6>
                                            <input type="email" className="form-control" name="email" value={email} onChange= {(e) => setEmail(e.target.value)} id="email" placeholder="Enter Email" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> Phone :</h6>
                                            <input type="text" className="form-control" name="phone" value={phone} onChange= {(e) => setPhone(e.target.value)} id="phone" placeholder="Enter Phone Number" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> Your Company Name/Your Company Website :</h6>
                                            <input type="text" className="form-control" name="company" value={company} onChange= {(e) => setCompany(e.target.value)} id="company" placeholder=""  data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> Your Location :</h6>
                                            <input type="text" className="form-control" name="location" value={location} onChange= {(e) => setLocation(e.target.value)} id="location" placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> When is the Response for the RFQ Due ? </h6>
                                            <input type="text" className="form-control" name="response" value={response} onChange= {(e) => setResponse(e.target.value)} id="response" placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
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

                                <div className="form-group">
                                    <h6 className="head req"> Specific Dead-line or time-line for this project </h6>
                                    <input type="text" className="form-control" name="deadline" value={deadline} onChange= {(e) => setDeadline(e.target.value)} id="deadline" placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head req"> Brief overview of your requirements alongwith overview of deliverables. </h6>
                                    <input type="text" className="form-control" name="requirements" value={requirements} onChange= {(e) => setRequirements(e.target.value)} id="requirements" placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head req"> Details about the goal of this project its target audience extended project scope budget etc.</h6>
                                    <input type="text" className="form-control" name="goal" value={goal} onChange= {(e) => setGoal(e.target.value)} id="goal" placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                    <div className="validate"></div>
                                </div>
                                {/* <div className="form-group">
                                    <h6 className="head"> Message:</h6>
                                    <textarea className="form-control" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validate"></div>
                                </div> */}
                                {/* <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div> */}
                                <div className="text-center"><button onClick={addQuoteInfo} type="submit">Submit</button></div>
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

export default Quote;