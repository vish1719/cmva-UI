import React, { Component, useState } from 'react';

import { Spin } from 'antd';
import Icon from '@ant-design/icons';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { authSignup } from '../UserAuth/store/actions/auth';
import { withRouter } from 'react-router-dom';
import config from '../../config';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useForm} from 'react-hook-form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const Sign_up = () => {
    const location = useLocation(); // useLocation hook
    let formData = {'planname':''}

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
        const myState = location.state;
        
        if (formData.planname !== myState.planname && formData.planname === '') {
            setValue('planname', location.state?.planname || '');
        }
      }, [location, formData.planname]);

    const { handleSubmit, control, register, formState: { errors, isDirty, isValid, isSubmitting } , setValue, getValues } = useForm({
    defaultValues: {
        clientname: '',
        email: '',
        phone:'',
        address: '',
        addrstate:'',
        city: '',
        country: '',
        paypalemail:'',
        planname:location.state?.planname || '',
        },
    });
    
    
    
    const submitData = async (data) => {
        formData.clientname = data.clientname;
        formData.email = data.email;
        formData.phone = data.phone;
        formData.address = data.address;
        formData.addrstate = data.addrstate;
        formData.city = data.city;
        formData.country = data.country;
        formData.paypalemail = data.paypalemail;
        formData.planname = data.planname;
        await axios({
            method: 'post',
            url:`${config.apiUrl}/api/plansignup/`,            
            data: formData
            }).then(response=>{
            console.log(response.data);
            toast.success('Message has beeen sent successfully!', {position: toast.POSITION.TOP_CENTER});
            //   window.location.reload(false);
            // this.setState({alert_message:"success"});
            //   history.push('/')
            window.location.replace("/");
            
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
                <section id="contact" className="contact new-contact">

                    <div className="container">

                        <div className="section-title">
                            <h2>Signup to <span style={{ color: "#58b958" }}>ConnectMyVA</span></h2>
                        </div>

                        <div className="row">

                            <div className="col-lg-2 contact-sec" data-aos="fade-up" data-aos-delay="200">
                            </div>


                            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                                {/* {errorMessage} */}
                                {
                                    
                                        <form action="#" method="post" role="form" className="php-email-form" >

                                            {/* <div className="form-group">
                                            <h6 className="head"> Username:</h6>
                                            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Enter username" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div> */}
                                            <div className="row">
                                            <div className="col-lg-12">
                                                   
                                                        <h2 >Plan : <span style={{ color: "#58b958" }}>{getValues('planname')}</span></h2>
                                                        <br></br>
                                                </div>
                                            <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <h6 className="head">Name:</h6>
                                                        <input type="text" className="form-control" placeholder="Enter Full Name" {...register('clientname', { required: 'Name is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid Name'} })} />
                                                        <div className="error-message-form">{errors.clientname && errors.clientname.message}</div>
                                                    </div>
                                                </div>
                                              
                                                <div className="col-lg-8">
                                                    <div className="form-group">
                                                        <h6 className="head">Email:</h6>
                                                        <input type="email" className="form-control" placeholder="Enter Email" {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide the valid email address' } })} />
                                                        <div className="error-message-form">{errors.email && errors.email.message}</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <h6 className="head">Phone:</h6>
                                                        <input type="text" className="form-control" placeholder="Enter Phone" {...register('phone', { required: 'Phone number is required', pattern: { value: /^(\+\d{1,4}\s?)?(\d{1,4}[-\s]?){1,15}$/, message: 'Please provide the valid phone number with country code' } })} />
                                                        <div className="error-message-form">{errors.phone && errors.phone.message}</div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <h6 className="head">Address:</h6>
                                                        <input type="text" className="form-control" placeholder="Enter Address" {...register('address', { required: 'Address is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid address'} })} />
                                                        <div className="error-message-form">{errors.address && errors.address.message}</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <h6 className="head">City:</h6>
                                                        <input type="text" className="form-control" placeholder="Enter City Name" {...register('city', { required: 'City is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid city name'} })} />
                                                        <div className="error-message-form">{errors.city && errors.city.message}</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <h6 className="head">State:</h6>
                                                        <input type="text" className="form-control" placeholder="Enter State Name" {...register('addrstate', { required: 'State is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid state name'} })} />
                                                        <div className="error-message-form">{errors.addrstate && errors.addrstate.message}</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <h6 className="head">Country:</h6>
                                                        <input type="text" className="form-control" placeholder="Enter Country Name" {...register('country', { required: 'Country is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid country name'} })} />
                                                        <div className="error-message-form">{errors.country && errors.country.message}</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <h6 className="head">PayPal Email:</h6>
                                                        <input type="email" className="form-control" placeholder="Enter Paypal Email" {...register('paypalemail', { required: 'Paypal Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide the valid email address' } })} />
                                                        <div className="error-message-form">{errors.paypalemail && errors.paypalemail.message}</div>
                                                    </div>
                                                </div>                                              
                                            </div>

                                            {/* <div className="form-group">
                                            <h6 className="head"> Contact Number:</h6>
                                            <input type="text" className="form-control" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Contact no." data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div> */}




                                            {/* <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div> */}
                                            {/* <div className=" form-inp  form-check">

                                    <div className="custom-control custom-checkbox ">
                                        <input id="magicBtn5" type="checkbox" className="custom-control-input" />
                                        <label className="custom-control-label" for="magicBtn5">I agree that my submitted data is being collected and stored.</label>
                                    </div>
                                </div> */}
                                            <div className="text-center"><button onClick={handleSubmit(submitData)} type="submit">Signup</button></div>
                                            {/* <div className="text-center log-link">
                                    <Link className="sig" to="/signup"> <div className="heya text-center">Sign Up</div></Link>
                                    </div> */}
                                        </form>
                                }
                            </div>

                            <div className="col-lg-2 contact-sec" data-aos="fade-up" data-aos-delay="200">

                            </div>

                        </div>

                    </div>
                </section>
            </>
        )
}

// const WrappedNormalLoginForm = form.create()(Login);


export default withRouter(Sign_up);


