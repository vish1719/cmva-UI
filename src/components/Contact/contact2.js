import React, {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import ContactBanner from './ContactBanner'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';
// import SuccessAlert from '../Alerts/SuccessAlert';
// import ErrorAlert from '../Alerts/ErrorAlert';
import { useEffect } from 'react';
import config from '../../config';
import {useForm} from 'react-hook-form';
const ShowContacts = () => {
    useEffect(() => {        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])


    const { handleSubmit, control, register, formState: { errors, isDirty, isValid, isSubmitting } } = useForm({
    defaultValues: {
        name: '',
        email: '',
        phone:'',
        subject:'',
        hear_about_us:'',
        category:null,
        message:'',
        },
    });   

    const history = useHistory()

    const addContactInfo = async (data) => {
        let formField = new FormData()
        formField.append('name',data.name)
        formField.append('email',data.email)
        formField.append('phone',data.phone)
        formField.append('subject',data.subject)
        formField.append('hear_about_us',data.hear_about_us)
        formField.append('message',data.message)
        const widgetCode = '6ee9d37906c7b20e8fb4da063dffef463ec27de171190bbe7dd94fd96bd6dd60';
        const thriveRefId = localStorage.getItem(widgetCode + '_thrive_ref_id');
        if(thriveRefId)
            formField.append('thriveRefId', thriveRefId)
        else
            formField.append('thriveRefId', '')
        if(data.category !== null) {
          formField.append('category', data.category)
        }

        const formDataString = Array.from(formField.entries())
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
  
        console.log('FormData as String:', formDataString);

        await axios({
          method: 'post',
          url:`${config.apiUrl}/api/contacts/`,
          
          data: formField
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
   

    // const getContacts = async () => {
    //     const response = await axios.get('http://127.0.0.1:8000/api')
    //     console.log(response.data)
    // }

    // useEffect(() => {
    //     getContacts();
    // }, [])

    return(
        <>
        <Helmet>
    <title>Contact ConnectMyVA | Call 1-866-610-8976 for Virtual Assistant Help</title>
    <meta
      name="description"
      content="Ready to simplify your life? Contact ConnectMyVA at 1-866-610-8976! Hire a virtual assistant for your business or personal needs. Reach out today for fast, reliable support and grow with us!"
    />
    <link rel="canonical" href="https://connectmyva.com/contact2" />
  </Helmet>
        {/* <div>
            <h1>Show all contacts</h1>
        </div> */}
         <ContactBanner />
         {/* {errors[1]} */}
        <section id="contact" className="contact new-contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact Us</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-6 d-flex align-items-stretch" >
                            <div className="info-box">

                                <h3>GOT QUESTIONS?</h3>
                                <Link to={"/chat"}>SCHEDULE A CHAT</Link>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex align-items-stretch">
                            <div className="info-box">

                                <h3>WE'RE HERE TO HELP</h3>
                                <Link to={"/quote"}>REQUEST A QUOTE</Link>
                            </div>
                        </div>

                        <div className="col-lg-8" >
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
                                    <h6 className="head req"> Phone :</h6>
                                    <input type="text" className="form-control" placeholder="Enter Phone Number" {...register('phone', { required: 'Phone number is required', pattern: { value: /^(\+\d{1,4}\s?)?(\d{1,4}[-\s]?){1,15}$/, message: 'Please provide the valid phone number with country code' } })} />
                                    <div className="error-message-form">{errors.phone && errors.phone.message}</div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head req"> Subject :</h6>
                                    <input type="text" className="form-control" placeholder="Enter Subject for email" {...register('subject', { required: 'Subject is required', pattern: { value: /^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid text without special characters' } })} />
                                    <div className="error-message-form">{errors.subject && errors.subject.message}</div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head req"> How did you hear about us :</h6>
                                    <input type="text"  className="form-control" placeholder="Google, Email"{...register('hear_about_us',{ required: 'Please provide the text', pattern:{value:/^[a-zA-Z0-9\s\.,\-_()]+$/, message: 'Please provide the valid text without special characters'} })} />
                                    <div className="error-message-form">{errors.hear_about_us && errors.hear_about_us.message}</div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head3 req "> Select Category :</h6>
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
                                <div className="text-center"><button onClick={handleSubmit(addContactInfo)} type="submit">Send Message</button></div>

                                <hr/>

                                {/* {this.state.alert_message=="success"?<SuccessAlert/>:null}
                                {this.state.alert_message=="error"?<ErrorAlert/>:null} */}

                            </form>
                        </div>
                        <div className="col-lg-4 contact-sec" data-aos="fade-up" data-aos-delay="200">
                            <div className="col-lg-12 contact-sec" data-aos="fade-up" data-aos-delay="200">

                                <form action="forms/contact.php" method="post" role="form" className="php-email-form2">
                                    <div className="social-links mt-3">
                                        <a href="https://twitter.com/connectmyva" className="twitter"><i className="bx bxl-twitter"></i></a>
                                        <a href="https://www.facebook.com/Connect-Myva-105505247698027" className="facebook"><i className="bx bxl-facebook"></i></a>
                                        {/* <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a> */}
                                        <a href="skype:46ba85c7f2126cd16?call" className="google-plus"><i className="bx bxl-skype"></i></a>
                                        <a href="https://www.linkedin.com/company/connectmyva/jobs/?viewAsMember=true" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                    </div>
                                    <div className="form-group">
                                        <h6 className="head2"> <a href="mailto:support@connectmyva.com">support@connectmyva.com</a></h6>


                                    </div>
                                    <div className="form-group">
                                        <h6 className="head2"> USA TOLL FREE NUMBER: 1 888-693-1297</h6>

                                    </div>
                                    <div className="form-group">
                                        <h6 className="head2"> ONE TIME PROJECT / FULL TIMER PERSONAL ASSISTANT / ANNUAL</h6>

                                    </div>
                                    <div className="form-group">
                                        <h6 className="head2"> PLANS – <span>Get in touch with our support team (<a href="mailto:support@connectmyva.com">support@connectmyva.com</a>) to receive a discounted custom plan today.</span></h6>

                                    </div>

                                </form>
                            </div>
                            <div className="col-lg-12 contact-sec my-3" data-aos="fade-up" data-aos-delay="200">
                                <form action="forms/contact.php" role="form" className="php-email-form2">

                                    <div className="form-group">
                                        <h6 className="head1"> HAVE ANY QUESTIONS?</h6>
                                        <h6 className="head2"> Feel free to call us. We are available 24/7 for your support.</h6>

                                    </div>


                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default ShowContacts;