
import React, { useState, useRef, useEffect } from 'react';


function Product({ product }) {
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: product.description,
                                amount: {
                                    currency_code: 'USD',
                                    value: product.price,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setPaidFor(true);
                    console.log(order);
                },
                onError: err => {
                    setError(err);
                    console.error(err);
                },
            })
            .render(paypalRef.current);
    }, [product.description, product.price]);

    if (paidFor) {
        return (
            <div>
                <div className="pro-plan">
                <h2>Congrats, you just bought {product.name}!</h2>
                </div>
                <section id="contact" className="contact new-contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Signup to <span style={{ color: "#58b958" }}>ConnectMyVA</span></h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-3 contact-sec" data-aos="fade-up" data-aos-delay="200">
                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <form action="#" method="post" role="form" className="php-email-form">
                                
                                        <div className="form-group">
                                            <h6 className="head"> Username:</h6>
                                            <input type="text" className="form-control" name="name"  placeholder="Enter username" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    
                                    
                                        <div className="form-group">
                                            <h6 className="head"> Password:</h6>
                                            <input type="email" className="form-control" name="email"   placeholder="Enter Password" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="form-group">
                                            <h6 className="head">Confirm Password:</h6>
                                            <input type="email" className="form-control" name="email"   placeholder="Confirm Password" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                    
                                        
                                    
                                
                                
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
                                <div className="text-center"><button  type="submit">Sign Up</button></div>
                                <div className="text-center my-3">
                                        {/* <input id="magicBtn5" type="checkbox" className="custom-control-input" /> */}
                                        {/* <a href="" className="" for="magicBtn5">Forgot password?</a> */}
                                    </div>
                                    {/* <div className="text-center log-link">
                                    <a className="sig" href="/register"> <div className="heya text-center">Sign Up</div></a>
                                    </div> */}
                            </form>
                        </div>
                        <div className="col-lg-3 contact-sec" data-aos="fade-up" data-aos-delay="200">

                        </div>

                    </div>

                </div>
            </section>
                {/* <img alt={product.description} src={gif} /> */}
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">

                {error && <div>Uh oh, an error occurred! {error.message}</div>}
                <div className="col-lg-4"></div>

                <div className="col-lg-4 pay-subs">
                    <h3 className="paydesc">
                        {product.description} <br/>
                    </h3>
                    
                    <h3 className="paycol"> 
                    Pay - ${product.price}
                    </h3>
                    {/* <img alt={product.description} src={product.image} width="200" /> */}
                    <div ref={paypalRef} />
                </div>
                <div className="col-lg-4"></div>
            </div>

        </div>
    );
}

function Paypal() {
    const product = {
        price: 90,
        name: 'Begin-10 Plan',
        description: 'Begin-10 ',

    };

    return (
        <div className="App">
            <Product product={product} />
        </div>
    );
}

export default Paypal;