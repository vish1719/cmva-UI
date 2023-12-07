import React, { useEffect, useState } from 'react';


import axios from 'axios';
import { Link, useParams, useHistory } from 'react-router-dom';


// const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const Update = () => {

    let history = useHistory();
    const { id } = useParams();

    // const [image, setImage] = useState(null)
    const [first_name, setFName] = useState(null)
    const [middle_name, setMName] = useState(null)
    const [last_name, setLName] = useState(null)

    const [email, setEmail] = useState(null)
    const [address, setAddress] = useState(null)
    const [phone, setPhone] = useState(null)
    const [city, setCity] = useState(null)
    const [country, setCountry] = useState(null)

    const session = {
        token: localStorage.getItem('token'),
    };

    useEffect(() => {
        loadStudents();
    }, [])


    // load students by its is and show data to forms by value

    let loadStudents = async () => {

        let formField = new FormData()
        const result = await axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/me`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${session.token}`
            },
            data: formField,
        });
        console.log(result.data.first_name);

        // setImage(result.data.image);
        setFName(result.data.first_name);
        setMName(result.data.middle_name);
        setLName(result.data.last_name);
        setEmail(result.data.email);
        setPhone(result.data.phone);
        setAddress(result.data.address);
        setCity(result.data.city);
        setCountry(result.data.country);
    }


    // Update s single student by id

    const updateSingleStudent = async () => {
        let formField = new FormData()

        formField.append('first_name', first_name)
        formField.append('middle_name', middle_name)
        formField.append('last_name', last_name)
        // formField.append('first_name', first_name)
        // formField.append('email', email)
        formField.append('phone', phone)
        formField.append('address', address)
        formField.append('city', city)
        formField.append('country', country)

        // if (image !== null) {
        //     formField.append('image', image)
        // }


        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/rest-auth/update`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${session.token}`
            },
            data: formField,
        }).then(response => {
            console.log(response.data);
            history.push("/update");
        })

    }





    return (
        <>



            <section id="contact" className="contact new-contact">

                <div className="container">

                    <div className="section-title">
                        <h2>Update Profile</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-2 contact-sec" data-aos="fade-up" data-aos-delay="200">
                        </div>


                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

                            <form action="/" role="form" className="php-email-form" >

                                {/* <div className="form-group">
                                            <h6 className="head"> Username:</h6>
                                            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Enter username" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div> */}
                                <div className="row">

                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <h6 className="head"> First Name:</h6>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First Name"
                                                name="first_name"
                                                value={first_name}
                                                onChange={(e) => setFName(e.target.value)}
                                            />
                                        </div>
                                        {/* <div className="form-group">
                                                    <h6 className="head">First Name:</h6>
                                                    <input type="text" className="form-control" name="first_name" value={first_name} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                    <div className="validate"></div>
                                                </div> */}
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <h6 className="head">Middle Name:</h6>
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Middle Name"
                                                name="middle_name"
                                                value={middle_name}
                                                onChange={(e) => setMName(e.target.value)}
                                            />
                                        </div>
                                        {/* <div className="form-group">
                                                    <h6 className="head">Middle Name:</h6>
                                                    <input type="text" className="form-control" name="middle_name" value={middle_name} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                    <div className="validate"></div>
                                                </div> */}
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <h6 className="head">Last Name:</h6>
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Last Name"
                                                name="last_name"
                                                value={last_name}
                                                onChange={(e) => setLName(e.target.value)}
                                            />
                                        </div>
                                        {/* <div className="form-group">
                                                    <h6 className="head">Last Name:</h6>
                                                    <input type="text" className="form-control" name="last_name" value={last_name} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                    <div className="validate"></div>
                                                </div> */}
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head">Email:</h6>
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                placeholder="Enter Your E-mail Address"
                                                name="email"
                                                value={email}
                                                disabled
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        {/* <div className="form-group">
                                                    <h6 className="head">Email:</h6>
                                                    <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                    <div className="validate"></div>
                                                </div> */}
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head">Phone:</h6>
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Enter Your Phone Number"
                                                name="phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                        {/* <div className="form-group">
                                                    <h6 className="head">Phone:</h6>
                                                    <input type="text" className="form-control" name="phone" value={phone} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                    <div className="validate"></div>
                                                </div> */}
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <h6 className="head">Address:</h6>
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Enter Your address"
                                                name="address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                        {/* <div className="form-group">
                                                    <h6 className="head">Address:</h6>
                                                    <input type="text" className="form-control" name="address" value={address} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                    <div className="validate"></div>
                                                </div> */}
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head">City:</h6>
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Enter Your City"
                                                name="city"
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                            />
                                        </div>
                                        {/* <div className="form-group">
                                                    <h6 className="head">City:</h6>
                                                    <input type="text" className="form-control" name="city" value={city} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                    <div className="validate"></div>
                                                </div> */}
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <h6 className="head">Country:</h6>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Country"
                                                name="country"
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                            />
                                        </div>
                                        {/* <div className="form-group">
                                                    <h6 className="head">Country:</h6>
                                                    <input type="text" className="form-control" name="country" value={country} onChange={this.handleChange} placeholder="" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                    <div className="validate"></div>
                                                </div> */}
                                    </div>

                                    <div className="col-lg-6">

                                        {/* <div className="form-group">
                                                    <h6 className="head">Password:</h6>
                                                    <input type="password" className="form-control" name="password1" value={password1} onChange={this.handleChange} placeholder="Enter Password" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                    <div className="validate"></div>
                                                </div> */}
                                    </div>
                                    <div className="col-lg-6">
                                        {/* <div className="form-group">
                                                    <h6 className="head">Confirm Password:</h6>
                                                    <input type="password" className="form-control" name="password2" value={password2} onChange={this.handleChange} placeholder="Confirm Password" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                    <div className="validate"></div>
                                                </div> */}
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
                                <div className="text-center"><button onClick={updateSingleStudent} type="submit">Update</button></div>
                                <div className="text-center my-3">
                                    {/* <input id="magicBtn5" type="checkbox" className="custom-control-input" /> */}
                                    {/* Already have an account? <Link to="/login" className="" for="magicBtn5">Log in</Link> */}
                                </div>
                                {/* <div className="text-center log-link">
                                    <Link className="sig" to="/signup"> <div className="heya text-center">Sign Up</div></Link>
                                    </div> */}
                            </form>

                        </div>

                        <div className="col-lg-2 contact-sec" data-aos="fade-up" data-aos-delay="200">

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Update;


