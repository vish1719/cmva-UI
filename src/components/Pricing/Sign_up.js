import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../config';

const Sign_up = () => {
    const location = useLocation(); // Get state passed via router
    let formData = { planname: '' };

    // SAFELY set plan name if available
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        if (location.state && location.state.planname) {
            setValue('planname', location.state.planname);
        }
    }, [location.state]);

    const {
        handleSubmit,
        register,
        setValue,
        getValues,
        formState: { errors }
    } = useForm({
        defaultValues: {
            clientname: '',
            email: '',
            phone: '',
            address: '',
            addrstate: '',
            city: '',
            country: '',
            paypalemail: '',
            planname: location.state?.planname || '',
            thriveRefId: ''
        },
    });

    const submitData = async (data) => {
        formData = {
            ...data,
            thriveRefId: localStorage.getItem('6ee9d37906c7b20e8fb4da063dffef463ec27de171190bbe7dd94fd96bd6dd60_thrive_ref_id') || ''
        };

        try {
            const response = await axios.post(`${config.apiUrl}/api/plansignup/`, formData);
            console.log(response.data);
            toast.success('Message has been sent successfully!', { position: toast.POSITION.TOP_CENTER });
            window.location.replace("/");
        } catch (error) {
            toast.error('There are items that require your attention!', { position: toast.POSITION.TOP_CENTER });
            console.error(error);
        }
    };

    return (
        <section id="contact" className="contact new-contact">
            <div className="container">
                <div className="section-title">
                    <h2>Signup to <span style={{ color: "#58b958" }}>ConnectMyVA</span></h2>
                </div>

                <div className="row">
                    <div className="col-lg-2 contact-sec" data-aos="fade-up" data-aos-delay="200"></div>

                    <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                        <form action="#" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2>Plan: <span style={{ color: "#58b958" }}>{getValues('planname')}</span></h2>
                                    <br />
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <h6 className="head">Name:</h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Full Name"
                                            {...register('clientname', {
                                                required: 'Name is required',
                                                pattern: {
                                                    value: /^[a-zA-Z0-9\s\.,\-_()]+$/,
                                                    message: 'Please provide the valid Name'
                                                }
                                            })}
                                        />
                                        <div className="error-message-form">{errors.clientname?.message}</div>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="form-group">
                                        <h6 className="head">Email:</h6>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter Email"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /\S+@\S+\.\S+/,
                                                    message: 'Please provide the valid email address'
                                                }
                                            })}
                                        />
                                        <div className="error-message-form">{errors.email?.message}</div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <h6 className="head">Phone:</h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Phone"
                                            {...register('phone', {
                                                required: 'Phone number is required',
                                                pattern: {
                                                    value: /^(\+\d{1,4}\s?)?(\d{1,4}[-\s]?){1,15}$/,
                                                    message: 'Please provide the valid phone number with country code'
                                                }
                                            })}
                                        />
                                        <div className="error-message-form">{errors.phone?.message}</div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <h6 className="head">Address:</h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Address"
                                            {...register('address', {
                                                required: 'Address is required',
                                                pattern: {
                                                    value: /^[a-zA-Z0-9\s\.,\-_()]+$/,
                                                    message: 'Please provide the valid address'
                                                }
                                            })}
                                        />
                                        <div className="error-message-form">{errors.address?.message}</div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <h6 className="head">City:</h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter City Name"
                                            {...register('city', {
                                                required: 'City is required',
                                                pattern: {
                                                    value: /^[a-zA-Z0-9\s\.,\-_()]+$/,
                                                    message: 'Please provide the valid city name'
                                                }
                                            })}
                                        />
                                        <div className="error-message-form">{errors.city?.message}</div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <h6 className="head">State:</h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter State Name"
                                            {...register('addrstate', {
                                                required: 'State is required',
                                                pattern: {
                                                    value: /^[a-zA-Z0-9\s\.,\-_()]+$/,
                                                    message: 'Please provide the valid state name'
                                                }
                                            })}
                                        />
                                        <div className="error-message-form">{errors.addrstate?.message}</div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <h6 className="head">Country:</h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Country Name"
                                            {...register('country', {
                                                required: 'Country is required',
                                                pattern: {
                                                    value: /^[a-zA-Z0-9\s\.,\-_()]+$/,
                                                    message: 'Please provide the valid country name'
                                                }
                                            })}
                                        />
                                        <div className="error-message-form">{errors.country?.message}</div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <h6 className="head">PayPal Email:</h6>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter Paypal Email"
                                            {...register('paypalemail', {
                                                required: 'Paypal Email is required',
                                                pattern: {
                                                    value: /\S+@\S+\.\S+/,
                                                    message: 'Please provide the valid email address'
                                                }
                                            })}
                                        />
                                        <div className="error-message-form">{errors.paypalemail?.message}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <button onClick={handleSubmit(submitData)} type="submit">Signup</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-2 contact-sec" data-aos="fade-up" data-aos-delay="200"></div>
                </div>
            </div>
        </section>
    );
};

export default Sign_up;
