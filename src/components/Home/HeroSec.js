import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroSec() {
    
    return (
        <>

            <section id="hero">
                <div className="hero-container">
                    <Carousel data-interval="500" fade>
                        <Carousel.Item >
                            <img
                                // className="d-block"
                                src="assets/images/slides/Home1.jpg"
                                alt="First slide"
                                // height="calc(100vh - 114px)"
                                // width="100%"
                                // styles="background-size: cover;
                                // background-position: bottom left;
                                // background-repeat: no-repeat;
                                // overflow: hidden;"
                            />
                            <Carousel.Caption className="carousel-container">
                            
                                <div className="carousel-content container">
                                    <h2 className="animated fadeInDown ">ConnectMyVA Personal Assistant Support Services To Your Business</h2>
                                    <p className="animated fadeInUp">Our skilled professionals are here to relieve your business errands and personal duties giving you more time to creep up on essential things like taking time off for your loved ones.</p>
                                    <Link to={"/How"} className="btn-get-started animated fadeInUp scrollto">Read More</Link>
                                </div>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item  >
                            <img
                                // className="d-block"
                                src="assets/images/slides/Home2.jpg"
                                alt="First slide"
                                // height="calc(100vh - 114px)"
                                // width="100%"
                                // styles="background-size: cover;
                                // background-position: top right;
                                // background-repeat: no-repeat;
                                // overflow: hidden;"
                            />
                            <Carousel.Caption className="carousel-container">
                            
                                <div className="carousel-content container">
                                    <h2 className="animated fadeInDown">Virtual assistant for entrepreneurs and professionals</h2>
                                    <p className="animated fadeInUp">Our specialist for succoring your business needs.</p>
                                    <Link to={"/executive"} className="btn-get-started animated fadeInUp scrollto">Read More</Link>
                                </div>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                // className="d-block"
                                src="assets/images/slides/Home3.jpg"
                                alt="First slide"
                                // height="calc(100vh - 114px)"
                                // width="100%"
                                // styles="background-size: cover;
                                // background-position: bottom left;
                                // background-repeat: no-repeat;
                                // overflow: hidden;"
                            />
                            <Carousel.Caption className="carousel-container">
                            
                                <div className="carousel-content container">
                                    <h2 className="animated fadeInDown">Looking For Ecommerce &amp; Amazon Support</h2>
                                    <p className="animated fadeInUp">ConnectMyVA, your trusted partner for Ecommerce and Support Support</p>
                                    <Link to={"/retail-and-ecommerce"} className="btn-get-started animated fadeInUp scrollto">Read More</Link>
                                </div>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>

        </>
    )
}

export default HeroSec
