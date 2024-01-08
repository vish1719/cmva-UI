import React, {useState} from 'react';
import ContactBanner from './ContactBanner'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';
// import SuccessAlert from '../Alerts/SuccessAlert';
// import ErrorAlert from '../Alerts/ErrorAlert';
import config from '../../config';
const ShowContacts = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [hear_about_us, setHear_about_us] = useState("")
    const [category, setCategory] = useState(null)
    const [message, setMessage] = useState("")
    // const [errors, setErrors] = usestate("")

    // const [message,setMessage] = useState("")

    const history = useHistory()

    // state={
    //         alert_message : ''
    //     }
    

    const addContactInfo = async (event) => {
        event.preventDefault()
        let formField = new FormData()
        formField.append('name',name)
        formField.append('email',email)
        formField.append('phone',phone)
        formField.append('subject',subject)
        formField.append('hear_about_us',hear_about_us)
        formField.append('message',message)

        if(category !== null) {
          formField.append('category', category)
        }

        

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

                        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="info-box">

                                <h3>GOT QUESTIONS?</h3>
                                <Link to={"/chat"}>SCHEDULE A CHAT</Link>
                            </div>
                        </div>

                        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="info-box">

                                <h3>WE'RE HERE TO HELP</h3>
                                <Link to={"/quote"}>REQUEST A QUOTE</Link>
                            </div>
                        </div>

                        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="info-box">

                                <h3>WE WOULD LOVE TO TALK</h3>
                                <Link to={"callback"}>REQUEST A CALL BACK</Link>
                            </div>
                        </div>

                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                            <form role="form" className="php-email-form">
                                <div className="form-group">
                                    <h6 className="head req"> Full Name :</h6>
                                    <input type="text" className="form-control" name="name" value={name} onChange= {(e) => setName(e.target.value)} id="subject" placeholder="Enter Full Name" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head req"> Email :</h6>
                                    <input type="email" className="form-control" name="email" value={email} onChange= {(e) => setEmail(e.target.value)} id="subject" placeholder="Enter Email" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head req"> Phone :</h6>
                                    <input type="text" className="form-control" name="phone" value={phone} onChange= {(e) => setPhone(e.target.value)} id="subject" placeholder="Enter Phone no." data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head req"> Subject :</h6>
                                    <input type="text" className="form-control" name="subject" value={subject} onChange= {(e) => setSubject(e.target.value)} id="subject" placeholder="Enter Subject for email." data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head req"> How did you hear about us :</h6>
                                    <input type="text" className="form-control" name="hear_about_us" value={hear_about_us} onChange= {(e) => setHear_about_us(e.target.value)} id="subject" placeholder="Google, Email" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head3 req "> Select Category :</h6>
                                    {/* <input type="text" className="form-control" name="subject" id="subject" placeholder="Select Category" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" /> */}

                                    
                                    <select id="disabledSelect" className="form-select form-control" name="category" value={category} onChange= {(e) => setCategory(e.target.value)} placeholder="Select Category" required>
                                        <option selected></option>
                                        <option>Personal VA service</option>
                                        <option>Executive Secreterial Task</option>
                                        <option>Book Keeping</option>
                                        <option>Website Services</option>
                                        <option>Linkedin Services</option>
                                        <option>Digital Services</option>
                                        <option>Digital Services</option>
                                    </select>

                                </div>
                                <div className="form-group">
                                    <h6 className="head3 req"> Message :</h6>
                                    <textarea className="form-control"  name="message" value={message} onChange= {(e) => setMessage(e.target.value)} rows="5" data-rule="minlen:4" data-msg="Please write something for us" placeholder="Message" required></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className="mb-3">
                                    {/* <div className="loading">Loading</div> */}
                                    {/* <div className="error-message"></div> */}
                                    {/* <div className="sent-message">Your message has been sent. Thank you!</div> */}
                                </div>
                                <div className="text-center"><button onClick={addContactInfo} type="submit">Send Message</button></div>

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