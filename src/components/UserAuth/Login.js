/* eslint-disable */
import React, { Component, useState } from 'react';

import { Spin } from 'antd';
import Icon from '@ant-design/icons';
import { connect } from 'react-redux';
import axios from 'axios';
import {Link, useHistory } from 'react-router-dom';
import {authLogin} from '../UserAuth/store/actions/auth';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Login extends Component {

    state ={
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const{email, password} = this.state;
        this.props.login(email, password);
      }
    



render(){

    const{email, password} = this.state;
    const { loading } =this.props;
    
    return (
        <>
        

            
            <section id="contact" className="contact new-contact">
                
                <div className="container">

                    <div className="section-title">
                        <h2>Login to <span style={{ color: "#58b958" }}>ConnectMyVA</span></h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-3 contact-sec" data-aos="fade-up" data-aos-delay="200">
                        </div>
                        

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        {/* {errorMessage} */}
            {
                this.props.loading ?

                <Spin indicator={antIcon} />

                :
                            <form action="#" method="post" onSubmit={this.handleSubmit} role="form" className="php-email-form">
                                
                                        <div className="form-group">
                                            <h6 className="head3"> Email:</h6>
                                            <input type="email" className="form-control " name="email" value={email} onChange={this.handleChange} placeholder="Enter Email Address" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    
                                    
                                        <div className="form-group">
                                            <h6 className="head3"> Password:</h6>
                                            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} placeholder="Enter Password" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    
                                        {/* <div className="form-group">
                                            <h6 className="head"> Contact Number:</h6>
                                            <input type="text" className="form-control" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Contact no." data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div> */}
                                    
                                
                                
                                
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                {/* <div className=" form-inp  form-check">

                                    <div className="custom-control custom-checkbox ">
                                        <input id="magicBtn5" type="checkbox" className="custom-control-input" />
                                        <label className="custom-control-label" for="magicBtn5">I agree that my submitted data is being collected and stored.</label>
                                    </div>
                                </div> */}
                                <div className="text-center"><button loading={loading} disabled={loading} type="submit">Login</button></div>
                                <div className="text-center my-3">
                                        {/* <input id="magicBtn5" type="checkbox" className="custom-control-input" /> */}
                                        <a href="" className="" for="magicBtn5">Forgot password?</a>
                                    </div>
                                    <div className="text-center log-link">
                                    <Link className="sig" to="/signup"> <div className="heya text-center">Sign Up</div></Link>
                                    </div>
                            </form>
}
                        </div>
                            
                        <div className="col-lg-3 contact-sec" data-aos="fade-up" data-aos-delay="200">

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
        login: (email, password) => dispatch(authLogin(email, password)) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);