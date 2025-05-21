/* eslint-disable */
import React, { useState } from 'react';
// import ContactBanner from './ContactBanner'
import axios from 'axios';
import {Redirect, useHistory } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../config';
import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import Seo from "../Seo";
const Quote = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])

    const { handleSubmit, control, register, formState: { errors, isDirty, isValid, isSubmitting } } = useForm({
    defaultValues: {
        name: '',
        email: '',
        phone:'',
        company:'',
        location:'',
        response:null,
        deadline:'',
        requirements:'',
        goal:'',
        },
    });

    const history = useHistory()

    const addQuoteInfo = async (data) => {
        let formField = new FormData()
        formField.append('name', data.name)
        formField.append('email', data.email)
        formField.append('phone', data.phone)
        formField.append('company', data.company)
        formField.append('location', data.location)
        formField.append('response', data.response)
        formField.append('deadline', data.deadline)
        formField.append('requirements', data.requirements)
        formField.append('goal', data.goal)
        const widgetCode = '6ee9d37906c7b20e8fb4da063dffef463ec27de171190bbe7dd94fd96bd6dd60';
        const thriveRefId = localStorage.getItem(widgetCode + '_thrive_ref_id');
        if(thriveRefId)
            formField.append('thriveRefId', thriveRefId)
        else
            formField.append('thriveRefId', '')
        const formDataString = Array.from(formField.entries())
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
  
        console.log('FormData as String:', formDataString);

        await axios({
            method: 'post',
            url: `${config.apiUrl}/api/quote/`,
            data: formField,
            
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
        <Seo
                path="/quote"
        />
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
                            <form  method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                    <div className="form-group">
                                    <h6 className="head req"> Full Name:</h6>
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
                                            <h6 className="head req"> Your Company Name/Your Company Website :</h6>
                                            <input type="text" className="form-control" {...register('company', { required: 'Company Name is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid text without special charaters'} })} />
                                            <div className="error-message-form">{errors.company && errors.company.message}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> Your Location :</h6>
                                            <input type="text" className="form-control" {...register('location', { required: 'Location is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid text without special charaters'} })} />
                                            <div className="error-message-form">{errors.location && errors.location.message}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head req"> When is the Response for the RFQ Due ? </h6>
                                            <input type="text" className="form-control" {...register('response', { required: 'Response is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid text without special charaters'} })} />
                                            <div className="error-message-form">{errors.response && errors.response.message}</div>
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
                                    <input type="text" className="form-control" {...register('deadline', { required: 'Response is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid text without special charaters'} })} />
                                    <div className="error-message-form">{errors.deadline && errors.deadline.message}</div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head req"> Brief overview of your requirements alongwith overview of deliverables. </h6>
                                    <input type="text" className="form-control" {...register('requirements', { required: 'Requirements is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid text without special charaters'} })} />
                                    <div className="error-message-form">{errors.requirements && errors.requirements.message}</div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head req"> Details about the goal of this project its target audience extended project scope budget etc.</h6>
                                    <input type="text" className="form-control" {...register('goal', { required: 'Goal is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid text without special charaters'} })} />
                                    <div className="error-message-form">{errors.goal && errors.goal.message}</div>
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
                                <div className="text-center"><button onClick={handleSubmit(addQuoteInfo)} type="submit">Submit</button></div>
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