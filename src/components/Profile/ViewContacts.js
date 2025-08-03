/* eslint-disable */
import React, { useEffect, useState } from 'react';
import ContactBanner from '../Contact/ContactBanner'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import config from '../../config';
const ViewContacts = () => {
    const [contacts, setContacts] = useState("");


    // setContacts:[]

    const session = {
        token: localStorage.getItem('token'),
       
    };

    console.log(session)
    // if (session.token) {
    //     console.log(session.token)
    // }



    useEffect(() => {
        // const getContacts = async () => {
        axios.get('http://localhost:8000/me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${session.token}`
            }
        })
            .then((response) => {
                var obj = response.data;
                console.log(obj.email)
                var arr = Object.values(obj);
                console.log(arr)
                
                
                // var arrObj = arr.map(function (key) {
                //     return { [key]: obj[key] };
                // });
                // console.log(arrObj[1]);
                setContacts(arr)
                console.log(obj)

            }

            )
            // .then((res) => {
            //         console.log(res.data)
            //         setCons(res.data.results)
            // }
            //     )
            .catch((error) => {
                console.error(error)
            })
    }, [])
    // const getContacts = async () => {
    //     const response = await axios.get('http://localhost:8000/hoc')
    //     setContacts(response.data)
    // }

    // useEffect(() => {
    //     getContacts();
    // }, [])

    return (
        <> 
              <section id="services" className="pricing">
                <div className="container">

                    <div className="section-title">
                        <h2>Your Profile</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-6 icon-box priceBox  mx-auto" data-aos="fade-up">
                            <div className="packages_item1">
                                <div className="pack_head">
                                {/* <i className="icofont-paper-plane"></i> */}
                                <i class="icofont-runner-alt-1"></i>
                                    {/* <h3><strong>Name:</strong> {contacts[3]} {contacts[4]} {contacts[5]}</h3> */}
                                    {/* <p>For the individuals</p> */}
                                </div>
                                <div className="pack_body">
                                    <ul className="list">
                                    <li><span className="hextro">Name:</span> {contacts[3]} {contacts[4]} {contacts[5]}</li>
                                        <li><span className="hextro">Email:</span> {contacts[1]}</li>
                                        <li><span className="hextro">Phone:</span> {contacts[2]}</li>
                                        <li><span className="hextro">Address:</span> {contacts[6]}</li>
                                        <li><span className="hextro">City:</span> {contacts[7]}</li>
                                        <li><span className="hextro">Country:</span> {contacts[8]}</li>
                                        
                                    </ul>
                                </div>
                                {/* <div className="pack_footer">
                                    <h4>$15/Mo</h4>
                                    <a className="main_btn" href="#">Sign Up</a>
                                </div> */}
                            </div>

                        </div>
         
                        
                        
                    </div>

                    <div className="section-title my-6" >
                        <Link to="/update" className="common-btn animated fadeInUp scrollto">Update Profile</Link>
                        
                    </div>
                </div>
            </section>
            

            

        </>
    )
}

export default ViewContacts;