import React from 'react';
import { Link } from 'react-router-dom';
import {Progress} from 'antd';
// import ReactPlayer from 'react-player';
import { useEffect } from 'react';

function DiffSec() {
    useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
    return (
        <>

            <section id="about" className="about" styles="padding:0px 0px">
                <div className="container">

                    <div className="row no-gutters ">
                        <div className="col-lg-6 video-box">
                            <img src="assets/images/Efficiently.jpg" className="img-fluid " alt="Efficient Virtual Assistant Services" 
  title="ConnectMyVA - Efficient Virtual Assistants for Business Productivity" /> 
                            {/* <a href="https://youtu.be/ql3FC0bEAbw" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>  */}
                             {/* <iframe width="560" height="315"  allowfullscreen><img src="assets/img/about.jpg" className="img-fluid" alt="" /></iframe>  */}
                            {/* <ReactPlayer url="https://youtu.be/ql3FC0bEAbw" controls={true} /> */}
                        </div>

                        <div className="col-lg-6 d-flex flex-column justify-content-center about-content">

                            {/* <div className="section-title">
                                <h2>About Us</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
                            </div> */}
                            <div className="section-titles">
                                <h5>The Difference</h5>
                            </div>
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                {/* <div className="icon"><i className="bx bx-fingerprint"></i></div> */}
                                <h2 className="title"><span>Efficiently Working time </span>against clock-in</h2>
                                <p className="description">Generally, an employee wastes the maximum of his work time by just goofing off 
                                in the smart world with extended breaks in between. And, even gets paid for the work he didn’t do. 
                                This wasted money could be utilized just by designating your tasks for VAs.</p>
                            </div>

                            {/* <div className="icon-box" data-aos="fade-up" data-aos-delay="100"> */}
                            {/* <div className="icon"><i className="bx bx-gift"></i></div> */}
                            {/* <h4 className="title"><a href="">Nemo Enim</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div> */}
                            <div className="services abt-btn">
                            {/* <Link to={"#about"} className=" common-btn animated fadeInUp scrollto">Know More</Link> */}
                            {/* <Progress className="prog" type="circle" percent={100} width={80} /> */}
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default DiffSec
