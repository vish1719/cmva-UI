import React, { useState } from 'react';
import RegisterBanner from './RegisterBanner';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Seo from "../Seo";

toast.configure()

const Emailconfirm = () => {

    return (
        <>
         <Seo
                path="/emailconfirm"
        />
            {/* <RegisterBanner /> */}
            <section id="contact" className="contact new-contact">
                <div className="container">



                    <div className="row">

                        <div className="col-lg-3 contact-sec" data-aos="fade-up" data-aos-delay="200">
                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <form action="" method="post" role="form" className="php-email-form">
                                <div className="row ">
                                    
                                    <div className="col-lg-12">
                                    <div className="text-center mg-ct section-title">
                                        <h2>Account Confirmation</h2>
                                    </div>
                                        <div className="text-center mg-ht">Your account created successfully! <br/> you are logged in now... </div>

                                        
                                        <div className="text-center log-link">
                                            <Link className="sign mt-3" to="/login"> <div className="heya text-center">Dashboard</div></Link>
                                        </div>
                                    </div>

                                </div>





                            </form>
                        </div>
                        <div className="col-lg-3 contact-sec" data-aos="fade-up" data-aos-delay="200">

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Emailconfirm;