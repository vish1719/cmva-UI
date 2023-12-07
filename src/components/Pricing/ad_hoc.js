import React, { useState } from 'react';
// import ContactBanner from './ContactBanner'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Ad_hoc = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [hear_about_us, setHear_about_us] = useState("")
    const [category, setCategory] = useState(null)
    const [request, setRequest] = useState("")

    const history = useHistory()

    const addHocInfo = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('email', email)
        formField.append('phone', phone)
        
        formField.append('hear_about_us', hear_about_us)
        formField.append('request', request)

        if (category !== null) {
            formField.append('category', category)
        }

        await axios({
            method: 'post',
            url: 'http://localhost:8000/hoc/',
            data: formField
        }).then(response => {
            console.log(response.data);
            toast.success('Request has beeen sent successfully!', {position: toast.POSITION.TOP_CENTER});
            // history.push('/')
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
                        <h2>Free Quote</h2>
                    </div>

                    <div className="row">



                        <div className="col-lg-1 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">

                        </div>

                        <div className="col-lg-10" data-aos="fade-up" data-aos-delay="200">
                            <form action="#" method="post" role="form" className="php-email-form">
                                <p>Send your request and we will get back to you with an estimate.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> Full Name : </h6>
                                            <input type="text" className="form-control" name="name" value={name}  onChange= {(e) => setName(e.target.value)}   data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> Email :</h6>
                                            <input type="email" className="form-control" name="email" value={email} onChange= {(e) => setEmail(e.target.value)}   data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> Phone :</h6>
                                            <input type="text" className="form-control" name="phone" value={phone} onChange= {(e) => setPhone(e.target.value)}   data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> How did you hear about us : </h6>
                                            <input type="text" className="form-control" name="hear_about_us" value={hear_about_us} onChange= {(e) => setHear_about_us(e.target.value)}   data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="form-group">
                                    <h6 className="head req"> Select Category :</h6>
                                    {/* <input type="text" className="form-control" name="subject" id="subject" placeholder="Select Category" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" /> */}

                                    
                                    <select id="disabledSelect" className="form-select form-control" name="category" value={category} onChange= {(e) => setCategory(e.target.value)} placeholder="Select Category" required>
                                        <option selected></option>
                                        <option>Personal VA service</option>
                                        <option>Executive Secreterial Task</option>
                                        <option>Book Keeping</option>
                                        <option>Website Services</option>
                                        <option>Linkedin Services</option>
                                        <option>Digital Services</option>
                                        <option>Digital Services</option>
                                    </select>

                                </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="form-group">
                                    <h6 className="head req"> Request :</h6>
                                    <textarea className="form-control"  name="request" value={request} onChange= {(e) => setRequest(e.target.value)} rows="5"  data-msg="Please write something for us" placeholder="" required></textarea>
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
                                <div className="text-center"><button onClick={addHocInfo} type="submit">Submit</button></div>
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

export default Ad_hoc;