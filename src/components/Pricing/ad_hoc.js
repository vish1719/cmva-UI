import React, { useState } from 'react';
// import ContactBanner from './ContactBanner'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import config from '../../config';
import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import Seo from "../Seo";
const Ad_hoc = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])

    const { handleSubmit, control, register, formState: { errors, isDirty, isValid, isSubmitting } } = useForm({
    defaultValues: {
        name: '',
        email: '',
        phone:'',
        hear_about_us:'',
        category:null,
        request:''
        },
    });

    const history = useHistory()

    const addHocInfo = async (data) => {
        let formField = new FormData()
        formField.append('name', data.name)
        formField.append('email', data.email)
        formField.append('phone', data.phone)
        
        formField.append('hear_about_us', data.hear_about_us)
        formField.append('request', data.request)
        const widgetCode = '6ee9d37906c7b20e8fb4da063dffef463ec27de171190bbe7dd94fd96bd6dd60';
        const thriveRefId = localStorage.getItem(widgetCode + '_thrive_ref_id');
        if(thriveRefId)
            formField.append('thriveRefId', thriveRefId)
        else
            formField.append('thriveRefId', '')
        if (data.category !== null) {
            formField.append('category', data.category)
        }

        await axios({
            method: 'post',
            url: `${config.apiUrl}/api/hoc/`,
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
        <Seo
            path="/ad_hoc"
        />
        
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
                            <form  method="post" role="form" className="php-email-form">
                                <p>Send your request and we will get back to you with an estimate.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> Full Name : </h6>
                                            <input type="text" className="form-control" placeholder="Enter Full Name" {...register('name', { required: 'Name is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid Name'} })} />
                                            <div className="error-message-form">{errors.name && errors.name.message}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> Email :</h6>
                                            <input type="email" className="form-control" placeholder="Enter Email" {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide the valid email address' } })} />
                                            <div className="error-message-form">{errors.email && errors.email.message}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> Phone :</h6>
                                            <input type="text" className="form-control" placeholder="Enter Phone" {...register('phone', { required: 'Phone number is required', pattern: { value: /^(\+\d{1,4}\s?)?(\d{1,4}[-\s]?){1,15}$/, message: 'Please provide the valid phone number with country code' } })} />
                                            <div className="error-message-form">{errors.phone && errors.phone.message}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> How did you hear about us : </h6>
                                            <input type="text" className="form-control" {...register('hear_about_us', { required: 'This is a required field', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid text'} })} />
                                            <div className="error-message-form">{errors.hear_about_us && errors.hear_about_us.message}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="form-group">
                                    <h6 className="head req"> Select Category :</h6>
                                    {/* <input type="text" className="form-control" name="subject" id="subject" placeholder="Select Category" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" /> */}

                                    
                                    <select id="disabledSelect" className="form-select form-control" placeholder="Select Category" {...register('category', { required: 'Please select the category' })}>
                                        <option selected></option>
                                        <option>Personal VA service</option>
                                        <option>Executive Secreterial Task</option>
                                        <option>Book Keeping</option>
                                        <option>Website Services</option>
                                        <option>Linkedin Services</option>
                                        <option>Digital Services</option>
                                        <option>Digital Services</option>
                                    </select>
                                    <div className="error-message-form">{errors.category && errors.category.message}</div>
                                </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="form-group">
                                    <h6 className="head req"> Request :</h6>
                                    <textarea  rows="5"  className="form-control"{...register('request',{ required: 'Request is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid Message without special characters'} })} />
                                    <div className="error-message-form">{errors.request && errors.request.message}</div>
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
                                <div className="text-center"><button onClick={handleSubmit(addHocInfo)} type="submit">Submit</button></div>
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