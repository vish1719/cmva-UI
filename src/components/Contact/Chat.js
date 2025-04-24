import React, { useState } from 'react';
// import ContactBanner from './ContactBanner'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';
// import SuccessAlert from '../Alerts/SuccessAlert';
// import ErrorAlert from '../Alerts/ErrorAlert';
import { useEffect } from 'react';
import config from '../../config';
import Seo from "../Seo";
import {useForm} from 'react-hook-form';
const Chat= () => {
    useEffect(() => {        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])

    const { handleSubmit, control, register, formState: { errors, isDirty, isValid, isSubmitting } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            mode:null,
            message:'',
            },
        });
    const history = useHistory()

    const addChatInfo = async (data) => {
        let formField = new FormData()
        formField.append('name', data.name)
        formField.append('email', data.email)
        
        formField.append('message', data.message)
        const widgetCode = '6ee9d37906c7b20e8fb4da063dffef463ec27de171190bbe7dd94fd96bd6dd60';
        const thriveRefId = localStorage.getItem(widgetCode + '_thrive_ref_id');
        if(thriveRefId)
            formField.append('thriveRefId', thriveRefId)
        else
            formField.append('thriveRefId', '')
        if (data.mode !== null) {
            formField.append('mode', data.mode)
        }


        
        const formDataString = Array.from(formField.entries())
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
  
        console.log('FormData as String:', formDataString);
        await axios({
            method: 'post',
            url: `${config.apiUrl}/api/chat/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            toast.success('Message has beeen sent successfully!', { position: toast.POSITION.TOP_CENTER });
            //   window.location.reload(false);
            // this.setState({alert_message:"success"});
            //   history.push('/')
            window.location.replace("/");

        })
            .catch(error => {
                toast.error('There are items that require your attention!', { position: toast.POSITION.TOP_CENTER });
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
                path="/chat"
        />
            {/* <div>
            <h1>Show all contacts</h1>
        </div> */}
            {/* <ContactBanner /> */}
            <section id="contact" className="contact new-contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Schedule a Chat</h2>
                    </div>

                    <div className="row">



                        <div className="col-lg-1 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">

                        </div>

                        <div className="col-lg-10" data-aos="fade-up" data-aos-delay="200">
                            <form role="form" className="php-email-form">
                                <div className="form-group">
                                    <h6 className="head req"> Full Name :</h6>
                                    <input type="text" className="form-control" placeholder="Enter Full Name" {...register('name', { required: 'Name is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid Name'} })} />
                                    <div className="error-message-form">{errors.name && errors.name.message}</div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head req"> Email :</h6>
                                    <input type="email" className="form-control" placeholder="Enter Email" {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide the valid email address' } })} />
                                    <div className="error-message-form">{errors.email && errors.email.message}</div>
                                </div>
                                
                                <div className="form-group">
                                    <h6 className="head3 req"> Chat Mode :</h6>
                                    {/* <input type="text" className="form-control" name="subject" id="subject" placeholder="Select Category" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" /> */}


                                    <select id="disabledSelect" className="form-select form-control" placeholder="Select mode" {...register('mode', { required: 'This field is required' })}>
                                        <option selected></option>
                                        <option>Skype</option>
                                        <option>Hangout</option>
                                        <option>Whatsapp</option>
                                        
                                    </select>

                                </div>
                                <div className="form-group">
                                    <h6 className="head3 req"> Message :</h6>
                                    <textarea  rows="5"  className="form-control"{...register('message',{ required: 'Message is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid Message without special characters'} })} />
                                    <div className="error-message-form">{errors.message && errors.message.message}</div>
                                </div>
                                <div className="mb-3">
                                    {/* <div className="loading">Loading</div> */}
                                    {/* <div className="error-message"></div> */}
                                    {/* <div className="sent-message">Your message has been sent. Thank you!</div> */}
                                </div>
                                <div className="text-center"><button onClick={handleSubmit(addChatInfo)} type="submit">Send Message</button></div>

                                <hr />

                                {/* {this.state.alert_message=="success"?<SuccessAlert/>:null}
                                {this.state.alert_message=="error"?<ErrorAlert/>:null} */}

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

export default Chat;