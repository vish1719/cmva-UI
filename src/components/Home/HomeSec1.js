/* eslint-disable */
import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Seo from "../Seo";

function HomeSec1() {
    useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
    return (
        <>
        <Seo
  title="Virtual Assistant for Business | ConnectMyVA Digital Support"
  description="Need help with your business? ConnectMyVA offers expert virtual assistant services for entrepreneurs and professionals. From e-commerce support to daily tasks, our skilled virtual digital assistants save you time & boost efficiency."
  path="/"
  keywords="Virtual Assistant for Business, Virtual Digital Assistant"
/>

            <section id="services" className="services">
                <div className="container">
                    <div className="section-title">
                        <h5>Why Business Head, Administrators and Entrepreneurs Choose</h5>
                    </div>

                    <div className="section-title">
                        <h1><span>Virtual Assistants </span>From ConnectMyVA</h1>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                            <div className="icon"><i className="icofont-medal-sport"></i></div>
                            <h4 className="title"><a href="">EXCEPTIONAL CLIENT SERVICE</a></h4>
                            <p className="description">We’re the business leaders in Virtual Assistant on firm grounds. In particular, we assure you to provide edified VA support.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon"><i className="icofont-focus"></i></div>
                            <h4 className="title"><a href="">EMINENTLY CUSTOMIZED EQUIVALENTS</a></h4>
                            <p className="description">Our team will commence by speaking with you to recognise your business needs contrary to other services.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon"><i className="icofont-trophy"></i></div>
                            <h4 className="title"><a href="">ELITE AND DYNAMIC EXPERTISE</a></h4>
                            <p className="description">We’ve experienced discrete teams to provide you with unique ideas as per growing industry standards.</p>
                        </div>


                    </div>
                    
                    <div className="section-title" styles="padding-bottom: 0px;" data-aos="fade-up" data-aos-delay="300">
                        <Link to={"/process"} className="common-btn animated fadeInUp scrollto">See How We Work</Link>
                        <h2><span>” If you spend your time, worth $20-25 per hour, doing something that someone else will do for $10 per hour, it’s simply a poor use of resources.”</span></h2>
                        <h4>
                        Timothy Ferriss – The 4-Hour Workweek
                        </h4>
                    </div>

                </div>
            </section>

        </>
    )
}

export default HomeSec1
