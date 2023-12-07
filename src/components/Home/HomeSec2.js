import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

function HomeSec2() {
    return (
        <>

            <section id="about" className="about" styles="padding:0px 0px">
                <div className="container">

                    <div className="row no-gutters">
                        <div className="col-lg-6 video-box iframe-container">
                            {/* <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                            <a href="https://youtu.be/ql3FC0bEAbw" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a> */}
                            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ql3FC0bEAbw" title="YouTube video player" SameSite="Lax" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                            {/* <ReactPlayer url="https://youtu.be/ql3FC0bEAbw" controls={true} /> */}
                            <div className='player-wrapper'>
                                <ReactPlayer
                                    className='react-player'
                                    url='https://youtu.be/ql3FC0bEAbw'
                                    width='100%'
                                    height='100%'
                                    controls={true}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex flex-column justify-content-center about-content">

                            {/* <div className="section-title">
                                <h2>About Us</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
                            </div> */}
                            <div className="section-titles">
                                <h5>Compatible Virtual Assistants</h5>
                            </div>
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                {/* <div className="icon"><i className="bx bx-fingerprint"></i></div> */}
                                <h2 className="title">Think of VAs, we are there to serve as <br /><span>Quick as a Click</span></h2>
                                <p className="description">We ConnectMyVA hire proficient graduates and post graduates, who give it a whirl to confer our clients with the best helping hands across the globe. Our VAs go through a stern training process that tests their ability from the scratch starting from communication to tech mastery, individuality and quick-wittedness. Many apply, but only the ones with the highest class make it to ConnectMyVA.</p>
                            </div>

                            {/* <div className="icon-box" data-aos="fade-up" data-aos-delay="100"> */}
                            {/* <div className="icon"><i className="bx bx-gift"></i></div> */}
                            {/* <h4 className="title"><a href="">Nemo Enim</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div> */}
                            <div className="services abt-btn">
                                <Link to="/how" className=" common-btn animated fadeInUp scrollto">Know More</Link>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default HomeSec2
