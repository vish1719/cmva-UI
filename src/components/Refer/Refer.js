import React, { useState } from 'react';
// import ContactBanner from './ContactBanner'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ReferBanner from './ReferBanner';
import config from '../../config';
import {toast} from 'react-toastify';
import {useForm} from 'react-hook-form';
import { useEffect } from 'react';
import Seo from "../Seo";
//import ReactGA from 'react-ga4';

const Refer = () => {
    useEffect(() => {
       // ReactGA.send({ hitType: "refer", page: window.location.pathname + window.location.search, title: "Refer a friend" });
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])


    const { handleSubmit, control, register, formState: { errors, isDirty, isValid, isSubmitting } } = useForm({
        defaultValues: {
          name: '',
          email: '',
          fname:'',
          femail:'',
        },
      });
    /*const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [fname, setFName] = useState("")
    const [femail, setFEmail] = useState("")*/

    const history = useHistory()

    const addContactInfo =async(data) => {
       /* ReactGA.event({
            category: 'User',
            action: 'Clicked Refer Button',
            label: 'ReferPage',
         });*/
        let formField = new FormData()
        formField.append('name', data.name)
        formField.append('email', data.email)
        formField.append('friendname', data.fname)
        formField.append('freindemail', data.femail)   
        const widgetCode = '6ee9d37906c7b20e8fb4da063dffef463ec27de171190bbe7dd94fd96bd6dd60';
        const thriveRefId = localStorage.getItem(widgetCode + '_thrive_ref_id');
        if(thriveRefId)
            formField.append('thriveRefId', thriveRefId)
        else
            formField.append('thriveRefId', '')
        await axios({
            method: 'post',
            url: `${config.apiUrl}/api/refer/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            
            toast.success('You have referred successfully!', {position: toast.POSITION.TOP_CENTER});
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
  title="Refer a Friend | Get 10% Off | ConnectMyVA"
  description="Refer a friend to ConnectMyVA and get 10% off on their monthly billing. Fill the form and enjoy exclusive savings for both you and your friend."
  path="/refer"
  keywords="refer a friend, ConnectMyVA referral, virtual assistant referral, 10% off, referral program"
 />

            {/* <div>
            <h1>Show all contacts</h1>
        </div> */}
            <ReferBanner />
            <section id="contact" className="contact new-contact">
                <div className="container">

                    <div className="section-title">
                        <h1>Fill &amp; Refer</h1>
                    </div>

                    <div className="row">



                        <div className="col-lg-1 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">

                        </div>

                        <div className="col-lg-10" data-aos="fade-up" data-aos-delay="200">
                            <form method="post" role="form" className="php-email-form">
                                <p className="send-est">For every referral you will be getting 10% off on their monthly billing</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head">Your Full Name:</h6>
                                            <input type="text" className="form-control" placeholder="Enter Full Name" {...register('name', { required: 'Name is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid Name'} })} />
                                            <div className="error-message-form">{errors.name && errors.name.message}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head">Your Registered Email ID:</h6>
                                            <input type="email" className="form-control" placeholder="Enter Email" {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide the valid email address' } })} />
                                            <div className="error-message-form">{errors.email && errors.email.message}</div>
                                        </div>
                                    </div>
                                     <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head">Your Friend's Full Name:</h6>
                                            <input type="text" className="form-control" placeholder="Enter Friend's Full Name" {...register('fname', { required: 'Name is required', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid Name'} })} />
                                            <div className="error-message-form">{errors.fname && errors.fname.message}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head">Your Friend's Email ID:</h6>
                                            <input type="email" className="form-control" placeholder="Enter Friend's Email" {...register('femail', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide the valid email address' } })} />
                                            <div className="error-message-form">{errors.femail && errors.femail.message}</div>
                                        </div>
                                    </div>
                                    {/* 
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head"> Contact Number:</h6>
                                            <input type="text" className="form-control" name="phone" value={phone} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    */}
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
                                   
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                            
                                <div className="text-center"><button onClick={handleSubmit(addContactInfo)} type="submit" >Submit</button></div>
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

export default Refer;