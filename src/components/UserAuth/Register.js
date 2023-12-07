import React, { useState } from 'react';
import RegisterBanner from './RegisterBanner';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure()

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [register_as, setRegister_as] = useState(null)
    const [gender, setGender] = useState(null)
    const [address, setAddress] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")

    const history = useHistory()

    const addRegisterInfo = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('email', email)
        formField.append('mobile', mobile)
        // formField.append('register_as', register_as)
        // formField.append('gender', gender)
        formField.append('address', address)
        formField.append('state', state)
        formField.append('city', city)

        
        
        

        if (register_as !== null) {
            formField.append('register_as', register_as)
        }

        if (gender !== null) {
            formField.append('gender', gender)
        }

        

        await axios({
            method: 'post',
            url: 'http://localhost:8000/register/',
            data: formField,
            
        }).then(response => {
            console.log(response.data);
            history.push('/');
            window.location.href="/signup";
            toast.success('Information is stored!', {position: toast.POSITION.TOP_CENTER})
        })
    }


   


    return (
        <>

            {/* <RegisterBanner /> */}
            <section id="contact" className="contact new-contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Register</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-1 contact-sec" data-aos="fade-up" data-aos-delay="200">
                        </div>

                        <div className="col-lg-10" data-aos="fade-up" data-aos-delay="200">
                            <form action="/signup" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <h6 className="head req"> Full Name :</h6>
                                            <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Full Name" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"  required />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <h6 className="head req"> Email :</h6>
                                            <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <h6 className="head req"> Contact Number :</h6>
                                            <input type="text" className="form-control" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Contact no." data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-lg-6 mb-1">
                                        <div className="form-group">
                                            <h6 className="head req"> Registering As :</h6>
                                            {/* <input type="text" className="form-control" name="subject" id="subject" placeholder="Select Category" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" /> */}


                                            <select id="disabledSelect" className="form-select form-control " name="register_as" value={register_as} onChange={(e) => setRegister_as(e.target.value)} placeholder="Select Category">
                                                <option selected>Select </option>
                                                <option>Personal</option>
                                                <option>Company</option>

                                            </select>

                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> Select Gender :</h6>
                                            {/* <input type="text" className="form-control" name="subject" id="subject" placeholder="Select Category" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" /> */}


                                            <select id="disabledSelect" className="form-select form-control" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Select ">
                                                <option selected></option>
                                                <option>Male</option>
                                                <option>Female</option>

                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <h6 className="head req"> Address :</h6>
                                            <input type="text" className="form-control" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <h6 className="head req"> State :</h6>
                                            <input type="text" className="form-control" name="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter State" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <h6 className="head req"> City :</h6>
                                            <input type="text" className="form-control" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="form-group">
                                    <h6 className="head"> Subject:</h6>
                                    <input type="text" className="form-control" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Enter Subject for email." data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head"> How did you hear about us:</h6>
                                    <input type="text" className="form-control" name="hear_about_us" value={hear_about_us} onChange={(e) => setHear_about_us(e.target.value)} placeholder="Google, Email" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head"> Select Category:</h6>
                                    


                                    <select id="disabledSelect" className="form-select form-control" name="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Select Category">
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
                                    <textarea className="form-control" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validate"></div>
                                </div> */}
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className=" form-inp  form-check">

                                    <div className="custom-control custom-checkbox ">
                                        <input id="magicBtn5" type="checkbox" className="custom-control-input" required/>
                                        <label className="custom-control-label" for="magicBtn5">I agree that my submitted data is being collected and stored.</label>
                                    </div>
                                </div>
                                <div className="text-start"><button onClick={addRegisterInfo} type="submit">Save &amp; Proceed</button></div>
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

export default Register;