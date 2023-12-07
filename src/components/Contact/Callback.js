import React, { useState } from 'react';
// import ContactBanner from './ContactBanner'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import SuccessAlert from '../Alerts/SuccessAlert';
// import ErrorAlert from '../Alerts/ErrorAlert';

const Callback= () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    
    const [phone,setPhone] = useState("")
    const [message, setMessage] = useState("")
    // const [errors, setErrors] = usestate("")

    

    const history = useHistory()

    // state={
    //         alert_message : ''
    //     }


    const addCallbackInfo = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('email', email)
        formField.append('phone', phone)
        formField.append('message', message)

        



        await axios({
            method: 'post',
            url: 'http://localhost:8000/callback/',

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
            {/* <div>
            <h1>Show all contacts</h1>
        </div> */}
            {/* <ContactBanner /> */}
            <section id="contact" className="contact new-contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Request a Call back</h2>
                    </div>

                    <div className="row">



                        <div className="col-lg-1 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">

                        </div>

                        <div className="col-lg-10" data-aos="fade-up" data-aos-delay="200">
                            <form action="/" method="post" role="form" className="php-email-form">
                                <div className="form-group">
                                    <h6 className="head req"> Full Name :</h6>
                                    <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Full Name" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head req"> Email :</h6>
                                    <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter Email" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <h6 className="head req"> Phone :</h6>
                                    <input type="text" className="form-control" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="Enter Phone" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required />
                                    <div className="validate"></div>
                                </div>
                                
                                <div className="form-group">
                                    <h6 className="head3 req"> Message :</h6>
                                    <textarea className="form-control" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" data-rule="minlen:4" data-msg="Please write something for us" placeholder="Message" required></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className="mb-3">
                                    {/* <div className="loading">Loading</div> */}
                                    {/* <div className="error-message"></div> */}
                                    {/* <div className="sent-message">Your message has been sent. Thank you!</div> */}
                                </div>
                                <div className="text-center"><button onClick={addCallbackInfo} type="submit">Send Message</button></div>

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

export default Callback;