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
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Sign_up extends Component {
    formData = "";
    constructor(props) {
        super(props);
    
        this.state = {
          formData: {
            // Initialize your form fields here
            clientname: "",
            email: "",
            phone: "",
            
            address: "",
            addrstate:"",
            city: "",
            country: "",
            paypalemail:"",
            planname:"",
          },
        };
      }
    
    handleChange = (event) => {
        console.log(this.formData);
        const { name, value } = event.target;
        this.setState(prevState => ({
          formData: {
            ...prevState.formData,
            [name]: value,
          },
        }));
      };

      updatePlanName = (planName) => {
        this.setState(prevState => ({
          formData: {
            ...prevState.formData, // spread the existing properties
            planname: planName, // update the specific property
          },
        }));
      };

      handleSubmit = async (event) => {
        event.preventDefault();
    
        await axios({
            method: 'post',
            url:`${config.apiUrl}/api/plansignup/`,            
            data: this.state.formData
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
      };
   /* handleSubmit = (e) => {
        e.preventDefault();

        const {clientname, email, phone, address, addrstate, city, country,paypalemailid } = this.state;
        this.props.signup(clientname, email, phone, address, addrstate, city, country,paypalemailid);
    }*/

    //   componentDidMount() {
    //     console.log("Hello");
    //   }



    render() {
        const { location } = this.props;
        const myState = location.state;
        if (this.state.formData.planname !== JSON.stringify(myState.planname) && (this.state.formData.planname === '')) {
            this.updatePlanName(myState.planname);
          }
        
        const {clientname, email, phone, address,addrstate, city, country, paypalemail, planname} = this.state.formData;
        const { loading } = this.props;

        console.log('###############' + this.planname);

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
                                            <div className="col-lg-12">
                                                   
                                                        <h2 >Plan : <span style={{ color: "#58b958" }}>{planname}</span></h2>
                                                        <br></br>
                                                </div>
                                            <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <h6 className="head">Name:</h6>
                                                        <input type="text" className="form-control" name="clientname" value={clientname} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                              
                                                <div className="col-lg-8">
                                                    <div className="form-group">
                                                        <h6 className="head">Email:</h6>
                                                        <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
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
                                                        <h6 className="head">State:</h6>
                                                        <input type="text" className="form-control" name="addrstate" value={addrstate} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
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
                                                        <h6 className="head">PayPal Email:</h6>
                                                        <input type="email" className="form-control" name="paypalemail" value={paypalemail} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
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


export default withRouter(Sign_up);


