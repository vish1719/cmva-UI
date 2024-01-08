import React, { useState } from 'react';
// import ContactBanner from './ContactBanner'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../config';

function ContactForm() {
    const [for_what, setFor_what] = useState(null)
    const [company, setCompany] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    
    

    const history = useHistory()

    const addHomeContactInfo = async () => {
        let formField = new FormData()
        // formField.append('for_what', for_what)
        formField.append('company', company)
        formField.append('first_name', first_name)
        formField.append('last_name', last_name)
        
        formField.append('email', email)
        
        if(for_what !== null) {
            formField.append('for_what', for_what)
          }
        
        
        

        // if (category !== null) {
        //     formField.append('category', category)
        // }

        await axios({
            method: 'post',
            url: `${config.apiUrl}/api/homecontact/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            
            toast.success('Information has beeen sent successfully!', {position: toast.POSITION.TOP_CENTER});
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

            <div id="form" className="form">
                <div className="container">
                    <div className="row text-start">
                        <div className="col-lg-6 ro" data-aos="fade-up" >
                            <div className="section-title1">
                                <h5>Contact</h5>
                            </div>

                            <div className="section-title1 form-inp">
                                <h1><span>Tell us what you need so you </span>can meet your virtual assistant.
                                </h1>

                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6  form-inp" >
                                    <h6 className="head req"> For what ? </h6>
                                    <select type="text" className="form-control form-select" name="for_what" id="for_what" value={for_what} onChange={(e) => setFor_what(e.target.value)}  placeholder="Select for what?" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required>
                                        <div className="validate"></div>
                                       
                                        <option selected></option>
                                        <option>For my businees</option>
                                        <option>For personal</option>

                                    </select>
                                </div>
                                <div className="col-lg-6 col-md-6  form-inp" >
                                    <h6 className="head req"> Company :</h6>
                                    <input type="text" className="form-control"  name="company" value={company} onChange={(e) => setCompany(e.target.value)} id="company" placeholder="Company" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-lg-6 col-md-6 form-inp" >
                                    <h6 className="head req"> First Name :</h6>
                                    <input type="text" className="form-control" name="first_name" id="first_name" placeholder="Enter First Name" value={first_name} onChange={(e) => setFirst_name(e.target.value)} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-lg-6 col-md-6 form-inp" >
                                    <h6 className="head req"> Last Name :</h6>
                                    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Enter Last Name" value={last_name} onChange={(e) => setLast_name(e.target.value)} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                    <div className="validate"></div>
                                </div>



                                <div className="col-lg-12 col-md-12 form-inp" >
                                    <h6 className="head req"> Email :</h6>
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                    <div className="validate"></div>
                                </div>

                                {/* <div className="col-lg-12 col-md-12 form-inp frm-btn form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                    I agree that my submitted data is being collected and stored.
                                    </label>

                                    
                                </div> */}
                                <div className="col-lg-12 col-md-12 form-inp  form-check">

                                    <div className="custom-control custom-checkbox ">
                                        <input id="magicBtn5" type="checkbox" className="custom-control-input" required/>
                                        <label className="custom-control-label" for="magicBtn5">I agree that my submitted data is being collected and stored.</label>
                                    </div>
                                </div>

                                <div className="services frm-btn form-inp">
                                    <a href="#about"  className="  scrollto"><button className="common-btn" onClick={addHomeContactInfo} type="submit">Submit</button></a>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 " data-aos="fade-up" data-aos-delay="100">
                            <img width="90%" height="auto" src="assets/images/Girl.png" className="img-flui " alt="" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default ContactForm
