import React, { Component, useState } from 'react';

import { Spin } from 'antd';
import Icon from '@ant-design/icons';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { authSignup } from '../UserAuth/store/actions/auth';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Sign_up extends Component {

    // useEffect(()=>{
    //     if(localStorage.getItem('token'))
    //     {
    //         history.push('/register')
    //     }
    // }, [])
    state = {
        // username: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        phone: "",
        
        address: "",
        city: "",
        country: "",
        password1: "",
        password2: "",


    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {first_name, middle_name, last_name, email, phone, address, city, country, password1, password2 } = this.state;
        this.props.signup(first_name, middle_name, last_name, email, phone, address, city, country, password1, password2);
    }

    //   componentDidMount() {
    //     console.log("Hello");
    //   }



    render() {

        const {first_name, middle_name, last_name, email, phone, address, city, country, password1, password2} = this.state;
        const { loading } = this.props;



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
                                    this.props.loading ?

                                        <Spin indicator={antIcon} />

                                        :
                                        <form action="#" method="post" onSubmit={this.handleSubmit} role="form" className="php-email-form" >

                                            {/* <div className="form-group">
                                            <h6 className="head"> Username:</h6>
                                            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Enter username" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div> */}
                                            <div className="row">

                                            <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <h6 className="head">First Name:</h6>
                                                        <input type="text" className="form-control" name="first_name" value={first_name} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <h6 className="head">Middle Name:</h6>
                                                        <input type="text" className="form-control" name="middle_name" value={middle_name} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <h6 className="head">Last Name:</h6>
                                                        <input type="text" className="form-control" name="last_name" value={last_name} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <h6 className="head">Email:</h6>
                                                        <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <h6 className="head">Phone:</h6>
                                                        <input type="text" className="form-control" name="phone" value={phone} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <h6 className="head">Address:</h6>
                                                        <input type="text" className="form-control" name="address" value={address} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <h6 className="head">City:</h6>
                                                        <input type="text" className="form-control" name="city" value={city} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <h6 className="head">Country:</h6>
                                                        <input type="text" className="form-control" name="country" value={country} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <h6 className="head">Password:</h6>
                                                        <input type="password" className="form-control" name="password1" value={password1} onChange={this.handleChange} placeholder="Enter Password" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <h6 className="head">Confirm Password:</h6>
                                                        <input type="password" className="form-control" name="password2" value={password2} onChange={this.handleChange} placeholder="Confirm Password" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                        <div className="validate"></div>
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
                                            <div className="text-center"><button loading={loading} disabled={loading} type="submit">Signup</button></div>
                                            <div className="text-center my-3">
                                                {/* <input id="magicBtn5" type="checkbox" className="custom-control-input" /> */}
                                                Already have an account? <Link to="/login" className="" for="magicBtn5">Log in</Link>
                                            </div>
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
}


// const WrappedNormalLoginForm = form.create()(Login);

const mapStateToProps = (state) => {
    return {
        authenticated: state.token !== null,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: (first_name, middle_name, last_name, email, phone, address, city, country, password1, password2) => dispatch(authSignup(first_name, middle_name, last_name, email, phone, address, city, country, password1, password2))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sign_up);


